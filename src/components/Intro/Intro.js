import './Intro.scss';

import React, { useEffect, useRef, useState } from 'react';

import IntroOverlay from './IntroOverlay';
import { ReactComponent as ScrollDown } from '../../assets/arrow-left.svg';
import gsap from 'gsap';
import { useWindowSize } from '../../hooks/useWindowSize';

const tl = gsap.timeline();

const Intro = ({ description, title, video }) => {
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

  let canvas = useRef(null);
  const size = useWindowSize();

  useEffect(() => {
    let renderingElement = canvas.current;
    // create an offscreen canvas only for the drawings
    let drawingElement = renderingElement.cloneNode();
    let drawingCtx = drawingElement.getContext('2d');
    let renderingCtx = renderingElement.getContext('2d');
    let lastX;
    let lastY;
    let moving = false;

    renderingCtx.globalCompositeOperation = 'source-over';
    renderingCtx.fillStyle = '#000000';
    renderingCtx.fillRect(0, 0, size.width, size.height);

    renderingElement.addEventListener('mouseover', (ev) => {
      moving = true;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener('click', (ev) => {
      moving = true;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener('mouseup', (ev) => {
      moving = false;

      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener('mousemove', (ev) => {
      if (moving) {
        drawingCtx.globalCompositeOperation = 'source-over';
        renderingCtx.globalCompositeOperation = 'destination-out';
        let currentX = ev.pageX - renderingElement.offsetLeft;
        let currentY = ev.pageY - renderingElement.offsetTop;

        drawingCtx.lineJoin = 'round';
        drawingCtx.moveTo(lastX, lastY);
        drawingCtx.lineTo(currentX, currentY);
        drawingCtx.closePath();
        drawingCtx.lineWidth = 120;
        drawingCtx.stroke();
        lastX = currentX;
        lastY = currentY;
        renderingCtx.drawImage(drawingElement, 0, 0);
      }
    });
  }, [size.height, size.width]);

  return (
    <div className="container">
      <div className="row" id="intro">
        <div className="video">
          <video
            height="100%"
            width="100%"
            loop
            muted
            autoPlay
            data-keepplaying
            type="video/mp4"
            src={require(`../../assets/${video}.mp4`)}
          />
        </div>
        <canvas height={size.height} width={size.width} ref={canvas} />
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
