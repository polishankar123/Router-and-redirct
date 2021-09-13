import React, { useState } from "react";
import { Redirect, Route } from "react-router";

const Home = () =>{
     const [auth, setAuth] = useState(false);
     if(auth){
         return <Redirect to="/dashboard" />
     }
    return(
        <div>
          <center>
           <h2>This is Home Page</h2> 
           <button onClick={()=>setAuth(true)}>Login</button>
           </center>
        </div>
    )
}

export default Home;