import axios from "axios"
import {useState, useEffect} from 'react';
import "./style.css"
const Main = () => {
const [sells,setSells] = useState();
    const getInfos = () => 
    {
        axios.get("http://localhost:3001/api/allsells")
        .then((response) =>{

            setSells(response.data[0].TotalSell)
        })



    }
    useEffect(() => {
        getInfos();
     }, [])

    return (
        <div className="dash-main-container">
        <h1>Dashboard</h1>
        <div className="dash-litics-container">
            <div className="box-container">
                <div className="total-sells"><p>Total Sells: {sells}€</p></div>
            </div>
            <div className="box-container"></div>
            <div className="box-container"></div>
            <div className="box-container"></div>
            <div className="box-container"></div>
            </div>
        </div>
    )
}
export default Main;