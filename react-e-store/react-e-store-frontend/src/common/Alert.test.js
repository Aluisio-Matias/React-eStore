import { render } from "@testing-library/react";
import Alert from "../common/Alert";

test("it renders without crashing", () => {
    render(
        <Alert />
    );
});

test("matches snapshot for danger", () => {
    let messages = ["If everything is broken", "Try again"];
    const { asFragment } = render(<Alert type="danger" messages={messages} />);
    expect(asFragment()).toMatchSnapshot();
});

test("matches snapshot for success", () => {
    let messages = ["Everything is awesome now!"];
    const { asFragment } = render(<Alert type="success" messages={messages} />);
    expect(asFragment()).toMatchSnapshot();
});