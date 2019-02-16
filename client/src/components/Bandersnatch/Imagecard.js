import React from "react";

const Imagecard = (props) => { // passing in the img src from the CharImageContainer
    return (
        <img src= {props.imgsrc} alt={props.altText} height="400" width="200" 
        />
    )
}

export default Imagecard;