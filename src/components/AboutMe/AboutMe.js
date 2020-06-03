import './AboutMe.scss';

import { AnimatePresence, motion } from 'framer-motion';
import { Facebook, Instagram } from '../../assets/svg/social-icons';
import React, { useState } from 'react';

const navRoutes = [
  {
    id: 0,
    title: 'recording artist',
    path: '/recording-artist',
    description:
      'During my drumming career I have recorded 20+ albums with various artists from Europe. Mainly in progressive rock genre',
    video: 'drums.mp4',
  },
  {
    id: 1,
    title: 'touring drummer',
    path: '/touring-musician',
    description:
      'I have toured Europe a couple times with my band Disperse. We played some major festivals in Germany and UK',
    video: 'disperse.mp4',
  },
  {
    id: 2,
    title: 'session musician',
    path: '/recording-artist',
    description:
      'I worked as a session guy for live and studio work. Amongs many I have worked with Agnieszka Chylińska and Katarzyna Stankiewicz',
    video: 'rockClip.mp4',
  },
  {
    id: 3,
    title: 'educator',
    path: '/educator',
    description:
      'I worked as a drum clinician, as well hosting and arranging the events, as being the educator myself',
    video: 'rock.mp4',
  },
];

const Navigation = ({
  toggleMenu,
  setToggleMenu,
  onCursor,
  hamburgerPosition,
  setHamburgerPosition,
}) => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: 'drums.mp4',
    key: '0',
  });
  const isMobile = window.innerWidth < 768;

  const menuHover = () => {
    onCursor('locked');
    setHamburgerPosition({ x: hamburgerPosition.x, y: hamburgerPosition.y });
  };

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            className="nav"
            initial={{ x: '-100%' }}
            exit={{ x: '-100%' }}
            animate={{ x: toggleMenu ? 0 : '-100%' }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <div className="container">
              <div className="nav-header">
                <div className="row v-center space-between">
                  <div>
                    <h2>About me </h2>
                    {isMobile && <p>*if possible, browse on desktop :)</p>}
                  </div>
                  <div
                    className="close-nav"
                    onMouseEnter={menuHover}
                    onMouseLeave={onCursor}
                    onClick={() => setToggleMenu(!toggleMenu)}
                  >
                    <span className="go-back">go back</span>
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="nav-list">
                <ul>
                  {navRoutes.map((route) => (
                    <motion.li
                      key={route.id}
                      onHoverStart={() =>
                        setRevealVideo({
                          show: true,
                          video: route.video,
                          key: route.id,
                        })
                      }
                      onHoverEnd={() =>
                        setRevealVideo({
                          show: false,
                          video: route.video,
                          key: route.id,
                        })
                      }
                      onMouseEnter={() => onCursor('pointer')}
                      onMouseLeave={onCursor}
                      whileHover={{
                        x: -40,
                        transition: {
                          duration: 0.4,
                          ease: [0.6, 0.05, -0.01, 0.9],
                        },
                      }}
                      initial={{ x: -108 }}
                    >
                      <motion.div
                        whileHover={{
                          x: isMobile ? 0 : 100,
                          transition: {
                            duration: 0.4,
                            ease: [0.6, 0.05, -0.01, 0.9],
                          },
                        }}
                        className="link"
                      >
                        <div>
                          <span className="arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 101 57"
                            >
                              <path
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                fill="#FFF"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                          {route.title}
                        </div>
                        <div className="description">
                          <p>{route.description}</p>
                        </div>
                      </motion.div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="navFooter" id="navFooter">
                <div className="container">
                  <div className="row space-between">
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
                        onMouseEnter={() => onCursor('pointer')}
                        onMouseLeave={onCursor}
                        href="https://www.instagram.com/dzikdrums/"
                      >
                        <Instagram />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => onCursor('pointer')}
                        onMouseLeave={onCursor}
                        href="https://www.facebook.com/maciekdzikdrums"
                      >
                        <Facebook />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-video">
                <motion.div
                  animate={{
                    width: revealVideo.show ? 0 : '100%',
                  }}
                  className="reveal"
                ></motion.div>
                <div className="video">
                  <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.video
                      loop
                      muted
                      autoPlay
                      data-keepplaying
                      key={revealVideo.key}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        ease: 'easeInOut',
                      }}
                      src={require(`../../assets/${revealVideo.video}`)}
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
