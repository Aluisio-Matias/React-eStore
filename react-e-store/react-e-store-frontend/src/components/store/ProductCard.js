import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    Card,
    Container,
    CardImg,
    CardHeader,
    CardBody,
    CardSubtitle,
    ListGroup,
    ListGroupItem,
    CardGroup,
} from "reactstrap";
import AddIcon from "../cart/AddIcon";

const ProductCard = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (

            <CardGroup key={id} className="mx-auto">
                <Card className="position-relative mx-auto my-3"
                    style={{ width: "18rem", padding: "20px" }}
                    color="dark"
                    outline>
                    <Link to={`/product/${id}`}>
                        <CardImg
                            alt={title}
                            src={image}
                            top
                            style={{ width: "100%" }} />
                        <CardHeader className="my-2" tag="h6">{title}</CardHeader>
                    </Link>
                    <CardBody>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6">
                            {category.toUpperCase()}
                        </CardSubtitle>
                        <ListGroup>
                            <ListGroupItem className="my-1">
                                <b>Price: ${price}</b>
                            </ListGroupItem>
                        </ListGroup>
                        <AddIcon id={id} />
                    </CardBody>

                </Card>
            </CardGroup>

        );
    });
    return <>{renderList}</>
}

export default ProductCard;