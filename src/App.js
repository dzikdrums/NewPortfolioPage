import './styles/App.scss';

import React, { useEffect, useState } from 'react';

import About from './pages/About';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Navigation from './components/Navigation/Navigation';
import { Route } from 'react-router-dom';
import Technologies from './pages/Technologies';
import gsap from 'gsap';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/technologies', name: 'Technologies', Component: Technologies },
  { path: '/about-me', name: 'About me', Component: About },
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  // prevents flashing
  gsap.to('body', 0, { css: { visibility: 'visible' } });
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    //Grab inner height of window for mobile reasons when dealing with vh
    let vh = dimensions.height * 0.01;
    //Set css variable vh
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  return (
    <>
      {/* <Scrollbar damping={0.03}> */}
      <Header />
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
      {/* </Scrollbar> */}
    </>
  );
}

export default App;
