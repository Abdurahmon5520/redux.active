import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import './App.scss'
import 'react-toastify/dist/ReactToastify.css';
import {createStore, } from 'redux';
import App from "./App"

const store = createStore()


const increment = () => {
    return {
        type : 'INCREMENT'
    }
}

const decrement = () =>{
    return {
        type : 'DECREMENT'
    }
}


const counter = (state = 0, actioon ) => {
    switch(actioon.type){
        case 'INCREMENT':
        return state + 1 ;
        case 'DECREMENT':
        return state - 1 ;
    }
}
let store = createStore(counter);

store.subscribe(() => console.log((store.getState())));

store.dispatch(increment());





ReactDOM.render(<App />, document.getElementById("root"));