import React from "react";

const Shisha = (props) => {
    console.log(props);
  return (
    <div style = {{backgroundColor:'blue'}}>
        <p>{props.description}</p>
        <p>{props.manufacturer}</p>  
        <p>{props.name}</p>  
        <p>{props.price}</p>  
    </div>
  );
};

export default Shisha;
