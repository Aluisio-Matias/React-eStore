import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProfileForm from './ProfileForm';

test("it renders without crashing", () => {
    render(
        <MemoryRouter>
            <ProfileForm />
        </MemoryRouter>
    );
});