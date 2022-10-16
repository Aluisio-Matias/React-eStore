import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Alert from "../common/Alert";
import {
    Container,
    Form,
    FormGroup,
    Label, Input,
    Row,
    Col,
    Button,
    Card,
    CardBody,
} from "reactstrap";


/**
 * Signup form.
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls signup function prop
 * - redirects to /products route
 */

const SignupForm = ({ signup }) => {
    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
    });

    const [formErrors, setFormErrors] = useState([]);

    console.debug(
        "SignupForm",
        "signup=", typeof signup,
        "formData=", formData,
        "formErros=", formErrors,
    );

    //Handle form submit

    async function handleSubmit(evt) {
        evt.preventDefault();
        let result = await signup(formData);
        if (result.success) {
            setTimeout(() => {
                navigate("/products");
            })

        } else {
            setFormErrors(result.errs);
        }
    };

    //Update formData fields

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(data => ({ ...data, [name]: value }));
    };

    return (
        <Container className="col-md-6">
            <h1 className="display-4">Create your profile</h1>
            <Card>
                <CardBody>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="email" className="float-start">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="username" className="float-start">
                                        Username
                                    </Label>
                                    <Input
                                        id="username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="Your username"
                                        required
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
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
                                        placeholder="Your password"
                                        required
                                    />

                                </FormGroup>
                            </Col>
                        </Row>

                        {formErrors.length ? <Alert type="danger" messages={formErrors} /> : null}

                        <Button
                            type="submit"
                            color="success"
                            className="my-3"
                            onClick={handleSubmit}
                        >Submit</Button>

                    </Form>
                    <Link to="/"><b>Go home</b></Link>
                </CardBody>
            </Card>
        </Container>
    );
}

export default SignupForm;