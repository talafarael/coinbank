import React from "react";
import './Layout.css';

const Layout=({children})=>{
   return (<div>

    <ul  className="ulAll">
    <li><a href="profile">
        <h1>profile</h1></a></li>
      <li>
        <a href="shop">
        <h1>shop</h1>
      </a>
      </li>
      <li>
        <a href="main">
        <h1>main</h1>
      </a>
      </li>
    </ul>
      
      {children}
    </div>)
   
}
  
  


export default Layout;
