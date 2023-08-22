import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {purchase_book, sellBook } from './BookAction';

const BookContainer = () => {
  const numberOfBooks = useSelector(state => state.noOfBooks)
  console.log(numberOfBooks)
  const dispatch = useDispatch();

  return (
    <div>
      <h1>BookCOnatiner</h1>
      <h2>No. of Books - {numberOfBooks}</h2>

      <button onClick={()=> (dispatch(purchase_book()))}>Buy Book - 1</button>

      <button onClick={()=> (dispatch(sellBook()))}>Sell Book + 1</button>
    </div>
  )
}

export default BookContainer
