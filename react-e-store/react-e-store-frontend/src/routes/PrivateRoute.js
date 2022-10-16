import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../auth/UserContext";

const PrivateRoutes = () => {
    const { currentUser } = useContext(UserContext);

    return (
        currentUser ? <Outlet /> : <Navigate to="/unauthorized" />
    )
}

export default PrivateRoutes;