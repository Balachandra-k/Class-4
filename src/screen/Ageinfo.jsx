import React ,{memo}from "react";

const Ageinfo = memo((props) => {
    return(
        <div className="row">
            <div className="col-md-1">
                <div className="text-primary">
                    <h4 className="text-danger ">AgeInfo</h4>
                    <h5 className="text-success">{props.info.result} </h5>
                </div>
            </div>
        </div>
    )
    
})
export default Ageinfo