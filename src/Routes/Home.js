import React from "react";
import Navbar from "../Components/Navbar";
import HeroImage from "../Components/HeroImage";
import Work from "../Components/Work";
import Footer from "../Components/Footer";
import Skills from "../Components/Skills";

const Home = () => {
    return <div>
        <Navbar />
        <HeroImage />
        <Skills />
        <Work />
        <Footer />
    </div>
};

export default Home;