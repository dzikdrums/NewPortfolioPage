import './Footer.scss';

import { Facebook, Instagram } from '../../assets/svg/social-icons';

import React from 'react';

const Footer = ({ onCursor }) => {
  return (
    <div className="footerNav">
      <div className="container">
        <div className="row">
          <div className="footerContent">
            <a
              onMouseEnter={() => onCursor('pointer')}
              onMouseLeave={onCursor}
              href="mailto:dzikdrums@gmail.com"
            >
              <p>dzikdrums@gmail.com</p>
            </a>
          </div>
          <div className="footerContent">
            <p>601-956-000</p>
          </div>
          <div className="footerSocial">
            <a
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => onCursor('hovered')}
              onMouseLeave={onCursor}
              href="https://www.instagram.com/dzikdrums/"
            >
              <Instagram />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => onCursor('hovered')}
              onMouseLeave={onCursor}
              href="https://www.facebook.com/maciekdzikdrums"
            >
              <Facebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
