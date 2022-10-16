import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AddButton } from "./AddButton"

test("it renders without crashing", () => {
    render(
        <MemoryRouter>
            <AddButton />
        </MemoryRouter>
    );
    const pageElement = screen.getByText(/Add to Cart/i);
    expect(pageElement).toBeInTheDocument();
});
