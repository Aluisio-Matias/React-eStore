import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginForm from "./LoginForm";

test("it renders without crashing", () => {
    render(
        <MemoryRouter>
            <LoginForm />
        </MemoryRouter>
    );
    const pageElement = screen.getByText(/Login to your account/i);
    expect(pageElement).toBeInTheDocument();
});
