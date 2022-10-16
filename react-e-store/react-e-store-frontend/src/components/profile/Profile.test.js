import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Profile from './Profile';

test("it renders without crashing", () => {
    render(
        <MemoryRouter>
            <Profile />
        </MemoryRouter>
    );
    const pageElement = screen.getByText(/Your current data on file/);
    expect(pageElement).toBeInTheDocument();
});
