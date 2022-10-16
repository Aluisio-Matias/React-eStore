import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { StripeContainer } from "./StripeContainer"

test("it renders without crashing", () => {
    render(
        <MemoryRouter>
            <StripeContainer />
        </MemoryRouter>
    );
});
