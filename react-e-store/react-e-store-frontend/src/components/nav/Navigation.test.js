import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./Navigation";

test("it renders without crashing", () => {
    render(
        <MemoryRouter>
            <Navigation />
        </MemoryRouter>
    );
    const navElement = screen.getByText(/React eStore/i);
    expect(navElement).toBeInTheDocument();
});

