import React ,{ useState, useMemo }from "react";
import Age from "../screen/Age";
import Ageinfo from "../screen/Ageinfo";


/*
    useCallback => will return memorized value (state/props) of callback
    useMemo => will return memorized function (method) of callback
*/
function Ex10 (props) {

    const [age,setAge] = useState (20)

    const inAge = () => {
        setAge(Age+1)
    }

    const devidAge = useMemo (()=>({
        result : `divid age is ${Age} years`
    }),[Age])
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="dispaly-3 text-warning">useMemo</h3>
                </div>
            </div>
            <Age Age = {Age} ageHandler = {inAge}/>
            <Ageinfo info = {devidAge}/>
        </div>
    )
}
export default Ex10