import { Routes, Route } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import Profile from "../components/profile/Profile";
import ProfileForm from "../components/profile/ProfileForm";
import ProductList from "../components/store/ProductList";
import ProductDetails from "../components/store/ProductDetails";
import Homepage from "../components/store/Homepage";
import Cart from "../components/cart/Cart";
import Electronics from "../components/store/Electronics";
import Jewelery from "../components/store/Jewelery";
import MensClothing from "../components/store/MensClothing";
import WomenClothing from "../components/store/WomensClothing";
import PageNotFound from "../components/store/PageNotFound";
import Unauthorized from "../components/store/Unauthorized";
import PrivateRoutes from "./PrivateRoute";
import Checkout from "../components/cart/Checkout";
import CheckoutMember from "../components/cart/CheckoutMember";
import StripeContainer from "../components/cart/StripeContainer";

const StoreRoutes = ({ signup, login }) => {

    return (
        <Routes>

            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/signup" element={<SignupForm signup={signup} />} />
            <Route path="/login" element={<LoginForm login={login} />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout login={login} />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/jewelery" element={<Jewelery />} />
            <Route path="/men's%20clothing" element={<MensClothing />} />
            <Route path="/women's%20clothing" element={<WomenClothing />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<PageNotFound />} />

            {/* Private routes */}
            <Route element={<PrivateRoutes />}>
                <Route path="/profile" element={<Profile />} exact />
                <Route path="/profile/update" element={<ProfileForm />} exact />
                <Route path="/checkout/member" element={<CheckoutMember />} exact />
                <Route path="payment" element={<StripeContainer />} />
            </Route>

        </Routes>



    )


}

export default StoreRoutes;