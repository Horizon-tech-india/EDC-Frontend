import React from "react";
import Header from "../components/common/Header";
import Form from "../components/application/Form";
import Footer from "../components/Layout/Footer";
import Navigation from "../components/Layout/Navbar";

const ApplicationStatus = ({ loggedIn, setLoggedIn }) => {
  return (
    <>
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Header props={"Provide All The Details"} />
      <Form />
      <Footer />
    </>
  );
};

export default ApplicationStatus;
