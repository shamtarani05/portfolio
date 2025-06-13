import React from "react";
import Portfolio from "./components/portfolio/Portfolio";
import { Route,Routes } from "react-router-dom";


const App = ()=>{
  return(
    <>
      <div className="app-container">
        <Routes>
        <Route path="/" element={<Portfolio />} />
       </Routes>
      </div>
    </>

  )
}

export default App