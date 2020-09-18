import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import scrollToComponent from 'react-scroll-to-component';
import './components/assets/css/Toolbar.css';
import DrawerToggleButton from './components/SideDrawer/DrawerToggleButton';
import HomePage from './components/pages/home_page';
import Skills from './components/pages/skills';
import ContactUs from './components/pages/contact';
import Clock from './components/assets/clock';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faTablet } from '@fortawesome/free-solid-svg-icons';
import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Bio from './components/pages/bio';
import Home from './components/pages/home';


library.add(faEnvelope, faKey, faTablet);

class App extends Component {
 /*  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });

  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  componentDidMount() {
    scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });
  };
 */
  render() {


   /*  let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    } */
    return (
      <div className="App" style={{ height: "100%" }}>
       <Home/>
        {/* <header className="toolbar" >
          <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button" style={{ paddingRight: "20px" }}>
              <DrawerToggleButton click={this.drawerToggleClickHandler} />
              <SideDrawer show={this.state.sideDrawerOpen} />
              {backdrop}
            </div>


            <div className="toolbar__logo"><span onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 1600 })}>JohnKeik</span></div>
            <div className="toolbar__navigation-items">
              <span onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'middle', duration: 1600 })}>Home</span>
              <span onClick={() => scrollToComponent(this.Skills, { offset: 0, align: 'middle', duration: 1600 })}>Skills</span>
              <span onClick={() => scrollToComponent(this.Contact, { offset: 0, align: 'middle', duration: 1600, })}>Contact</span>
              <span onClick={<Bio/>}>Port</span>
              <Router>
                <Link to="/bio">Bio
                </Link>

                <Switch>
                  <Route path="/bio">
                    <Bio />
                  </Route>
                </Switch>
              </Router>
            </div>
            <div className="toolbar__clock">
              <Clock />
            </div>

          </nav>
        </header>
        <div style={{ marginTop: '56px' }}>
          <section className='Home' ref={(section) => { this.Home = section; }}>
            <div style={{ width: '100%', margin: 'auto' }}>
              <HomePage />
            </div>
          </section>
          <section className='Skills' ref={(section) => { this.Skills = section; }}>
            <div style={{ width: '100%', margin: 'auto' }}>
              <Skills />
            </div>
          </section>
          <section className='Contact' ref={(section) => { this.Contact = section; }}>
            <div style={{ width: '100%', margin: 'auto' }}>
              <ContactUs />
            </div>
          </section>
        </div> */}
      </div>
    );
  }

}
export default App;
