import React, { useEffect, useRef, useState } from 'react';

// import VanillaTilt from 'vanilla-tilt';
import gsap from 'gsap';

const tl = gsap.timeline();

const Case = ({ id, subtitle, title, img, code, demo }) => {
  const [toggleOption, setToggleOption] = useState(true);

  const handleClick = (id) => {
    if (toggleOption) {
      tl.to([`.case-${id} span`, `.case-${id} h2`], 0.2, {
        y: -250,
        opacity: 0,
        ease: 'expo.inOut',
      }).to(`.source-${id}`, 0.2, {
        opacity: 1,
        y: -250,
        ease: 'expo.inOut',
        display: 'flex',
        flexDirection: 'column',
      });
      setToggleOption(false);
    } else {
      tl.to(`.source-${id}`, 0.1, {
        opacity: 0,
        y: 0,
        ease: 'expo.inOut',
        display: 'none',
      }).to([`.case-${id} span`, `.case-${id} h2`], 0.2, {
        y: 0,
        opacity: 1,
        ease: 'expo.inOut',
      });
      setToggleOption(true);
    }
  };

  // const options = {
  //   scale: 1.1,
  //   speed: 500,
  //   max: 30,
  // };

  // const Tilt = (props) => {
  //   const { options, ...rest } = props;
  //   const tilt = useRef(null);

  //   useEffect(() => {
  //     VanillaTilt.init(tilt.current, options);
  //   }, [options]);

  //   return <div ref={tilt} {...rest} />;
  // };

  return (
    // <Tilt options={options}>
    <div className="case" onClick={() => handleClick(id)}>
      <div className={`case-details case-${id}`}>
        <span>{subtitle}</span>
        <h2>{title}</h2>
      </div>
      <div className={`source source-${id}`}>
        <a target="_blank" rel="nofollow noopener noreferrer" href={code}>
          <span className="source-link-span">see</span> code
        </a>
        <a target="_blank" rel="nofollow noopener noreferrer" href={demo}>
          <span className="source-link-span">see</span>
          page
        </a>
      </div>
      <div className="case-image">
        <img src={require(`../../assets/${img}.jpg`)} alt={title} />
      </div>
    </div>
    // </Tilt>
  );
};

export default Case;
