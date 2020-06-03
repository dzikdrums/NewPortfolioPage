import './styles/App.scss';

import React, { useEffect, useState } from 'react';
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from './context/GlobalContext';

import Cursor from './components/CustomCursor';
import Header from './components/Header/Header';
import Home from './pages/HomePage';
import Navigation from './components/AboutMe/AboutMe';
import { Route } from 'react-router-dom';
import Technologies from './pages/TechnologiesPage';
import { ThemeProvider } from 'styled-components';
import gsap from 'gsap';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/technologies', name: 'Technologies', Component: Technologies },
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

  const [toggleMenu, setToggleMenu] = useState(false);

  const [hamburgerPosition, setHamburgerPosition] = useState({
    x: 0,
    y: 0,
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

  const { cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType });
  };

  const theme = {
    light: '#fff',
    dark: '#000',
    red: '#ea291e',
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  };

  return (
    <ThemeProvider theme={theme}>
      <Header
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        onCursor={onCursor}
        hamburgerPosition={hamburgerPosition}
        setHamburgerPosition={setHamburgerPosition}
      />
      <Cursor toggleMenu={toggleMenu} />
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component
              hamburgerPosition={hamburgerPosition}
              setHamburgerPosition={setHamburgerPosition}
              onCursor={onCursor}
            />
          </Route>
        ))}
      </div>
      <Navigation
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        hamburgerPosition={hamburgerPosition}
        setHamburgerPosition={setHamburgerPosition}
      />
    </ThemeProvider>
  );
}

export default App;
