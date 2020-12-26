import React from "react";
import Vector from "../../../images/Vector.png"
import "./contactHeader.css";
import { Link } from 'react-router-dom';


export default function ContactHeader(){
    return (
        <div className = "header">

            <Link to = "/contacts">
            <div className = "header__text">
            <img src = {Vector} alt ="vector1.png"></img>
            <h1>MyContacts</h1>
            </div>
            </Link>
        </div>
    )
}