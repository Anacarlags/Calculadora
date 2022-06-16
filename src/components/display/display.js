import React from "react";
import './display.css'

export default function Display(props){
    return(
        <div className="container-display">
            {props.value}
        </div>
    )
}