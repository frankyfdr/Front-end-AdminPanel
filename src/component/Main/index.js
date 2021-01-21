import { BrowserRouter } from "react-router-dom";
import "./style.css"
import Side from "../sideMenu/index.js";
import Orders from "../Orders/index.js"
import Routes from "./Routes.js";
const Main = () => {
    return (
        <div className="Main-container">
           <BrowserRouter>
            <Side />
            <Routes />
           </BrowserRouter>
         
        </div>
    )
}
export default Main;