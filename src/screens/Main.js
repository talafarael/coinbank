import React from "react";
import  Layout  from "../componets/Layout";
import './Main.css'
import Logovector from './photo/Vector 4.png'
import union from "./photo/Union.png"

function Main() {
  return (
  <div>

   <img className="logo" src={Logovector } alt="load"></img>
   <div className="mainText">Заробляйте розумом</div>
   <div className="mainTitle">BANK-COIN</div>
   <button className="mainButton" >Вперед</button>
   <div className="mainProfileText">Увійти в акаунт</div>
   <img className="mainProfile" src={union}  alt="load"></img>
   <div className='circle5'/>
   <div className='circle6'/>
   <div className='circle7'/>
   
  </div>
  )
}

export default Main;
