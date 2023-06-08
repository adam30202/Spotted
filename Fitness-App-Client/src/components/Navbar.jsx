import { Container, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useState, useEffect, props } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Navbar = ({ isLoggedIn, checkForLogin }) => {

    const navigate = useNavigate();
    // logout
    const logout = () => {
    // destroys the cookie
        cookies.remove("TOKEN", { path: "/" });
        checkForLogin(false) // passed login status back to app
        navigate("/")
    }

    return (
        <nav>
            <h1>Spotted</h1>     
            <ul className="nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            { isLoggedIn ? (
            <ul>
                <li>
                    <Link to="/trending">Trending</Link>
                </li>
                <li>
                    <Link to="/post-spotted">Post Spotted</Link>
                </li>
                <li>
                    <Link to="/myposts">My Posts</Link>
                </li>
                <li>
                    <a href="" onClick={() => logout()}>Sign Out</a>
                </li>
            </ul> 
            ) : (
            <ul>
                <li>
                    <Link to="/sign-up">Sign Up</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
            )}
        </nav>
    )
}

export default Navbar;