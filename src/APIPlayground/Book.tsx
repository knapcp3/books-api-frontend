import React, { Component } from 'react';
  
class Book extends Component<any, any> {

    render() {
        const { author, title, id, publish_year } = this.props.book;
        
        return (
            <div>
                { id ?
                <div className="m-card">
                    <div>
                        ID: { id }
                    </div>
                    <div>
                        author: { author }
                    </div>
                    <div>
                        title: { title }
                    </div> 
                    <div>
                        year of publication: { publish_year }
                    </div>  
                </div> 
                :
                <div className="m-card">
                    Book Not Found!
                </div>}
            </div>
        );
    }
}

export default Book;
