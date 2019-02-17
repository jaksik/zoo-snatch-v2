import React from "react";

const Imagecard = (props) => { // passing in the img src from the CharImageContainer
    return (
        <div className = "imgCard">
        <img src= {props.imgsrc} alt={props.altText} height="600" width="300" />
        <h3>{props.text}</h3>
        </div>
    )
}

export default Imagecard;