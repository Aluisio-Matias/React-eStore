import { Link } from "react-router-dom";
import unauthorized from "./images/unauthorized.jpg";

const Unauthorized = () => {

    return (
        <>
            <img src={unauthorized} alt="Unauthorized image" className="img-fluid"></img>
            <Link to="/">
                <button className="btn btn-primary btn-lg"><b>Go Home</b></button>
            </Link>
            <br />
            <br />
            <a href="https://www.freepik.com/free-vector/401-error-unauthorized-concept-illustration_8030428.htm#query=401%20error&position=2&from_view=search">Image by storyset</a> on Freepik
        </>
    )
}

export default Unauthorized;