import React, { useState, useRef, Component } from 'react';
import { useSpring, animated } from 'react-spring';
import '../assets/css/skills.scss';
import tablet from '../assets/icons/tablet-trans.png';
import web from '../assets/icons/web-trans.png';
import desktop from '../assets/icons/desktop-trans.png';


class Skills extends Component {

  render() {
    return (
      <div className="main">
            <div className="container">
              <div className="row">
               {/*  {cards.map((card, i) => (
                  <div className="column" key={i}>
                    <Card >
                      <div onClick={() => { window.open("https:/www.google.com") }} style={{ cursor: 'pointer' }}>
                       <div style={{ width: '100%', textAlign: 'center' ,paddingBottom:'1rem'}}><img style={{width:'100px'}} src={cards.image}/></div>                                 
                        <div className="card-title">{card.title}</div>
                        <div className="card-body">{card.description}</div>
                        
                        </div>

                    </Card>
                  </div>
                ))} */}

                <div className="column">
                  <Card>
                    <div /* onClick={() => {window.open("https://www.google.com/")}} */ style={{cusrsor:'pointer'}}>
                    <div style={{ width: '100%', textAlign: 'center' ,paddingBottom:'1rem'}}><img  alt="Web Apps" style={{width:'100px'}} src={web}/></div>                                 
                        <div className="card-title">Web Development <span role="img" aria-label="emoji">🧐</span></div>
                        <div className="card-body"><p>Custom website wich can offer you stability,best design and google results.Fully responsive,SEO optimized.Low Cost!'</p></div>
                    </div>
                  </Card>
                </div>
                <div className="column">
                  <Card>
                    <div /* onClick={() => {window.open("https://www.google.com/")}} */ style={{cusrsor:'pointer'}}>
                    <div style={{ width: '100%', textAlign: 'center' ,paddingBottom:'1rem'}}><img alt="Mobile Apps" style={{width:'100px'}} src={tablet}/></div>                                 
                        <div className="card-title">Mobile Apps<span role="img" aria-label="emoji">  😜 </span> </div>
                        <div className="card-body"><p>Elegant designs on native android applications.Instead of using cross-platform code, we built native android applications which offers speed,elegant design and native functionality to provide better User Experience to your app's users.</p></div>
                    </div>
                  </Card>
                </div>
                <div className="column">
                  <Card>
                    <div /* onClick={() => {window.open("https://www.google.com/")}} */ style={{cusrsor:'pointer'}}>
                    <div style={{ width: '100%', textAlign: 'center' ,paddingBottom:'1rem'}}><img alt="Desktop Apps" style={{width:'100px'}} src={desktop}/></div>                                 
                        <div className="card-title">Desktop Apps <span role="img" aria-label="emoji">😮</span>  </div>
                        <div className="card-body"><p>High quallity desktop applications.Products target business that want to expand their services, or get feedback and improve their current services.</p></div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
      </div>
    );
  }
}
function Card({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    };
  });

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07 // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}


/* const cards = [
  {
    title: 'Web Development  🧐' ,
    description:
      'Custom website wich can offer you stability,best design and google results.Fully responsive,SEO optimized.Low Cost!',
      image: {tablet}
  },
  {
    title: 'Mobile Apps 📱',  
    description:
    "Elegant designs on native android applications.Instead of using cross-platform code, we built native android applications which offers speed,elegant design and native functionality to provide better User Experience to your app's users.",
    image: {web}
  },
  {
    title: 'Desktop Apps 🚀',
    description:
      "Export your project as a high-quality React codebase. We're lazer focused on helping you build and iterate quickly, but expect that you'll eventually want to export and wrap things up in your favorite code editor.",
      image: {desktop}
    }, 
]; */


export default Skills;