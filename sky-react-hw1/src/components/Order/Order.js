import { useState } from 'react'
import OrderDetail from './OrderDetail'
import booksStub from '../BookCart/booksStub'

function Order() {
    const [books, setBooks] = useState(booksStub())
    const totalPrice = books.reduce(
        (previousValue, currentBook) => 
        previousValue + currentBook.price * (currentBook.quantity - 1), 0
    )

    const totalQuatinty = books.reduce(
        (previousValue, currentBook) => 
        previousValue + (currentBook.quantity - 1), 0
    )

    const setQuatinty = (id, quantity) => {
        setBooks(
            books.map((book) => (book.id !== id ? book : { ...book, quantity }))
        )
    }

    return (
        <div>
            <OrderDetail
                books={books}
                setQuatinty={setQuatinty}
            />
            <p className='Total'>Total Quatinty: <strong>{totalQuatinty}</strong></p>
            <p className='Total'>Total Price: <strong>{totalPrice} /-</strong></p>
        </div>
    )
  }
  
export default Order