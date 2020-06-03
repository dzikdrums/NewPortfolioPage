import './Banner.scss';

import { NavLink } from 'react-router-dom';
import React from 'react';
import { ReactComponent as RightArrow } from '../../assets/arrow-right.svg';
import { motion } from 'framer-motion';

const Banner = ({ onCursor }) => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Creating websites is</span>
            </div>
            <div className="line">
              <span>what I do.</span>
            </div>
          </h2>
          <motion.div
            onMouseEnter={() => onCursor('pointer')}
            onMouseLeave={onCursor}
            className="btn-row"
          >
            <NavLink to="/technologies">
              Technologies I use
              <RightArrow />
            </NavLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
