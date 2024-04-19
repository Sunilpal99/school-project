/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Magnifier from 'react-magnifier'

const Login = () => {
    // eslint-disable-next-line no-unused-vars
    const handleLogin  = (event) => {
        event.preventDefault();

    
    var emailValue = document.getElementById('email').value;
    var passwordValue = document.getElementById('password').value;

 
    
    if (!emailValue.trim() || !passwordValue.trim()) {
            alert("Please fill in all fields");
            return;
        }

        if (emailValue === "sunilpal05399@gmail.com" && passwordValue === "95166") {
        
            window.location.href = "../Dashboard";
        } else {
            alert("Please enter correct all credentials");
        }
    }
    
    return (
        <>
            {/* <!-- login-start --> */}
            <section id="login">
                <div className="container w-100">
                    <div className="row">
                        <div className="main-section">
                            <div className="col-md-6">
                            <div className="first">
                                    <Magnifier src="/image/login2.webp" width={500} alt="Login Image" />
                                </div>
                            </div>
                            <div className="col-md-6 form-section">
                                <form id="loginForm">
                                    <div className="logo d-flex justify-content-center">
                                        <img src="/image/sns-new-logo.png" alt="Logo" className="mb-2" />
                                    </div>
                                    <h5 className="heading text-center m-0">Login</h5>
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="email" id="email" className="form-control mb-2" aria-describedby="emailHelp" required />
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input type="password" id="password" className="form-control" required />
                                    <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
                                    {/* <input type="button" /> */}
                                    <p className="text-center m-0">Don't have an account? Sign up <Link to="/signup"><span>here</span></Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- login-end --> */} 
        </>
        
    )
}

export default Login
