import { buy_book, sell_book } from "./BookTypes";

const purchase_book = () => {
    return {
        type: buy_book 
    }
}

const sellBook = () => {
    return {
        type: sell_book
    }
}

export {purchase_book, sellBook}