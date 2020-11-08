import React from "react";
import ProductCart from "./ProductCart/ProductCart";

const Shisha = (props) => {
  const shishas = props.shishaPage.shishaList.map(shi => {
    return ( <ProductCart {...shi} />)
  })
  return (
    <div>
     {shishas} 
      {props.shishaPage.isFetchingValue ? (
        <img
          src={"https://media.giphy.com/media/3o6ZsVGl3vuG5g0Kic/giphy.gif"}
          alt="loading..."
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Shisha;
