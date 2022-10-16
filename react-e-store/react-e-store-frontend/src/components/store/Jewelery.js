import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchJewelery } from "../../redux/actions/productsActions";
import { Container, CardGroup } from "reactstrap";
import LoadingSpinner from "../../common/LoadingSpinner";

const ProductsPage = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchJewelery());
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

export default ProductsPage;