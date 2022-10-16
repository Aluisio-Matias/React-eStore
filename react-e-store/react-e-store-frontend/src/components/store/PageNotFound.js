import { Link } from "react-router-dom";
import error_img from "./images/error_img.jpg";

const PageNotFound = () => {

    return (

        <div>
            <img src={error_img} alt="404_error_image" className="img-fluid" />
            <Link to={"/"}>
                <button className="btn btn-primary"><b>Go Home</b></button>
            </Link>
            <br />
            <br />
            <a href="https://www.freepik.com/free-vector/401-error-unauthorized-concept-illustration_8030428.htm#query=401%20error&position=2&from_view=search">Image by storyset</a> on Freepik
        </div>
    );
}

export default PageNotFound;