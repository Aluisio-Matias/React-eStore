import { useState, useContext } from "react";
import E_StoreApi from "../../api/DatabaseApi";
import UserContext from "../../auth/UserContext";
import Alert from "../../common/Alert"
import { Link, useNavigate } from "react-router-dom";

const ProfileForm = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        phone: currentUser.phone,
        address1: currentUser.address1,
        city: currentUser.city,
        state: currentUser.state,
        zipcode: currentUser.zipcode,
        username: currentUser.username,
        password: "",
    });

    const [formErrors, setFormErrors] = useState([]);
    const [saveConfirmed, setSaveConfirmed] = useState(false);

    async function handleSubmit(evt) {
        evt.preventDefault();

        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            address1: formData.address1,
            city: formData.city,
            state: formData.state,
            zipcode: formData.zipcode,
            username: currentUser.username,
            password: formData.password,
        };

        let username = formData.username;
        let updatedUser;

        try {
            updatedUser = await E_StoreApi.updateProfile(username, profileData);
            navigate("/profile");
        } catch (errors) {
            setFormErrors(errors);
            return;
        }

        setFormData(f => ({ ...f, password: "" }));
        setFormErrors([]);
        setSaveConfirmed(true);
        setCurrentUser(updatedUser);

    }

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(f => ({
            ...f,
            [name]: value,
        }));
        setFormErrors([]);
    }

    return (
        <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
            <h3>{currentUser.firstName ? currentUser.firstName : currentUser.username}, update your user profile. </h3>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>Username</label>
                            <p className="form-control-plaintext">{formData.username}</p>
                        </div>
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                name="firstName"
                                className="form-control"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                name="lastName"
                                className="form-control"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input
                                name="phone"
                                className="form-control"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Address 1</label>
                            <input
                                name="address1"
                                className="form-control"
                                value={formData.address1}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <input
                                name="city"
                                className="form-control"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>State</label>
                            <input
                                name="state"
                                className="form-control"
                                value={formData.state}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Zip Code</label>
                            <input
                                name="zipcode"
                                className="form-control"
                                value={formData.zipcode}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm password to make changes:</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        {formErrors.length
                            ? <Alert type="danger" messages={formErrors} />
                            : null}

                        <button
                            className="btn btn-primary btn-block mt-4 mb-1 mx-1"
                            onClick={handleSubmit}
                        >
                            Save Changes
                        </button>
                        <Link to="/profile">
                            <button className="btn btn-secondary btn-block mt-4 mb-1 mx-1">Cancel</button>
                        </Link>
                    </form>
                    <a href="/"><b>Go Home</b></a>
                </div>
            </div>
        </div>
    );

}

export default ProfileForm;