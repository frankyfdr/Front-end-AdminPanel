import React,{useState} from 'react'
import axios from "axios"
import "./style.css"
import ManageImg from "../ManageImages/index.js"

const AddProduct = () =>{
const [files,setFiles] = useState([]);
const [imgs,setImgs] = useState("");
const formData = new FormData()
  const handleAddProduct = () =>{
  

  }
  const FileUpload = (e) =>{
    
    let files = e.target.files
    console.log(files)
    //<img className="img-product-upload" src={URL.createObjectURL(file)}/>
    let img = Object.keys(files).map((key) => {
      return <img className="img-product-upload" src={URL.createObjectURL(files[key])}/>
    })
    console.log(img)
    for (const file of files) {
     
        
      
      formData.append('myFile', file, file.name);
    }
    setImgs(img)
   axios.post("http://localhost:3002/upload2",formData).
    then(response =>{
      
    }) 
    
  }



  const onFileChange = (e) =>{
    setFiles(e.target.files)
    console.log(e.target.files)
  }
    return (<div id="container-addP">
      <ManageImg />
      <div className="close" onClick={()=>document.getElementById("container-addP").style.display="none"}>X</div>
       <form id="addProForm" action={()=>handleAddProduct} enctype="multipart/form-data">
         <div className="inputs">
          <label className="lbAdd">Title:</label>
          <input className="txtAddPro" type="text"/>
         </div>
         <div className="inputs">
          <label className="lbAdd">Name:</label>
          <input className="txtAddPro" type="text"/>
         </div>
         <div className="inputs">
          <label className="lbAdd">Price:</label>
          <input className="txtAddPro" type="text" />
         </div>
         <div className="inputs">
          <label className="lbAdd">Stock:</label>
          <input className="txtAddPro" type="number" />
         </div>
         <div className="inputs">
          <label className="lbAdd">Preço Custo:</label>
          <input className="txtAddPro" type="number" /> €
         </div>
         <div className="inputs">
          <label className="lbAdd">Category:</label>
          <select name="dropdown" className="inputs">
            <option>T-Shirt</option>
            <option>Blusa</option>
            <option>Calça</option>
          </select>
         </div>
        <div className="ImgUpload">
          <label  onClick={()=>document.getElementById("Manage-img-container").style.display ="block"} className="btnFile">Select Images</label>
          <div className="showImg-container">
           
          </div>
        </div>
        <button type="submit" className="btnFile"  onClick={handleAddProduct}> Done</button>
        </form>
        </div>)
}
export default AddProduct;
