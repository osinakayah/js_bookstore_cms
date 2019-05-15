import {CREATE_BOOK, REMOVE_BOOK} from "../actions";
import {Book} from "../logic/book";
import {BOOK_CATEGORIES} from "../logic/book";

const initialState = {
    books: [
        Book(Math.random(), 'Avengers Infinity', BOOK_CATEGORIES[0])
    ]
}

export const bookstore = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_BOOK:
            return {...state, books: [...state.books, action.data]};
        case REMOVE_BOOK:
            const newBooks = state.books.filter((book) => book.id !== action.data.id);
            return {...state, books: [...newBooks]}
        default:
            return state
    }
}