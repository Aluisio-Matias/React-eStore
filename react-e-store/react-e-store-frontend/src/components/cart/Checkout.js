import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../auth/UserContext";
import { useNavigate, Navigate } from "react-router-dom";
import Alert from "../../common/Alert";
import {
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody,
    Button
} from "reactstrap";

const Checkout = ({ login }) => {

    const { currentUser } = useContext(UserContext);

    let navigate = useNavigate();

    const [formErrors, setFormErrors] = useState([]);

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    async function handleSubmit(evt) {
        evt.preventDefault();

        let result = await login(formData);
        if (result.success) {
            setTimeout(() => {
                navigate("/checkout/member");
            })
        } else {
            setFormErrors(result.errs);
        }
    };

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(data => ({ ...data, [name]: value }));
    };

    const notLoggedIn = () => {
        return (
            <>
                <h3 className="display-7 my-3">You are not currently logged in!</h3>
                <Container className="col-md-6">
                    <h3 className="display-6">Login to your account</h3>
                    <Card>
                        <CardBody>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label for="username" className="float-start">
                                        Username
                                    </Label>
                                    <Input
                                        id="username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="Enter your username"
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password" className="float-start">
                                        Password
                                    </Label>
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        required
                                    />
                                </FormGroup>
                                <div>
                                    {formErrors.length
                                        ? <Alert type="danger" messages={formErrors} />
                                        : null}
                                </div>
                                <Button
                                    type="submit"
                                    color="success"
                                    className="float-start"
                                    onSubmit={handleSubmit}
                                >Log in</Button>
                            </Form>
                            <p className="h6">Not yet a member? Register <Link to={"/signup"}>HERE</Link></p>
                        </CardBody>
                    </Card>
                </Container>
            </>
        )
    }

    const loggedIn = () => {
        return (
            <>
                <Navigate to="/checkout/member" />
            </>
        )
    }

    return (
        <div>
            <h2 className="display-5 my-2">Order Checkout</h2>
            {currentUser ? loggedIn() : notLoggedIn()}
        </div>
    )
}

export default Checkout;

