import fetchLoading from "../../../assets/img/fetchLoading.gif";
import React, {FC} from "react";

let w = {width: "100"}

type PropsType = {
    width: typeof w
}
const Preloader: FC<PropsType> = (props) => {
    return (
        <div>
            {<img style={props.width} src={fetchLoading}/>}
        </div>
    )
}

export default Preloader