import React, {Component} from 'react'
import {connect} from "react-redux";
import PropTypes from "prop-types";

import { BOOK_CATEGORIES } from "../../logic/book";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import { changeFilter } from "../../actions";
import {removeBook} from "../../actions";
import Book from "../../components/Book/Book";

class BooksList extends Component {
    static propTypes = {
        dispatchRemoveBook: PropTypes.func.isRequired,
        dispatchChangeFilter: PropTypes.func.isRequired,
    }
    _removeBook = (book) => {
        this.props.dispatchRemoveBook(book)
    }
    _getBooksToRender = () => {
        const {books} = this.props.bookstore
        const filterCategoryIndex = this.props.filter.filter;

        return books.filter((book, index) => {
            if (filterCategoryIndex === -1) {
                return true
            }
            if (filterCategoryIndex === BOOK_CATEGORIES.indexOf(book.category)) {
                return true
            }
            return false
        });
    }
    _handleFilterChange = (category) => {
        this.props.dispatchChangeFilter(category);
    }

    render() {
        return (
            <div>
                <CategoryFilter handleFilterChange={this._handleFilterChange} />
                {this._getBooksToRender().map((book, index) => <Book book={book} key={index} removeBook={this._removeBook}/> )}
            </div>
        )
    }

}


const mapStateToProps = (state) => ({
    bookstore: state.bookstore,
    filter: state.filter
})

const mapDispatchToProps = (dispatch) => ({
    dispatchRemoveBook: (book) => dispatch(removeBook(book)),
    dispatchChangeFilter: (category) => dispatch(changeFilter(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)