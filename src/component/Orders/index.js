import "./style.css"
import {useState,useEffect} from "react"
import axios from "axios"
import { $ }  from 'react-jquery-plugin'
const Orders = () => {

const[orders,setOrders] = useState();
const handleCellsClick = (e) => 
{
  //  $('.on').remove();
    //const moreinfo = document.getElementsByClassName(".cell-cell-panel.on").classList.remove(".on");
  
    // e.preventDefault();
}
const handleSettingsClick = (id,e) => 
{
    
 
    try{
        const moreinfo = document.querySelector(".cell-cell-panel[name='"+id+"'");
        moreinfo.classList.toggle("on"); 
    }catch(e){}
    
   
    e.preventDefault();
}



const removeOrder = async (id) => 
{
     await axios.delete("http://localhost:3001/api/deleteOrder",{data:{id: id}});
     getOrders();
}

    const getOrders = (e) => {

        axios.get("http://localhost:3001/api/allorders").then((response) =>{
           var divs = response.data.map((item)=>{
            return(  
            <div className="geral-container">
                <div className="cell"><label>#{item.oid}</label></div>
                <div className="cell"><label>{item.date}</label></div>
                <div className="cell"><label>{item.status}</label></div>
                <div className="cell" name="items"><label>{item.item}</label></div>
                <div className="cell" name="customer" ><label>{item.customer}</label></div>
                <div className="cell"><label>{item.total}</label></div>
                <div className="cell">
                    <div  className="cellSet" id={item.oid} onClick={(e) => handleSettingsClick(item.oid,e)}>...
                        <div name={item.oid} className="cell-cell-panel" >
                            <ul onClick={()=> handleCellsClick} >
                                <div className="opt-btn"><label >opt1</label></div>
                                <div className="opt-btn"><label >opt2</label></div>
                                <div className="opt-btn"><label >opt3</label></div>
                                <div className="opt-btn" onClick={()=> removeOrder(item.oid)}><label >Remove Order</label></div>
                            </ul>
                           
                        </div>
                </div>
            </div>
            
                </div>
                 )
           })
           setOrders(divs);
        })
    

    }
 useEffect(() => {
    getOrders();
 }, [])
    return(
        <div className="geral-main-container">
        <h1>Orders</h1>
        <div className="top-panel">
            <div className="top-panel-content">
            <input placeholder="Search.." className="inSearch" type="text"/>
            <select className="dropmenu">
            <option value="0">Status</option>
            <option value="0">Status 1</option>
            <option value="0">Status 2</option>
            </select>
            <div className="addbtn">Button</div>
            </div>
        </div>
        <div className="geral-container-header">
            <div className="cell"><label>Order</label></div>
            <div className="cell"><label>Date</label></div>
            <div className="cell"><label>Status</label></div>
            <div className="cell" name="customer"><label>Customer</label></div>
            <div className="cell" name="items"><label>Purchased</label></div>
            <div className="cell"><label>Total</label></div>
            <div className="cell"><div className="opt">...</div></div>
            <div className="cell-header-panel" ></div>
        </div>
        {orders}
        </div>

    );

}

export default Orders;