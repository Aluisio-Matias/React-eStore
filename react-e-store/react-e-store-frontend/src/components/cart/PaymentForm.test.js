import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PaymentForm } from "./PaymentForm";

test("it renders without crashing", () => {
    render(
        <MemoryRouter>
            <PaymentForm />
        </MemoryRouter>
    );
    const pageElement = screen.getByText(/Enter your card below and submit your order./i);
    expect(pageElement).toBeInTheDocument();
});