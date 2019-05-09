import { CHANGE_FILTER } from "../actions";

const initialState = {
    filter: -1
}


export const filter = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FILTER:
            return Object.assign({}, state, {filter :action.data}  )
        default:
            return state
    }
}
