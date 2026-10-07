import { useState } from "react";

export default function Test() {
    // Create a state variable to store the email
    const [email, setEmail] = useState("");

    return (
        <div>
            {/* Display the Login heading */}
            <h1>Login</h1>

            {/* Email input field */}
            <input type="email"
                placeholder="Enter email"value={email}
                // Update email state whenever the user types
                onChange={(e) => setEmail(e.target.value)} />

            {/* Display the entered email */}
            <p>Entered email : {email}</p>

            {/* Password input field */}
            <input type="password" placeholder="Enter password"  />

            {/* Login button */}
            <button>Login</button>
        </div>
    );
}