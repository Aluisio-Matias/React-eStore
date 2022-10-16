import { useSelector, shallowEqual } from "react-redux";
import { Link } from "react-router-dom";
import CartIcons from "./CartIcons";

//Shopping cart component

const Cart = () => {

    const {
        cartItems,
        cartValue,
        products,
    } = useSelector((store) => store.shoppingCart, shallowEqual);

    const renderTable = () => {

        const itemRows = Object.keys(cartItems).map(id => (
            <>
                <tr key={id}>
                    <td className="text-center align-middle">
                        <Link to={`/product/${id}`}>{products[id].title}</Link>
                    </td>
                    <td className="text-center align-middle">${products[id].price.toFixed(2)}</td>
                    <td className="text-center align-middle">{cartItems[id]}</td>
                    <td>
                        <CartIcons id={id} />
                    </td>
                </tr>
            </>
        ));
        return (
            <>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        <th>Item Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {itemRows}
                </tbody>
            </>
        );
    }

    const renderFooter = () => {

        return (
            <>
                <tfoot>
                    <tr>
                        <td className="text-end"><b>Your Total:</b></td>
                        <td className="text-start"><b>${cartValue}</b></td>
                    </tr>
                </tfoot>
            </>
        )
    }

    return (
        Object.keys(cartItems).length === 0
            ? <h2 className="display-5">Your cart is currently empty!</h2>
            : (
                <>
                    <table className="table table-bordered table-striped">
                        {renderTable()}
                        {renderFooter()}
                    </table>
                    <Link to="/checkout">
                        <button className="btn btn-primary">Proceed to Checkout</button>
                    </Link>
                </>
            )
    )
}

export default Cart;