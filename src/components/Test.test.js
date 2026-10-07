import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Test from "./Test";

// Test 1: Check whether the Login heading is displayed
test("heading should be displayed", () => {
    render(<Test />);

    const heading = screen.getByText("Login");

    expect(heading).toBeInTheDocument();
});

// Test 2: Check whether the email input works
test("email input should be displayed", () => {
    render(<Test />);

    const emailInput = screen.getByPlaceholderText("Enter email");

    fireEvent.change(emailInput, {
        target: {
            value: "student@gmail.com",
        },
    });

    expect(emailInput).toHaveValue("student@gmail.com");
});

// Test 3: Check whether the Login button is displayed
test("login button should be displayed", () => {
    render(<Test />);

    const button = screen.getByRole("button", {
        name: "Login",
    });

    expect(button).toBeInTheDocument();
});