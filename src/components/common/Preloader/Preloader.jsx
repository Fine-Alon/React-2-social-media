import fetchLoading from "../../../assets/img/fetchLoading.gif";
import React from "react";

const Preloader = (props)=>{
    return(
        <div >
            {<img style={props.width}  src={fetchLoading} />}
        </div>
    )
}

export default Preloader