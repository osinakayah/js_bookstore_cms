import { CHANGE_FILTER } from "../actions";

const initialState = -1


export const filter = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FILTER:
            return action.data;
        default:
            return state
    }
}
