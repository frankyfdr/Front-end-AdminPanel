import "./style.css"
import { Link } from "react-router-dom";
const Side = () => {

    const menuOff =(e) => {
       
        const menu_click = document.getElementById("sideMenu-click");
        menu_click.classList.toggle("on")

        const menu = document.getElementById('sideMenu');
        menu.classList.toggle('show');
      
      
        
    }
    return(
        <div id="sideMenu" className="sideMenu">
            <div id="sideMenu-click" className="sideMenu-click" onClick={menuOff}> </div>
            <nav id="sideMenu-btn">
                <ul onClick={menuOff}>
                    <li ><Link  to={"/dashboard"}>DashBord</Link></li>
                    <li><Link to={"/orders"}>Orders</Link></li>
                    <li><Link to={"/products"}>Products</Link></li>
                    <li><Link to={"/customers"}>Customers</Link></li>
                </ul>
            </nav>
           
        </div>
    )


}
export default Side;