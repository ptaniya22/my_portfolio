// import React from 'react';
// import { Link, Element } from 'react-scroll';
// import Navbar from './components/Navbar';
// import About from './components/About';
import './scss/main.scss'
import { Route, Routes } from 'react-router-dom'
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';

function App() {
 
 
  // const wrapperClass = `wrapper ${theme}`
  


  return (
    <>
      {/* <div className={wrapperClass}> */}
    
      <div className="container">
        <div className="box">
          {/* <Portfolio/> */}
          <Routes>
            <Route path="/" element={<Portfolio/>}/>
            <Route path="/projects/" element={<Projects/>}/>
          </Routes>

          {/* <Navbar />
          
          <About /> */}
          
        </div>
        
     </div>
      
      {/* </div> */}
      
      
    </>
  );
}

export default App;