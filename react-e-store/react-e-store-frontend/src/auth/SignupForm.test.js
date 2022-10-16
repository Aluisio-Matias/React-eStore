import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SignupForm from "./SignupForm";

test("it renders without crashing", () => {
    render(
        <MemoryRouter>
            <SignupForm />
        </MemoryRouter>
    );
    const pageElement = screen.getByText(/Create your profile/i);
    expect(pageElement).toBeInTheDocument();
});

