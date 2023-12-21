import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo"><p>Boshra</p></div>
            <div className="desktopMenu">
                <Link className="desktopListItem">Home</Link>
                <Link className="desktopListItem">Projects</Link>
                <Link className="desktopListItem">Contact Me</Link>
                <Link className="desktopListItem">Portfolio</Link>

            </div>
            <button className="desktopMenuBtn"> Contact Me</button>
        </nav>
    )
}