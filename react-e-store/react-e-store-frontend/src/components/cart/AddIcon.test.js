import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AddIcon } from "./AddIcon";

test("it renders without crashing", () => {
    render(
        <MemoryRouter>
            <AddIcon />
        </MemoryRouter>
    );
});
