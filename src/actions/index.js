export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER'

export function createBook(book) {
    return {
        type: CREATE_BOOK,
        data: book
    }
}

export function removeBook(book) {
    return {
        type: REMOVE_BOOK,
        data: book
    }
}

export function changeFilter(category) {
    return {
        type: CHANGE_FILTER,
        data: category
    }
}
