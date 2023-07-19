import { Button } from "bootstrap";
import React from "react";

function Age(props) {
    return(
        <div className="row">
            <div className="col-md-1">
                <div className="text-primary">
                    <h4 className="text-success">Age = {props.Age}</h4>
                    <button className="btn btn-success" onClick={props.ageHandler}>Increment Age</button>
                </div>
            </div>
        </div>
    )
    
}
export default Age