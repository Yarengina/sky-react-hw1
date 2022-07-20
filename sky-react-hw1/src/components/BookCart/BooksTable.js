import PropTypes from 'prop-types'
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
            {books.map(({id, title, price, rest, quantity}, index) => (
            <tr key={id}>
                <td>{index + 1} </td>
                <td>{title} </td>
                <td>{price} </td>
                <td>
                    <MinMaxBook
                        max={rest}
                        current={quantity}
                        onChange={(bookQuantity) => setQuatinty(id, bookQuantity)}
                    />
                </td>
                <td>
                    <button type='button' onClick={() => removeBook(id)}>x</button>
                </td>
                <td>{price * quantity} руб.</td>
            </tr>
            ))}
        </tbody>
    </table>
}

BooksTable.propTypes = {
    books: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        title: PropTypes.string,
        price: PropTypes.number,
        rest: PropTypes.number,
        quantity: PropTypes.number,
    }).isRequired,
    removeBook: PropTypes.func.isRequired,
    setQuatinty: PropTypes.func.isRequired,
}

export default BooksTable