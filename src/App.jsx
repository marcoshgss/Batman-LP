import React from "react";
import Header from "./Components/Header";
import Photos  from "./Components/Photos";
import Coments  from "./Components/Coments";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

const App = () => {
  return (
    <div>
      <Header />
      <Main /> 
      <Photos />
      <Contact />
      <Footer />
      <Coments />
    </div>
  );
};

export default App;
