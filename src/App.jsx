// import React from 'react';
// import { Link, Element } from 'react-scroll';
// import Navbar from './components/Navbar';
// import About from './components/About';
import './scss/main.scss';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  // const wrapperClass = `wrapper ${theme}`

  return (
    <>
      {/* <div className={wrapperClass}> */}

      {/* <div className="container"> */}
      {/* <div className="box"> */}
      {/* <Portfolio/> */}
      <HashRouter
        basename={process.env.NODE_ENV === 'production' ? '/my_portfolio' : '/'}
      >
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/projects/" element={<Projects />} />
        </Routes>
      </HashRouter>

      {/* <Navbar />
          
          <About /> */}
      {/* </div> */}
      {/* </div> */}

      {/* </div> */}
    </>
  );
}

export default App;
