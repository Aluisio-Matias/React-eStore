import { UncontrolledCarousel, Nav, NavItem, Button } from "reactstrap";
import logo192 from "./images/logo192.png";
import "./Homepage.css";

// React eStore's homepage
//Shows store's categories

const Homepage = () => {


    return (
        <div className="container">
            <h1 className="display-1"><img
                src={logo192}
                id="App-logo"
                alt="React logo" />React eStore</h1>
            <UncontrolledCarousel
                items={[
                    {
                        altText: "Men's Clothing",
                        key: 1,
                        src: 'https://picsum.photos/id/1059/1200/600'
                    },
                    {
                        altText: 'Electronics',
                        key: 2,
                        src: 'https://picsum.photos/id/2/1200/600'
                    },
                    {
                        altText: "Jewelery",
                        key: 3,
                        src: 'https://picsum.photos/id/628/1200/600'
                    },
                    {
                        altText: "Women's Clothing",
                        key: 4,
                        src: "https://picsum.photos/id/21/1200/600"
                    }
                ]}
            />
            <h5 className="display-5 my-3">Shop by Category</h5>
            <Nav fill pills>
                <NavItem>
                    <Button color="white" className="btn btn-outline-info" href="/electronics"><b>Electronics</b></Button>
                </NavItem>
                <NavItem>
                    <Button color="white" className="btn btn-outline-info" href="/jewelery"><b>Jewelery</b></Button>
                </NavItem>
                <NavItem>
                    <Button color="white" className="btn btn-outline-info" href="/men's%20clothing"><b>Men's Clothing</b></Button>
                </NavItem>
                <NavItem>
                    <Button color="white" className="btn btn-outline-info" href="/women's%20clothing"><b>Women's Clothing</b></Button>
                </NavItem>
            </Nav>

            <figure className="text-center my-5">
                <blockquote className="blockquote">
                    <p>React eStore is a fake store, so your products will never arrive.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    Have fun shopping! <cite titleName="Source Title">Created by: Aluisio Matias</cite>
                    <p></p>
                </figcaption>
            </figure>
        </div>
    )
}

export default Homepage;
