import React, { Component } from 'react';
import config from '../config';
import RandomTitle from './RandomTitle';
import BookId from './BookId';
import IPlaygroundState from './../models/IPlaygroundState';

class APIPlayground extends Component<any, IPlaygroundState> {
    constructor(props: any) {
        super(props);
        this.state = {
            randomTitle: "",
            bookFromId: {},
            bookIdValue: ""
        }
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
        fetch(`${config.baseUrl}/api/book/random-title`)
            .then(res => {
                if (res.status > 400)
                    throw new Error('Error Response From Server')
                return res.json();
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
        fetch(`${config.baseUrl}/api/book/${id}`)
            .then(res => {
                if (res.status > 400)
                    throw new Error('Error Response From Server')
                return res.json();
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
            <section className="api-playground">
                <header>
                    API Playground
                </header>
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
            </section>
        );
    }
}

export default APIPlayground;