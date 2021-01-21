import "./style.css"
import {useState,useEffect} from "react"
import axios from "axios"
import { cssNumber } from "jquery";
const Main = () => {

const [imgs,setImgs] = useState("");
const [data,setData] = useState()
const [files,setFiles] = useState([])
    const FileUpload = (e) =>{
    
      console.log(files)
      let formData = new FormData()
      for (const file of files) {
        formData.append('ProductID', file, file.name);
      }
       axios.post("http://localhost:3001/upload2",formData).
        then(response =>{
          
        }) 
        
      }

    const onFileChange = (e) =>{
        let efiles = e.target.files     
     
        let img = Object.keys(efiles).map((key) => {
          files.push(efiles[key])
          return <div className="img-box"><img className="img-product-upload" src={URL.createObjectURL(efiles[key])}/></div>
        })
     
        
        
        setImgs(imgs => [...imgs, img]);
       
       
        
       console.log(files)
        

      }
  
return(<div id="Manage-img-container" className="Manage-img-container">
    <label className="close" onClick={()=>document.getElementById("Manage-img-container").style.display = "none"}>X</label>
            <div className="img-container">
            {imgs}
            </div>
            <div className="menu-manager">
            <label for ="file" className="btnFile">Select Images</label>
            <input name="myFile" onChange={onFileChange} id="file" style={{visibility:'hidden'}} type="file" accept="image/x-png,image/gif,image/jpeg" multiple />
            <label name="done" onClick={FileUpload} className="btnFile">Done</label>
            </div>
        </div>)
}
export default Main;