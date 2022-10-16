import { useContext } from "react";
import { useSelector } from "react-redux";
import { calculateTotalQuantity } from "../../helpers/helpers"
import {
    Nav,
    Navbar,
    NavItem,
    NavLink,
    NavbarBrand,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faShop } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../../auth/UserContext"
import { Link } from "react-router-dom";

//Navbar - displays on every page of the app.
//When user is logged in, shows links to main areas of site. 
//When user is logout shows link to Login and Signup forms.

const Navigation = ({ logout }) => {
    //get current user from UserContext
    const { currentUser } = useContext(UserContext);
    console.debug("Navigation", "currentUser=", currentUser);

    const itemCount = useSelector((store) => calculateTotalQuantity(store.shoppingCart.cartItems))

    function loggedInNav() {
        return (
            <Navbar className="me-auto" color="dark" dark>
                <NavbarBrand href="/">
                    React eStore <FontAwesomeIcon icon={faShop} /></NavbarBrand>
                <Nav className="position-relative" pills>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Shop
                        </DropdownToggle>
                        <DropdownMenu end>
                            <DropdownItem>
                                <NavLink href="/electronics">Electronics</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="/jewelery">Jewelery</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="/men's%20clothing">Men's clothing</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="/women's%20clothing">Women's clothing</NavLink>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <NavLink href="/products">All products</NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink href="/profile">Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/" onClick={logout}>
                            Log out <b>{currentUser.firstName ? currentUser.firstName : currentUser.username}</b>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <Link to="/cart">
                            <FontAwesomeIcon icon={faCartShopping} size="xl" className="mt-2 mx-2" />
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {itemCount ? itemCount : ""}
                            </span>
                        </Link>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }

    function loggedOutNav() {
        return (
            <Navbar className="me-auto" color="dark" dark>
                <NavbarBrand href="/">
                    React eStore <FontAwesomeIcon icon={faShop} /></NavbarBrand>
                <Nav className="position-relative" pills>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Shop
                        </DropdownToggle>
                        <DropdownMenu end>
                            <DropdownItem>
                                <NavLink href="/electronics">Electronics</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="/jewelery">Jewelery</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="/men's%20clothing">Men's clothing</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="/women's%20clothing">Women's clothing</NavLink>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <NavLink href="/products">All products</NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink className="btn btn-primary me-auto" href="/signup"><b>Sign up</b></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="btn btn-primary me-auto" href="/login"><b>Log in</b></NavLink>
                    </NavItem>
                    <NavItem>
                        <Link to="/cart">
                            <FontAwesomeIcon icon={faCartShopping} size="xl" className="mt-2 mx-2" />
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {itemCount ? itemCount : ""}
                            </span>
                        </Link>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }

    return (
        <>
            {currentUser ? loggedInNav() : loggedOutNav()}
        </>
    );

}

export default Navigation;