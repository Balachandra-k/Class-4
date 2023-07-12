import React,{ useEffect, useState} from "react";
import post from "../screen/post";



const URL = 'https://jsonplaceholder.typicode.com'
/* useeffect => initial data, decleadred data or data accessing from API*/

//useEffect(Callback function, [dependancy list])
    /*
    React functional component lifecycle hooks
    mount
        useEffect(()=> {},[])
    update
        useEffewct(()=> {}, [dep])

    unmount
        useEffect(()=>{
            return ()=> {
                //unmount
            }
        })
        */

function Ex5(props){

    const [post,setpost] = useState([])

    const getPosts = async () => {
        await fetch(`${URL}/posts`,{
            method : "GET",
            headers : {
                "Content-Type": "application/json"
            }
        }).then(data => data.json())
        .then(res =>{
            console.log('response=',res);
            setpost(res)
        }).catch(err => console.log(err))
    }
    useEffect(()=>{
        getPosts()//async function call
    },[])

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="dispaly-4 text-danger">Use Effect hook</h3>
                
                </div>
            </div>
                <div className="row">
                    {
                        post && post.map((item,index)=>{
                            return(
                                <post key={index}/>
                            )
                        })
                    }
                </div>
                <div>
                
                </div>
        </div>
        
    )
}
export default Ex5