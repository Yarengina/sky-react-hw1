import { useState } from 'react'
import BooksTable from './BooksTable'
import booksStub from './booksStub'
import LoginPass from './LoginPass'

function BookCart() {
    const [books, setBooks] = useState(booksStub())
    const totalAmount = books.reduce(
        (previousValue, currentBook) => 
        previousValue + currentBook.price * currentBook.quantity, 0
    )

    const handleRemoveBook = (id) => {
      setBooks(books.filter((book) => book.id !== id))
    }

    const EmptyCart = (
        <h3 className='Books'>Your cart is empty.</h3>
    )

    const setQuatinty = (id, quantity) => {
        setBooks(
            books.map((book) => (book.id !== id ? book : { ...book, quantity }))
        )
    }

    return (
        <div>
            <h1>Book cart</h1>
            <LoginPass />
            {books.length ? (
                <BooksTable
                books={books}
                removeBook={handleRemoveBook}
                setQuatinty={setQuatinty}
                />
            ) : (
                EmptyCart
            )}
            <h3 className='Books'>Total amount: {totalAmount} руб.</h3>
        </div>
    )
  }
  
export default BookCart