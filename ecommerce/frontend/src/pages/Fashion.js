import { Link } from "react-router-dom";
import MobileComponent from "../Component/mobiles/MobileComponent";
function Fashion()
{
    return(
         <MobileComponent category={"shirt"} company={["Regrowth","Stoneberg","Zhao"]}/>   
    )
}

export default Fashion;