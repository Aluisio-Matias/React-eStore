import { useState, useContext, useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import "./PaymentForm.css";
import { Card, CardBody, Container, Button } from "reactstrap";
import { useSelector, shallowEqual } from "react-redux";
import { calculateTotalQuantity } from "../../helpers/helpers";
import UserContext from "../../auth/UserContext";
import { Table } from "reactstrap";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/actions/productsActions";
import { Link } from "react-router-dom";
import E_StoreApi from "../../api/DatabaseApi";

// Stripe payment styling
const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#080808",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            ":placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#e03761",
            color: "#e03761"
        }
    }
}

const PaymentForm = () => {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const { currentUser } = useContext(UserContext);

    const {
        cartItems,
        cartValue,
        products,
    } = useSelector((store) => store.shoppingCart, shallowEqual);

    const itemCount = useSelector(
        (store) => calculateTotalQuantity(store.shoppingCart.cartItems));

    const dispatch = useDispatch();



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

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })



        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("http://localhost:3001/payment", {
                    amount: cartValue * 100,
                    id
                })

                if (response.data.success) {
                    console.log("Successful Payment!")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)

            }
        } else {
            console.log("Error", error)
        }
    }

    /**Add order to database */
    async function handleOrderSubmit() {
        let data = {
            productName: products.title,
            quantity: itemCount,
            totalAmount: cartValue,
            user_id: currentUser.id,
        }

        if (success) {
            await E_StoreApi.createOrder(data);
        } else {
            return
        }
    }

    useEffect(() => {
        handleOrderSubmit()
    }, [success])

    /**clear cart data after order is submitted */
    const clear = (evt) => {
        setTimeout(() => {
            dispatch(clearCart())
        });

    }

    return (
        <>
            <Container>
                <Table size="sm">
                    {renderTable()}
                    {renderFooter()}
                </Table>
                <Card>
                    <CardBody>
                        {!success ?

                            <form onSubmit={handleSubmit}>
                                <p className="h5">Enter your card below and submit your order.</p>
                                <fieldset>
                                    <div className="StripeFormRow">
                                        <CardElement options={CARD_OPTIONS} />
                                    </div>
                                </fieldset>
                                <button className="StripeButton">Submit Payment</button>
                            </form>
                            :
                            <div>
                                {clear()}
                                <h2>{currentUser.firstName} your order has been submitted! Thank you for your purchase!</h2>
                                <Link to="/">
                                    <Button color="primary">Go Home</Button>
                                </Link>
                            </div>

                        }
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}

export default PaymentForm;