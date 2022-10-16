import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/productsActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./CartIcons.css";

/** Display the add/remove cart icons
 * Dispatches add/remove actions.
 * Cart />
 */

const CartIcons = (id) => {

    const dispatch = useDispatch();

    const add = (evt) => {
        dispatch(addToCart(id));
    }
    const remove = (evt) => {
        dispatch(removeFromCart(id));
    }

    return (
        <div className="d-flex justify-content-center">
            <FontAwesomeIcon
                icon={faCartPlus}
                size="lg"
                onClick={add}
                className="CartIcon text-success" />

            <FontAwesomeIcon
                icon={faCartArrowDown}
                size="lg"
                onClick={remove}
                className="CartIcon text-danger" />
        </div>
    );


}

export default CartIcons;