import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, removeSelectedProduct } from "../../redux/actions/productsActions";
import LoadingSpinner from "../../common/LoadingSpinner";
import {
    Card,
    CardBody,
    Container,
    CardImg,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem,
    CardSubtitle,
} from "reactstrap";

import AddButton from "../cart/AddButton";

const ProductDetails = () => {
    const { productId } = useParams();

    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;

    const dispatch = useDispatch();

    useEffect(() => {
        if (productId && productId !== "") dispatch(fetchProduct(productId));
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, []);

    return (

        <Container>
            {Object.keys(product).length === 0 ? (
                <LoadingSpinner />
            ) : (
                <Card
                    className="position-relative mx-auto my-5"
                    style={{ width: "50%" }} outline hover>
                    <CardImg
                        alt={title}
                        src={image}
                        top />
                    <CardBody>
                        <CardTitle tag="h5">
                            {title}
                        </CardTitle>
                        <CardText>
                            {description}
                        </CardText>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6">
                            {category.toUpperCase()}
                        </CardSubtitle>
                        <ListGroup>
                            <ListGroupItem className="my-2">
                                <b>Price: ${price}</b>
                            </ListGroupItem>
                        </ListGroup>
                        <AddButton id={productId} />
                    </CardBody>
                </Card>
            )}
        </Container>

    )

}

export default ProductDetails;
