import MinMaxBook from './MinMaxBook'

function BooksTable({
    books,
    removeBook,
    setQuatinty
}) {
    return <table>
        <tbody className='Books'>
            <tr>
                <th>№</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Delete</th>
                <th>Total</th>
            </tr>
            {books.map((book, i) => (
            <tr key={book.id}>
                <td>{i + 1} </td>
                <td>{book.title} </td>
                <td>{book.price} </td>
                <td>
                    <MinMaxBook
                        max={book.rest}
                        current={book.quantity}
                        onChange={(quantity) => setQuatinty(book.id, quantity)}
                    />
                </td>
                <td>
                    <button type='button' onClick={() => removeBook(book.id)}>x</button>
                </td>
                <td>{book.price * book.quantity} руб.</td>
            </tr>
            ))}
        </tbody>
    </table>
}

export default BooksTable