import React, { useState, useRef, Component } from 'react';
import { useSpring, animated } from 'react-spring';
import counterImg from '../assets/images/counter_Dart.png';
import minionImg from '../assets/images/minion.png';
import eventsImg from '../assets/images/eventsproject.png';
import whitetowerImg from '../assets/images/whitetower.png';
import portfolio_bs_jsImg from '../assets/images/portfolio-bootstrapjs.png';
import './portfolio.scss';

class Portfolio extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="main"style={{marginTop:"70px"}}>
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
              <div onClick={() => {window.open("https://play.google.com/store/apps/details?id=jk.counter")}} style={{cusrsor:'pointer'}}>
              <div className="image-container" style={{ width: '100%', textAlign: 'center' ,paddingBottom:'1rem'}}><img style={{maxWidth:'300px'}} className="port__image" alt="Web Apps"  src={counterImg}/></div>                                 
                  <div className="card-title">BoardGames Counter</div>
                  <div className="card-body"><p>Native mobile application using Flutter.Flutter is Google's UI toolkit for building beautiful,natively
                    compiled applications for mobile,web,and desktop from a single code base. </p></div>
                    <div><span className="card__code__span" onClick={() => {window.open("https://github.com/johnkeik/counter")}}>Check code</span></div>
              </div>
            </Card>
          </div>
          <div className="column">
            <Card>
              <div onClick={() => {window.open("https://drive.google.com/open?id=1vPggPwiMpWVJWan9x7Lesrf2k8x0NSNP")}} style={{cusrsor:'pointer'}}>
              <div className="image-container" style={{ width: '100%', textAlign: 'center' ,paddingBottom:'1rem'}}><img style={{maxWidth:'300px'}} className="port__image" alt="Mobile Apps"  src={minionImg}/></div>                                 
                  <div className="card-title">Minion animation</div>
                  <div className="card-body"><p>Animation using 3ds Max.An academic project for creating a 3d model of a minion and playing arround with some animation tools
                    and physics for the overall outcome.</p></div>
              </div>
            </Card>
          </div>
          <div className="column">
            <Card>
              <div onClick={() => {window.open("https://github.com/N1ckTheD1ck/Events-Project-Team-7.git")}} style={{cusrsor:'pointer'}}>
              <div className="image-container" style={{ width: '100%', textAlign: 'center' ,paddingBottom:'1rem'}}><img style={{maxWidth:'300px'}} className="port__image" alt="Desktop Apps"  src={eventsImg}/></div>                                 
                  <div className="card-title">Thess Events Guide </div>
                  <div className="card-body"><p>Desktop application for showing multiple events of Thessaloniki using C# and .NET Framework.Using a webscrapping tool 
                    coded in python and taking info about events while keeping always updated.</p></div>
                    <div><span className="card__code__span" onClick={() => {window.open("https://github.com/N1ckTheD1ck/Events-Project-Team-7.git")}}>Check code</span></div>
              </div>
            </Card>
          </div>
          <div className="column">
            <Card>
              <div onClick={() => {window.open("https://drive.google.com/open?id=18j9BiAM18nx5PYpQ8-yv4CVhFiUFTiHy")}} style={{cusrsor:'pointer'}}>
              <div className="image-container" style={{ width: '100%', textAlign: 'center' ,paddingBottom:'1rem'}}><img style={{maxWidth:'300px'}} className="port__image" alt="Desktop Apps"  src={whitetowerImg}/></div>                                 
                  <div className="card-title">White Tower</div>
                  <div className="card-body"><p>Model of Thessaloniki's  White Tower.Using 3ds max and creating a 3d model for academic purposes. </p></div>
              </div>
            </Card>
          </div>
          <div className="column">
            <Card>
              <div onClick={() => {window.open("https://johnkeik.github.io/myPortfolioSite/")}} style={{cusrsor:'pointer'}}>
              <div className="image-container" style={{ width: '100%', textAlign: 'center' ,paddingBottom:'1rem'}}><img style={{maxWidth:'300px'}} className="port__image" alt="Desktop Apps"  src={portfolio_bs_jsImg}/></div>                                 
                  <div className="card-title">Portfolio Site</div>
                  <div className="card-body"><p>Fully responsive website using HTML,CSS,Javascript and Bootstrap.Singe paeg portfolio website with scrollable buttons. </p></div>
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


export default Portfolio;