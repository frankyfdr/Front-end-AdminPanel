import React, { Component } from 'react'
import "./style.css"
import bagICO from "../../img/bag.png";
import userICO from "../../img/user.png";

const Header  = () => {
    const showMenu = () => {
        const menu = document.getElementById('sideMenu');
        menu.classList.toggle('show');
        const menu_click = document.getElementById("sideMenu-click");
        menu_click.classList.toggle("on")
    }
    
        return (
            <div className="header">
                <div id="hamMenu" onClick={showMenu}>
                    <div className="hamDiv"></div>
                    <div className="hamDiv"></div>
                    <div className="hamDiv"></div>
                </div>
                <h1 id="h1">AdminPanel v1</h1>
                       <div className="ICO">
                       <img className="imgICO" src={userICO}></img>   
                        <img className="imgICO" src={bagICO}></img>     
                       </div>       
            </div>
        )
    
}
export default Header;