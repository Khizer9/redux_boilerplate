import { buy_book, sell_book } from "./BookTypes"

const initialState = {
    noOfBooks: 30
}

const bookReducer = (state = initialState, action) => {
    switch(action.type) {
        case buy_book : return {
            ...state, noOfBooks: state.initialState - 1
        }
        case sell_book : return {
            ...state, noOfBooks: state.initialState + 1
        }
        default: return state
    }
}

export default bookReducer;