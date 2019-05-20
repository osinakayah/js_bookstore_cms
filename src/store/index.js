import { createStore, combineReducers } from 'redux';
import {bookstore} from '../reducers/books'
import { filter } from "../reducers/filter";

const rootReducer = combineReducers({
    bookstore,
    filter
})

const store = createStore(
    rootReducer
)
export default store