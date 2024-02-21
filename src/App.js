import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./header";
import Body from "./Body";
import Footer from "./footer";


// JSX
const App = (
  <>
    <Header />
    <Body />
    <Footer/>
  </>
);

const root = document.getElementById("root");

ReactDOM.render(App, root);
