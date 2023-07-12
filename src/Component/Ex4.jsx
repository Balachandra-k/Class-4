import React,{useState} from "react";
function Ex4(props){
    const [num,setNum] = useState(0)
    const [dec,setDec] = useState(0)

    const invalue = (val)=>{
        console.log('value=' ,val);
        setNum(num + val)
    }

    const decress = (val) =>{
        console.log('value=', val);
        decress = (dec-val)
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
                    <hr/>

                    <button onClick={()=>invalue (-10)} className= "btn btn-danger">less -10</button>
                    if () {
                        
                    } 
                </div>
            </div>
        </div>
    )
}
export default Ex4
