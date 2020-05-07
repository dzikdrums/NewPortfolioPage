import './banner.scss';

import { NavLink } from 'react-router-dom';
import React from 'react';
import { ReactComponent as RightArrow } from '../../assets/arrow-right.svg';

const Banner = () => {
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
          <div className="btn-row">
            <NavLink to="/about-me">
              More about me <RightArrow />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
