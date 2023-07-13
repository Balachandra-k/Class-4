import React,{ useState} from "react";

function Ex8 (props) {
    const [login,setLogin] = useState({
        user : "",
        pass : ""
    })

    //set the value to state

    const readvalue = (event) => {
        const {name,value} = event.target
            console.log(`name = ${name}` + `value = ${value}`);
            setLogin({...login,[name]: value})
    }

    const submitHandler = (event) =>{
        event.preventDefault()
        console.log(`login data = `, login);
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h5 className="dispaly-5 text-Warning">Form handling using state & onChange event</h5>
                </div>
            </div>

            <div className="row">
                <div className="col-md-16 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete="off" onSubmit={submitHandler}>
                                <div className="form-group mt-12">
                                    <label htmlFor="user">UserName</label>
                                    <input type="text" name="name" id="name" value={login.user} onChange={readvalue} className="form-control" />
                                </div>
                                <div className="form-group mt-12">
                                    <label htmlFor="pass">Password</label>
                                    <input type="password" name="pass" id="pass" value={login.pass}  onChange = { readvalue}className="form-control" />
                                </div>
                                <div className="form-group  mt-2">
                                    <input type="submit" value="Login" className="btn btn-outline-sucess"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ex8