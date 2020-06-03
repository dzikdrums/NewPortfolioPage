import './Header.scss';

import { NavLink, withRouter } from 'react-router-dom';
import React, { useRef } from 'react';

import { motion } from 'framer-motion';
import useElementPosition from '../../hooks/useElementPosition';

const Header = ({
  history,
  onCursor,
  toggleMenu,
  setToggleMenu,
  setHamburgerPosition,
}) => {
  let hamburger = useRef(null);
  const position = useElementPosition(hamburger);

  const menuHover = () => {
    onCursor('locked');
    setHamburgerPosition({ x: position.x, y: position.y });
  };

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <motion.div
            onMouseEnter={() => onCursor('pointer')}
            onMouseLeave={onCursor}
            className="logo"
          >
            <NavLink exact to="/">
              MACIEJ DZIK
            </NavLink>
          </motion.div>
          <motion.div
            className="hamburger"
            ref={hamburger}
            onMouseEnter={menuHover}
            onMouseLeave={onCursor}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <span className="about-me">about me</span>
            <button>
              <span></span>
              <span></span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
