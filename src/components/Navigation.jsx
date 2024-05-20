import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

export default function Nagivation() {
    return (
        <nav className="navbar navbar-expand-sm">
            <div className="navigation container">
                <a className="navbar-brand" href="#">
                    <img src="./assets/shared/desktop/logo.svg" />
                </a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div id="listOfLinks" className="navbar-nav">
                        <Link to="/" className="navLinks">HOME</Link>
                        <Link to="/headphones" className="navLinks">HEADPHONES</Link>
                        <Link to="/speakers" className="navLinks">SPEAKERS</Link>
                        <Link to="/earphones" className="navLinks">EARPHONES</Link>
                    </div>
                </div>
                <IoCartOutline className="icon" />
            </div>
        </nav>



    )
}