import React, { Component } from 'react';
import Book from './Book';
  
class BookId extends Component<any, any> {

    render() {
        return (
            <div className="flex-hor">
                <div>
                    <input 
                        onChange={this.props.onChangeBookFromId}
                        value={this.props.id}
                        type="number"
                        min="1"
                        max="10"
                    />
                    <button 
                        type="submit"
                        onClick={this.props.handleBookFromIdClick}
                    >
                        search with book id
                    </button>
                </div>
                <Book 
                    book={this.props.book}
                />
            </div>
        );
    }
}

export default BookId;
