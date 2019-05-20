import React from 'react'
import {connect} from "react-redux";

import { BOOK_CATEGORIES } from "../../logic/book";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import { changeFilter, removeBook } from "../../actions";
import Book from "../../components/Book/Book";


const BooksList = props => (
    <div>
        <CategoryFilter handleFilterChange={props.dispatchChangeFilter} />
        {props.bookstore.map((book, index) => <Book book={book} key={index} removeBook={book => props.dispatchRemoveBook(book)}/> )}
    </div>
)


const mapStateToProps = (state) => ({
    bookstore: state.bookstore.filter(book => (state.filter === -1 || state.filter === BOOK_CATEGORIES.indexOf(book.category))),
})

const mapDispatchToProps = (dispatch) => ({
    dispatchRemoveBook: (book) => dispatch(removeBook(book)),
    dispatchChangeFilter: (category) => dispatch(changeFilter(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
