// import React from 'react';
// import { Link, Element } from 'react-scroll';
// import Navbar from './components/Navbar';
import { useEffect } from 'react';
import './scss/main.scss';
import { Route, HashRouter, BrowserRouter, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { initTheme } from './redux/theme/themeSlice';

function App() {
  // // const wrapperClass = `wrapper ${theme}`
  const dispatch = useDispatch();

  const theme = useSelector(state => state.theme.theme);
  const wrapperClass = `wrapper ${theme}`;

  useEffect(() => {
    dispatch(initTheme());
  }, []);

  return (
    <>
      <div className={wrapperClass}>
        {/* <div className="container"> */}
        {/* <div className="box"> */}
        {/* <Portfolio/> */}
        <BrowserRouter
          basename={
            process.env.NODE_ENV === 'production' ? '/my_portfolio' : '/'
          }
        >
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/projects/" element={<Projects />} />
          </Routes>
        </BrowserRouter>

        {/* <Navbar />
          
          <About /> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
