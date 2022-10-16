import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Cart } from "./Cart";

test("it renders without crashing", () => {
    render(
        <MemoryRouter>
            <Cart />
        </MemoryRouter>
    );
    const pageElement = screen.getByText(/Your cart is currently empty!/i);
    expect(pageElement).toBeInTheDocument();
});
