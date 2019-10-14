import React from "react";
import ReactDOM from "react-dom";
import Header from './Components/header'
import Footer from './Components/footer'
import Main   from './Components/main'

import "./styles.css";

function App() {
  return (
    <div>
    <Header />
    <Main />
    <Footer main={"Progate"}/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);