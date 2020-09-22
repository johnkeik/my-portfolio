import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../App.css';
import scrollToComponent from 'react-scroll-to-component';
import '../assets/css/Toolbar.css';
/* import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'; */
/* import SideDrawer from '../SideDrawer/SideDrawer'; */
import HomePage from './home_page';
import Skills from './skills';
import ContactUs from './contact';
import Clock from '../assets/clock';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faTablet } from '@fortawesome/free-solid-svg-icons';
import Backdrop from '../Backdrop/Backdrop';
import Portfolio from './portfolio';


library.add(faEnvelope, faKey, faTablet);

class Home extends Component {

  state = {
    sideDrawerOpen: false,
    showOnlyHome: false,
  };

  showOnlyHomeClickHandler =() => {
    this.setState((prevState) => {
      return {showOnlyHome : !prevState.showOnlyHome};
    })
  }

  showMultipleChoiseClickHandler = () => {
    this.setState({showOnlyHome:false});
  }


  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });

  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
/* 
    componentDidMount() {
      scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });
 
    }; */

  render() {
/* 
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    } */

    return (
      <div className="App" style={{ height: "100%" }}>
        <Router>
          <header className="toolbar" >
            <nav className="toolbar__navigation">
              {/* <div className="toolbar__toggle-button" style={{ paddingRight: "20px" }}>
                <DrawerToggleButton click={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
              </div>
 */}

              <div className="toolbar__logo"><span onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 1600 })}>JohnKeik</span></div>
              <div className="toolbar__navigation-items">
                {/*  <span onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'middle', duration: 1600 })}>Home</span>
                <span onClick={() => scrollToComponent(this.Skills, { offset: 0, align: 'middle', duration: 1600 })}>Skills</span>
                <span onClick={() => scrollToComponent(this.Contact, { offset: 0, align: 'middle', duration: 1600, })}>Contact</span>
                <span onClick={() => scrollToComponent(this.Portfolio, { offset: 0, align: 'middle', duration: 1600 })}>Portfolio</span> */}

                <span ><Link className="toolbar__links" to="/" onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'middle', duration: 1600 })}>Home</Link></span>
                <span className="toolbar__links-removable"><Link className="toolbar__links" to="/" onClick={() => scrollToComponent(this.Skills, { offset: 0, align: 'middle', duration: 1600 })}>Skills</Link></span>
                <span className="toolbar__links-removable"><Link className="toolbar__links" to="/" onClick={() => scrollToComponent(this.Contact, { offset: 0, align: 'middle', duration: 1600, })}>Contact</Link></span>
                {/* <span><Link className="toolbar__links" to="/bio">Bio</Link></span> */}
                <span><Link className="toolbar__links" to="/portfolio">Portfolio</Link></span>
              </div>
              <div className="toolbar__clock">
                <Clock />
              </div>

            </nav>
          </header>
          <Switch>
          {/*   <Route path="/bio">
              <Bio pdf={samplePdf}/>
            </Route> */}
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/">
              <div style={{ marginTop: '56px' }}>
                <section className='Home' ref={(section) => { this.Home = section; }}>
                  <div style={{ width: '100%', margin: 'auto' }}>
                    <HomePage />
                  </div>
                </section>
                <section className='Skills' ref={(section) => { this.Skills = section; }}>
                  <div style={{ width: '100%', margin: 'auto' ,padding:'3em'}}>
                    <Skills />
                  </div>
                </section>
                <section className='Contact' ref={(section) => { this.Contact = section; }}>
                  <div style={{ width: '100%', margin: 'auto' }}>
                    <ContactUs />
                  </div>

                </section>
              </div>



            </Route>
          </Switch>
        </Router>


      </div>
    );
  }
}


export default Home;