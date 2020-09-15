import React, { Component } from 'react';
import '../assets/css/skills.scss';
import '../assets/css/home-page.css';


class HomePage extends Component {

  render() {
    return (
      <div style={{ width: '100%' }}>
            <div className='home__div'>
              <img
                src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
                alt="avatar"
                className="avatar__img"
              />
              <div className="banner__text">
                <h1>Full stack  developer</h1>
                <hr />
                <p>I am student of International Hellenic University of Greece at the Department of IT with great passion for
								software development and in particular for embedded systems applications,I am highly intrested in learning new things and technologies.</p> 
              </div>
            </div>
      </div>
    );
  }
}


export default HomePage;