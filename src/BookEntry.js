import './BookEntry.css';
import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

class BookEntry extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            author: '',
            rating: null,
            finishedDate: '',
            review: '',
            originalRating: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.starMouseEnter = this.starMouseEnter.bind(this);
        this.starMouseLeave = this.starMouseLeave.bind(this);
        this.starMouseClick = this.starMouseClick.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.onAddBook(this.state);
    }

    handleCancel(event) {
        event.preventDefault();

        this.clear();
        this.props.onCancelEntry();
    }

    clear() {
        this.setState({
            title: '',
            author: '',
            rating: null,
            finishedDate: '',
            review: '',
            originalRating: null
        });
    }

    starMouseEnter(event) {
        var position = event.target.id;
        this.setState({ rating: position })
    }

    starMouseLeave(event) {
        this.setState({ rating: this.state.originalRating })
    }

    starMouseClick(event) {
        var position = event.target.id;
        this.setState({
            "rating": position,
            "originalRating": position
        })
    }

    buildStar(position) {
        if (this.state.rating == 0
            || this.state.rating === null
            || position > this.state.rating) {
            return (
                <i className="fa fa-star"
                    id={position}
                    style={{ color: 'black' }}
                    onMouseEnter={this.starMouseEnter}
                    onMouseLeave={this.starMouseLeave}
                    onClick={this.starMouseClick}></i>
            );
        }
        else {
            return (
                <i className="fa fa-star"
                    id={position}
                    style={{ color: 'gold' }}
                    onMouseEnter={this.starMouseEnter}
                    onMouseLeave={this.starMouseLeave}
                    onClick={this.starMouseClick}></i>
            );
        }
    }

    render() {
        let stars = (

            <div className="stars">
                {this.buildStar(1)}
                {this.buildStar(2)}
                {this.buildStar(3)}
                {this.buildStar(4)}
                {this.buildStar(5)}
            </div>
        );

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <FormControl
                            type="text"
                            name="title"
                            value={this.state.title}
                            placeholder="Book Title"
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormControl
                            type="text"
                            name="author"
                            value={this.state.author}
                            placeholder="Author"
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormControl
                            type="date"
                            name="finishedDate"
                            value={this.state.finishedDate}
                            placeholder="Finished Date"
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        {stars}
                    </FormGroup>

                    <FormGroup>
                        <FormControl
                            componentClass="textarea"
                            name="review"
                            value={this.state.review}
                            placeholder="Review"
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <div>
                        <Button
                            type="submit"
                            bsStyle="success">
                            Add Book Review
                        </Button>

                        <Button
                            bsStyle="danger"
                            onClick={this.handleCancel}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        );
    }

}

export default BookEntry;
