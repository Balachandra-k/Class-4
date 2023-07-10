import React,{useState} from "react";
function Ex4(props){
    const [num,setNum] = useState(0)

    const invalue = (val)=>{
        console.log('value=' ,val);
        setNum(num + val)
    }

    const decress = (dec)=>{
        console.log("dec" ,dec);

        setNum (setNum - dec);
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="dispaly-3 text-danger">State Hnadler</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="text-success">num = {num}</div>
                    <hr/>

                    <button onClick={()=> invalue(50)} className="btn btn-success">ADD + 50</button>

                    <button onClick={()=>decress (10)} classNam= "btn btn-danger">less -10</button> 
                </div>
            </div>
        </div>
    )
}
export default Ex4
