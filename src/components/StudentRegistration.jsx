import React, { useState } from 'react';/*05-10-2026*/

export default function StudentRegistration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [course, setCourse] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
            e.preventDefault();
        const newErrors = {};
        if(name.trim().length<3) {
            newErrors.name = "Name is required";}
if (email.trim() === "") {
    newErrors.email = "Email is required";}
if (phone.trim() === "") {
    newErrors.phone = "Phone number is required";}
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newErrors.email = "Enter a valid email";}
if (course === "") {
    newErrors.course = "Please select a course.";}
if (password === "") {
    newErrors.password = "Password is required";}
    if(password.length < 6) {
    newErrors.password = "Password must be at least 6 characters long";}
    if (confirmPassword !== password) {
    newErrors.confirmPassword = "Passwords do not match";}
if (confirmPassword === "") {
    newErrors.confirmPassword = "Please confirm your password";}
        setErrors(newErrors);
        
        /*
        e.preventDefault();
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Course:", course);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
        */

    };
    const isFormValid = Object.keys(errors).length === 0 && name && email && phone && course && password && confirmPassword;

    return (
        <div>
            <h1>Student Registration</h1>

            <input type="text"placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
             {errors.name && <p>{errors.name}</p>}
            <input type="email"placeholder="Enter your email"value={email} onChange={(e) => setEmail(e.target.value)}/>
             {errors.email && <p>{errors.email}</p>}
            <input type="text"placeholder="Enter your phone number"value={phone} onChange={(e) => setPhone(e.target.value)} />
             {errors.phone && <p>{errors.phone}</p>}
            <select value={course}onChange={(e) => setCourse(e.target.value)} >
                <option>Select Course</option>
                <option>React</option>
                <option>Node</option>
                <option>MongoDB</option>
            </select>
                {errors.course && <p>{errors.course}</p>}

            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            {errors.password && <p>{errors.password}</p>}
            <input type="password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            <br></br>
            <br></br>

            <button type="submit" onClick={handleSubmit} disabled={!isFormValid}>
                Submit
            </button>
        </div>
    );
}