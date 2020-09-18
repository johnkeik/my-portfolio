import React, { Component, useState, Button } from 'react';
import '../assets/css/skills.scss';
import '../assets/css/home-page.css';
import Bio from './bio';
import Popup from './Popup';

function HomePage() {


  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div style={{ width: '100%' }}>
      <div className='home__div'>
        <img
          src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
          alt="avatar"
          className="avatar__img"
        />
        <div className="banner__text">
          <br></br>
          <h1>Full stack  developer</h1>
          <hr />
          <p>I am student of International Hellenic University of Greece at the Department of IT with great passion for
								software development and in particular for embedded systems applications,I am highly intrested in learning new things and technologies.</p>
        </div>
        {/* <Button variant="secondary">Secondary</Button>{' '} */}
      <div className="bio__button"><p  onClick={togglePopup}>Check Bio </p></div>
        {isOpen && <Popup
          content={<>
            <b>Design your Popup</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button>Test button</button>
          </>}
          handleClose={togglePopup}
        />}
      </div>
    </div>
  );
}



export default HomePage;