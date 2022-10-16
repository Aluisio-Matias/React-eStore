import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY = "pk_test_51LsgX4DI4ydSg8KMDa7fl15tvetbvJJqzNLjBK7cKPLgcHVHsmdApyAMS0ikY9LCkIGkRW02jq9TkncbfjiIBDRH00q5c5dCkb"

const stripePromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {

    return (
        <>
            <Elements stripe={stripePromise}>
                <PaymentForm />
            </Elements>
        </>
    )
}

export default StripeContainer;
