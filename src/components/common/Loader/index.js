import React from "react";
import "./styles.css";

//loader function for all component
function Loader() {
  return (
    <div className="wrapper">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
