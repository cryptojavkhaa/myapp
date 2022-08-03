import React from "react";
import Header from "../components/Header";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

const HomepageLayouts = (props) => {
  return (
    <>
      <Header />
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default HomepageLayouts;
