import React from "react";
import Ex1 from "./Component/Ex1";
import Ex2 from "./Component/Ex2";
import Ex3 from "./Component/Ex3";
import Ex4 from "./Component/Ex4";
import Ex5 from "./Component/Ex5";

function App(props){
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">ReactHOOK</h3>
          {/* <Ex1/> 
          <Ex2/>
          <Ex3/>\
          <Ex4/>*/}
          <Ex5/>
        </div>
      </div>
    </div>
  )
}

export default App