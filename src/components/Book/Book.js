import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Book.css'

export default class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        removeBook: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className={'Book'}>
                <p className={'Book-category'}>{this.props.book.category}</p>
                <h2 className={'Book-title'}>{this.props.book.title}</h2>
                <p className={'Book-remove'} onClick={() => this.props.removeBook(this.props.book)}>Remove</p>
            </div>
        )
    }
}
