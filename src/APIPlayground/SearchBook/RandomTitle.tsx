import React, { Component } from 'react';
import IRandomTitleProps from '../../models/IRandomTitleProps';

class RandomTitle extends Component<IRandomTitleProps, any> {

    render() {
        return (
            <div className="flex-hor">
                <button onClick={this.props.handleRandomTitleClick}>random title from db!</button>
                <div>
                    {this.props.randomTitle}
                </div>
            </div>
        );
    }
}

export default RandomTitle;
