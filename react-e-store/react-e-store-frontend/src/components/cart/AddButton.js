import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/productsActions";
import { Button } from "reactstrap";

const AddButton = (id) => {
    const dispatch = useDispatch();

    const add = (evt) => {
        dispatch(addToCart(id));
    }

    return (
        <div>
            <Button onClick={add} color="success">Add to Cart</Button>
        </div>
    )

}

export default AddButton;
