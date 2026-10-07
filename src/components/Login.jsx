import React, { useState } from 'react';

export default function Login() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            name.trim() === "" ||
            email.trim() === "" ||
            password.trim() === "" ||
            confirmPassword.trim() === ""
        ) {
            alert("All fields are required!");
            return;
        }

        Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
                new Notification("Student Registration", {
                    body: "Form submitted!"
                });
            }
        });
    };

    return (
        <div>
            <h1>Login Page</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? "Hide Password" : "Show Password"}
                </button>

                <input
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <button
                    type="button"
                    onClick={() => {
                        setPassword("");
                        setConfirmPassword("");
                    }}
                >
                    Reset Password
                </button>

                <button type="submit">
                    Submit
                </button>

            </form>
        </div>
    );
}
