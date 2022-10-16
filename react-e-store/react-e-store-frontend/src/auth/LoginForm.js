import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Alert from "../common/Alert";
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

/**
 * Login form.
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls login function prop
 * - redirects to /home route
 */

const LoginForm = ({ login }) => {
    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [formErrors, setFormErrors] = useState([]);

    console.debug(
        "LoginForm",
        "login=", typeof login,
        "formData=", formData,
        "formErrors=", formErrors,
    );

    async function handleSubmit(evt) {
        evt.preventDefault();
        let result = await login(formData);
        if (result.success) {
            navigate("/products");
        } else {
            setFormErrors(result.errs);
        }
    };

    //Update form data fields

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(data => ({ ...data, [name]: value }));
    };

    return (
        <Container className="col-md-6">
            <h1 className="display-4">Login to your account</h1>
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
                    <Link to="/"><b>Go home</b></Link>
                </CardBody>
            </Card>
        </Container>
    )
}

export default LoginForm;