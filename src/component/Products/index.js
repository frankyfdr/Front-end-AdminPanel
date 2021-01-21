import "./style.css"
import {useState,useEffect} from "react"
import axios from "axios"
import AddProduct from "./AddProduct/index.js"
const Main = () => {
  
const [products,setProducts] = useState();

const removeOrder =() => {

}
useEffect(() => {
    getProducts();
 }, [])

    const getProducts = () => {
    
        axios.get("http://localhost:3001/api/allpro").then((response) =>{
           var divs = response.data.map((item)=>{
            return(  
            <div className="geral-container">
                <div className="cell"><label>#{item.pid}</label></div>
                <div className="cell"><label>{item.name}</label></div>
                <div className="cell"><label>{item.title}</label></div>
                <div className="cell"><label>{item.price}</label></div>
                <div className="cell"><label>{item.stock}</label></div>
                <div className="cell"><label>{item.category}</label></div>
                <div className="cell"><label>{item.PrecoCusto}</label></div>
                <div className="cell">
                    <div id={item.oid} >...
                        <div id={"opt"+item.oid} className="cell-cell-panel" >
                            <div className="opt-btn"><label >opt1</label></div>
                            <div className="opt-btn"><label >opt2</label></div>
                            <div className="opt-btn"><label >opt3</label></div>
                            <div className="opt-btn" onClick={()=> removeOrder(item.oid)}><label >Remove Order</label></div>
                        </div>
                </div>
            </div>
            
                </div>
                 )
           })
           setProducts(divs);
        })

     
    }
    return (
        <div className="geral-main-container">
        <AddProduct />
        <h1>Products</h1>
        <div className="top-panel">
            <div className="top-panel-content">
            <input placeholder="Search.." className="inSearch" type="text"/>
            <select className="dropmenu">
            <option value="0">Status</option>
            <option value="0">Status 1</option>
            <option value="0">Status 2</option>
            </select>
            <div className="addbtn" onClick={()=> document.getElementById("container-addP").style.display = "block"}>+ New</div>
            </div>
        </div>
        <div className="geral-container-header">
            <div className="cell"><label>ProductID</label></div>
            <div className="cell"><label>Name</label></div>
            <div className="cell"><label>Title</label></div>
            <div className="cell"><label>Price</label></div>
            <div className="cell"><label>Stock</label></div>
            <div className="cell"><label>Category</label></div>
            <div className="cell"><label>Preço Custo</label></div>
            <div className="cell"><div className="opt">...</div></div>
            <div className="cell-header-panel" ></div>
        </div>
        {products}
        </div>
    )
}
export default Main;