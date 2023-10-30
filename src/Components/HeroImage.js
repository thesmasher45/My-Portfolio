import "./HeroImageStyles.css";

import React from 'react'

import IntroImage from "../Assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImage = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImage} alt="IntroImage"></img>
            </div>
            <div className="content">
                <p>HI, I AM TEJAS MORE.</p>
                <h1>I'm a Web Developer.</h1>
                <div>
                    <Link to="/Project" className="btn">Projects</Link>
                    <Link to="/Contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImage