import Landing from "./pages/Landing";
import './App.css'
import React, { useState, useEffect } from 'react';
import { CiCamera } from "react-icons/ci";

function App() {

  
  return (<>
  <div class="laptop">
    
    <div class="screen">
    <div style={{width:'15%',marginLeft:'42.5%'}} className="camera"><CiCamera style={{marginLeft:'50%'}}></CiCamera></div>
    <Landing></Landing>
    </div>
   
    
  </div>
  <div className="bottom"></div>
  
    

    
    
  
  </>
    

      
     
    
  );
}

export default App;
