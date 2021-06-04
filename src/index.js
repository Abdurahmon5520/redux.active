import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import './App.scss'
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line no-unused-vars
import Test from "./components/Test";
// eslint-disable-next-line no-unused-vars
import Edit from "./components/Edit"
import ThemeContext from "./components/ThemeContext"

ReactDOM.render(<ThemeContext />, document.getElementById("root"));