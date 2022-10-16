import { useContext, } from "react";
import UserContext from "../../auth/UserContext";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Profile = () => {

    const { currentUser } = useContext(UserContext);

    const renderTable = () => {

        return (
            <Table>
                <thead>
                    <tr className="table-secondary">
                        <th>
                            Username
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Phone
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-light">
                        <th>
                            {currentUser.username}
                        </th>
                        <th>
                            {currentUser.email}
                        </th>
                        <th>
                            {currentUser.firstName}
                        </th>
                        <th>
                            {currentUser.lastName}
                        </th>
                        <th>
                            {currentUser.phone}
                        </th>
                    </tr>
                </tbody>
            </Table>

        )
    }

    const ordersTable = () => {
        return (
            <Table hover>
                <thead>
                    <tr>
                        <th>
                            Order #
                        </th>
                        <th>
                            Quantity
                        </th>
                        <th>
                            Total Amount
                        </th>
                        <th>
                            Order Date
                        </th>
                        <th>
                            Order Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">

                        </th>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>
                </tbody>
            </Table>
        )
    }

    return (
        <>
            <h1 className="display-5">{currentUser.firstName ? currentUser.firstName : currentUser.username}, welcome to your profile!</h1>
            <p className="h5 my-3">Your current data on file</p>

            {renderTable()}

            <Link to="/profile/update">
                <Button color="warning">Update your profile</Button>
            </Link>

            <p className="h5 mt-5">Order history</p>

            {ordersTable()}

            {/* <h5 className="display-6">You currently don't have any orders!</h5> */}
            <p></p>
        </>
    )

}

export default Profile;