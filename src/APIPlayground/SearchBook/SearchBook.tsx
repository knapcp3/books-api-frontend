import React, { Component } from 'react';
import RandomTitle from './RandomTitle';
import BookId from './BookId';
import axios from 'axios';
import config from '../../config';

class CreateBook extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            randomTitle: "",
            bookFromId: {},
            bookIdValue: "1"
        }
    }

    componentDidMount() {
        this.fetchBookFromId(1);
    }

    handleRandomTitleClick = () => {
        this.fetchRandomTitle();
    }

    handleBookFromIdClick = () => {
        const id = +this.state.bookIdValue;
        this.fetchBookFromId(id);
    }

    onChangeBookFromId = (e: any) => {
        this.setState({
            bookIdValue: e.target.value
        });
    }

    fetchRandomTitle() {
        axios.get(`${config.baseUrl}/api/book/random-title`)
            .then(res => {
                if (res.status > 400)
                    throw new Error('Error Response From Server')
                return res.data;
            })
            .then(book => {
                this.setState({
                    randomTitle: book.title
                });
            })
            .catch(err => {
                this.setState({
                    bookFromId: {}
                })
                console.log(err);
            });
    }

    fetchBookFromId(id: number) {
        axios.get(`${config.baseUrl}/api/book/${id}`)
            .then(res => {
                if (res.status > 400)
                    throw new Error('Error Response From Server')
                return res.data;
            })
            .then(book => {
                this.setState({
                    bookFromId: book
                });
            })
            .catch(err => {
                this.setState({
                    bookFromId: {}
                })
                console.log(err);
            });
    }

    render() {
        return (
            <div className="m-card">
                <RandomTitle 
                    randomTitle={this.state.randomTitle}
                    handleRandomTitleClick={this.handleRandomTitleClick}
                />
                <BookId 
                    book={this.state.bookFromId}
                    handleBookFromIdClick={this.handleBookFromIdClick}
                    id={this.state.bookIdValue}
                    onChangeBookFromId={this.onChangeBookFromId}
                />
            </div>
        );
    }
}

export default CreateBook;
