import React,{useReducer} from "react";

//initial sate

const initstate = {num : 0};



//reducer
const mathReducer = (state,action) =>{
    //console.log(`action=` ,action)
    if(action ==='plus'){
    //plus reducer
    return{num : state.num+1}
    }else if ( action === 'minus'){
        //minus rewducer
        if(state.num > 0 ){
            return{ num : state.num -1}
        }else {
            return{num : 0}
        }
    }else if (action ==='clear'){
        //clear reducer
        return{num:0}
    }else {
        console.log(`sorry, not a valied action`);
    }
} 

function Ex11 (props) {

    //const {state,dispatcher} = useReducer(reducer,initial_state)
    const{state,dispatcher} = useReducer(mathReducer,initstate)
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="dispaly-3 text-success">useReducer</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <button onClick={()=> dispatcher(`plus`)}className="btn btn-success">Plus</button>
                    <button onClick={()=> dispatcher(`Minus`)}className="btn btn-danger float-end">Minus</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="text-success display-1">State ={state.num}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button onClick={()=> dispatcher(`clear`)}className="btn btn-warning">Clear</button>
                </div>
            </div>
        </div>
    )
}
export default Ex11