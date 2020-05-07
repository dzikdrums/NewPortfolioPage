import './intro.scss';

import React, { useEffect, useState } from 'react';

import IntroOverlay from './IntroOverlay';
import { ReactComponent as ScrollDown } from '../../assets/arrow-left.svg';
import gsap from 'gsap';

const tl = gsap.timeline();

const Intro = ({ description, title }) => {
  const [scrollPosition, setScrollPosition] = useState();

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);

    tl.to('.intro-overlay', 2.2, {
      height: 0,
      ease: 'expo.inOut',
    })
      .to('.intro-header-title', 0.7, {
        css: {
          opacity: 1,
        },
        ease: 'expo-inOut',
      })
      .to('.intro-header-desc', 0.7, {
        css: {
          opacity: 1,
        },
        ease: 'expo-inOut',
      });

    return () => {
      window.removeEventListener('resize', listenToScroll);
    };
  }, []);

  const listenToScroll = () => {
    const scrollOffset =
      (window.innerHeight - window.pageYOffset) / window.innerHeight;
    if (scrollOffset > 0) {
      setScrollPosition(scrollOffset);
    }
  };

  return (
    <div className="container">
      <div className="row" id="intro">
        <IntroOverlay />
        <div className="intro-header">
          <div className="intro-header-info">
            <h3 className="intro-header-title">{title}</h3>
            <h2 className="intro-header-desc">{description}</h2>
          </div>
        </div>
        <div
          style={{
            opacity: `${scrollPosition}`,
          }}
          className="scroll-down"
        >
          <span className="scroll-span">Scroll Down</span>
          <ScrollDown className="down-arrow" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
