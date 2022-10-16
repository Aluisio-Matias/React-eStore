import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Homepage from './Homepage';

test("it renders without crashing", () => {
    render(
        <MemoryRouter>
            <Homepage />
        </MemoryRouter>
    );
    const pageElement = screen.getByText(/React eStore is a fake store so your products will never arrive./);
    expect(pageElement).toBeInTheDocument();
});
