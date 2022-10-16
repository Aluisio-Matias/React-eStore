import { useSelector, shallowEqual } from "react-redux";
import { calculateTotalQuantity } from "../../helpers/helpers";
import { Container, Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../auth/UserContext";


const CheckoutMember = () => {
    const { currentUser } = useContext(UserContext);

    const {
        cartItems,
        cartValue,
        products,
    } = useSelector((store) => store.shoppingCart, shallowEqual);

    const itemCount = useSelector(
        (store) => calculateTotalQuantity(store.shoppingCart.cartItems));


    const renderTable = () => {

        const itemRows = Object.keys(cartItems).map(id => (
            <>
                <tr key={id} className="table-light">
                    <td className="text-center align-middle">{cartItems[id]}</td>
                    <td className="text-start">
                        {products[id].title}
                    </td>
                    <td className="text-center align-middle">${products[id].price.toFixed(2)}</td>
                </tr>
            </>
        ));
        return (
            <>
                <thead>
                    <tr className="table-secondary">
                        <th>Quantity</th>
                        <th className="text-start">Item Name</th>
                        <th>Item Price</th>
                    </tr>
                </thead>
                <tbody>
                    {itemRows}
                </tbody>
            </>
        )
    }

    const renderFooter = () => {

        return (
            <>
                <tfoot>
                    <tr>
                        <td><b>Total items: {itemCount}</b></td>
                        <td className="text-end"><b>Your Total Amount:</b></td>
                        <td><b>${cartValue}</b></td>
                    </tr>
                </tfoot>
            </>
        )
    }

    return (
        <Container>
            <h3 className="display-5 my-3">{currentUser.firstName ? currentUser.firstName : currentUser.username}, here is your order's summary.</h3>
            <Table size="sm">
                {renderTable()}
                {renderFooter()}
            </Table>
            <Link to="/cart">
                <Button color="warning my-0">Update your cart</Button>
            </Link>
            <div className="col-md-6 col-lg-6 offset-md-3 offset-lg-3">

                <div className="card my-3">
                    <p className="h2">Confirm your shipping details</p>
                    <div className="card-body text-start">
                        <form>
                            <div className="form-group">
                                <label className="h6">Full Name</label>
                                <p className="display-6">{currentUser.firstName} {currentUser.lastName}</p>
                            </div>
                            <div className="form-group">
                                <label className="h6">Email</label>
                                <p className="display-6">{currentUser.email}</p>
                            </div>
                            <div className="form-group">
                                <label className="h6">Phone</label>
                                <p className="display-6">{currentUser.phone}</p>
                            </div>
                            <div className="form-group">
                                <label className="h6">Address</label>
                                <p className="display-6">
                                    {currentUser.address1}, {currentUser.city}, {currentUser.state} {currentUser.zipcode}</p>
                            </div>
                            <div className="form-group">
                                <label className="h6">City, State and Zip Code</label>
                                <p className="display-6">
                                    {currentUser.city}, {currentUser.state} {currentUser.zipcode}</p>
                            </div>
                            <Link to="/profile/update">
                                <Button color="warning my-0">Update Profile</Button>
                            </Link>
                        </form>

                    </div>
                    <Link to="/payment" >
                        <Button color="primary my-3">Add Payment</Button>
                    </Link>
                </div>
            </div>


        </Container>
    )


}

export default CheckoutMember;