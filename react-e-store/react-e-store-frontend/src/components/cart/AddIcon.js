import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/productsActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./CartIcons.css";

const AddIcon = (id) => {
    const dispatch = useDispatch();

    const add = (evt) => {
        dispatch(addToCart(id));
    }

    return (
        <div>
            <FontAwesomeIcon
                icon={faCartPlus}
                size="xl"
                onClick={add}
                className="CartIcon text-success" />
        </div>
    )
}

export default AddIcon;