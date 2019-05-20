import {CREATE_BOOK, REMOVE_BOOK} from "../actions";
import {Book} from "../logic/book";
import {BOOK_CATEGORIES} from "../logic/book";

const initialState = [
    Book(Math.random(), 'Avengers Infinity', BOOK_CATEGORIES[0])
]

export const bookstore = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_BOOK:
            return [...state, action.data]
        case REMOVE_BOOK:
            return state.filter((book) => book.id !== action.data.id)
        default:
            return state
    }
}