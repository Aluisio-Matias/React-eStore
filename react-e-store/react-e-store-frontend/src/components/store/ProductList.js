import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../redux/actions/productsActions";
import { Container, CardGroup } from "reactstrap";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../common/LoadingSpinner";

const ProductsPage = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    console.log("Products :", products);

    return (

        <Container >
            {products.length === 0 ? (
                <LoadingSpinner />
            ) : (
                <CardGroup >
                    <ProductCard />
                </CardGroup>
            )}
            <Link to="/" className="btn btn-block btn-link">
                Go Home
            </Link>
        </Container>

    );


}

export default ProductsPage;