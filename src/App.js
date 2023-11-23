import React from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

import './App.css';
import HomePage from "./componentes/Homepage";

function App(){
  return(
  <div className="App">
  <Header />
  <Footer />
  <HomePage />
  </div>
  );
};
export default App;

