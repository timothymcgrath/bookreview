const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.use(bodyParser.json());

MongoClient.connect('mongodb://timothymcgrath:btamaRezlukl36@ds155684.mlab.com:55684/bookreview',
    (err, database) => {
        if (err) {
            return console.log(err);
        }

        db = database;

        app.listen(3000, function () {
            console.log('Example app listening on port 3000!');
        });
    })

let books = [];

app.get('/books/', function (req, res) {

    res.setHeader('Content-Type', 'application/json');

    var items = db.collection('books')
        .find()
        .toArray((err, data) => 
        {
            res.send(data);
        });
});

app.post('/books/', function (req, res) {

    // var duplicate = false;

    // books.forEach(function (book) {
    //     if (book.title === req.body.title) {
    //         duplicate = true;
    //     }
    // }, this);

    // if (duplicate) {
    //     res.status(400).send("Duplicate Entry");
    //     return;
    // }

    db.collection('books')
        .save(req.body, (err, results) => {
            if (err) {
                return console.log(err);
            }

            console.log('saved to database');
        });

    res.send();
});

app.delete('/books/:id', function (req, res) {
    db.collection('books')
    .deleteOne({_id: new mongodb.ObjectID(req.params.id)}, function(err, result) {
        if(err) 
        {
            throw err;
        }

        res.send();
    });
});
