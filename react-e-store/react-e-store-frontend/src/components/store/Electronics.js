import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchElectronics } from "../../redux/actions/productsActions";
import { Container, CardGroup } from "reactstrap";
import LoadingSpinner from "../../common/LoadingSpinner";

const Electronics = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchElectronics());
    }, []);

    console.log("Products :", products);

    return (

        <Container>
            {products.length === 0 ? (
                <LoadingSpinner />
            ) : (
                <CardGroup>
                    <ProductCard />
                </CardGroup>
            )}
        </Container>

    );

}

export default Electronics;