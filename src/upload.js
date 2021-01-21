import Header from "./component/Header";
import MainImage from "./component/MainImage";
import './App.css';
import axios from "axios";
import React,{useState} from "react"

const App =() => {
const [file,setFile] = useState();
  const onFileChange = (e) => {
   setFile(e.target.files[0]);
  }

  const upload = () => {
  
  var formData = new FormData(); 
    formData.append("file",file); 
    
    console.log(file);
    axios.post("http://localhost:3001/upload", formData); 

  }
  return (
    <div className="App">
    <input name="img" type="file" onChange={onFileChange} />
    <button onClick={upload}>Up</button>
    </div>
  );
}

export default App;
