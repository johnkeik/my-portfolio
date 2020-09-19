import emailjs from "emailjs-com";
import React from 'react';
import '../assets/css/skills.scss';

export default function ContactUs() {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'my_website', e.target, 'user_efDmotUGbghc40Ab9onOi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div style={{ width: '100%', margin: 'auto' ,backgroundColor:'#282828' }}>
                    <div className="contact__container">
                        <div className="contact__form">
                            <br></br>
                        <h2 style={{ color: 'white' }}>If you want to get in touch with me.Send me an email.</h2>
                        <form onSubmit={sendEmail}>
                            <div className="row pt-5 mx-auto">
                                <div className="col-8 form-group mx-auto">
                                    <input type="text" className="form-control" placeholder="Name" name="name" />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input type="email" className="form-control" placeholder="Email Address" name="email" />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input type="text" className="form-control" placeholder="Subject" name="subject" />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                                </div>
                                <div className="col-8 pt-3 mx-auto">
                                    <input type="submit" className="btn btn-info" value="Send Message"></input>
                                </div>
                            </div>
                        </form>
                        </div>
                        <h2 style={{ color: 'white', paddingTop: '2rem' }}> Or...Lets get Social<span role="img" aria-label="face-with-uneven-eyes-and-wavy-mouth ">🥴 </span> </h2>
                        <div className="social__links">
                            {/* <li><a href="https://www.facebook.com/jannis.keikoglou" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                            <li><a href="https://www.linkedin.com/in/john-keikoglou-0a18a010a/" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
                            <li><a href="https://www.instagram.com/giannis_keik/" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                            <li><a href="https://github.com/johnkeik" class="icon brands fa-github"><span class="label">Github</span></a></li> */}
                             {/*Linked in*/}
                             <a href="https://www.linkedin.com/in/john-keikoglou-0a18a010a/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>
                            {/*Github*/}
                            <a href="https://github.com/johnkeik" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>
                            {/*Facebook*/}
                            <a href="https://www.facebook.com/jannis.keikoglou" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square"  aria-hidden="true" />
                            </a>
                             {/*instagram*/}
                             <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square"  aria-hidden="true" />
                            </a>
                        </div>
                    </div>
        </div>

    )
}
