import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Checkout } from "./Checkout"

test("it renders without crashing", () => {
    render(
        <MemoryRouter>
            <Checkout />
        </MemoryRouter>
    );
});
