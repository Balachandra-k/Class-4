import React from "react";
import Ex1 from "./Component/Ex1";
import Ex2 from "./Component/Ex2";
import Ex3 from "./Component/Ex3";
import Ex4 from "./Component/Ex4";
import Ex5 from "./Component/Ex5";
import Ex6 from "./Component/Ex6";
import Ex7 from "./Component/Ex7";
import Ex8 from "./Component/Ex8";
import Ex9 from "./Component/Ex9";
import Ex10 from "./Component/Ex10";
import Ex11 from "./Component/Ex11";

function App(props){
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">ReactHOOK</h3>

          {/* <Ex9 itemPerPage = {50}/> */}
          <Ex11/>
        </div>
      </div>
    </div>
  )
}

export default App