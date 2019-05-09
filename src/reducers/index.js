import { createStore, combineReducers } from 'redux';
import {bookstore} from './books'
import { filter } from "./filter";

const rootReducer = combineReducers({
    bookstore,
    filter
})

const store = createStore(
    rootReducer
)
export default store