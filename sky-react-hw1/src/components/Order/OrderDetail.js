import PropTypes from 'prop-types'
import Counter from './Counter'

function OrderDetail({
    books,
    setQuatinty
}) {
    return (
        <div className='BookField'>
            {books.map(({id, title, price, rest, quantity}) => (
            <div className='Book' key={id}>
                <p className='Title'>{title}</p>
                <p className='Price'>Price: {price} /-</p>
                <p className='Price'>Quatinty: {quantity - 1}</p>
                <Counter
                    min={1}
                    max={rest + 1}
                    current={quantity}
                    onChange={(bookQuantity) => setQuatinty(id, bookQuantity)}
                />
            </div>
            ))}
        </div>
    )
}

OrderDetail.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            title: PropTypes.string,
            price: PropTypes.number,
            rest: PropTypes.number,
            quantity: PropTypes.number,
        })
    ).isRequired,
    setQuatinty: PropTypes.func.isRequired,
}

export default OrderDetail