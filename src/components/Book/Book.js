import React from 'react'
import './Book.css'


export default props => (<div className={'book'}>
    <p className={'book-category'}>{props.book.category}</p>
    <h2 className={'book-title'}>{props.book.title}</h2>
    <p className={'book-remove'} onClick={() => props.removeBook(props.book)}>Remove</p>
</div>)
