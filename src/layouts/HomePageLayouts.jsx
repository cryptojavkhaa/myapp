import React from "react";
import Header from "../components/Header";
import Navbar from "./../components/Navbar";
import SideBar from "./../components/Sidebar";
import Footer from "./../components/Footer";

const HomepageLayouts = (props) => {
  return (
    <>
      <Header />
      <Navbar />
      <SideBar />
      {props.children}
      <Footer />
    </>
  );
};

export default HomepageLayouts;
