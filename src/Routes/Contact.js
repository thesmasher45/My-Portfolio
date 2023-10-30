import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg4 from "../Components/HeroImg4";
import Form from "../Components/Form";

const Contact = () => {
  return <div>
    <Navbar />
    <HeroImg4 heading="CONTACT" text="Lets have a chat" />
    <Form />
    <Footer />
  </div>
}

export default Contact;