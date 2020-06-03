import React, { useEffect, useState } from 'react';

import Banner from '../components/Banner/Banner';
import Cases from '../components/Cases/Cases';
import HomePageOverlay from '../components/HomePageOverlay';
import gsap from 'gsap';

const tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
  tl.from('.line span', 1, {
    y: 100,
    ease: 'power4.out',
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3,
    },
  })
    .to('.overlay-top', 1.6, {
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.4,
    })
    .to('.overlay-bottom', 1.5, {
      width: 0,
      ease: 'expo.inOut',
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    .to('.intro-overlay', 0, { css: { display: 'none' } })
    .from('.case-image img', 1.6, {
      scale: 1.4,
      ease: 'expo.inOut',
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    });
};

const Home = ({ onCursor, hamburgerPosition, setHamburgerPosition }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    homeAnimation(completeAnimation);

    return () => {};
  }, []);

  return (
    <>
      {animationComplete || <HomePageOverlay />}
      <Banner
        hamburgerPosition={hamburgerPosition}
        setHamburgerPosition={setHamburgerPosition}
        onCursor={onCursor}
      />
      <Cases onCursor={onCursor} />
    </>
  );
};

export default Home;
