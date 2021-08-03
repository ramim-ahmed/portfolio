import { faFacebookSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Header = () => {
    return (
        <>
            <section className = 'header d-flex '>
            <div className="container px-4 text-light ">
                <div className="row header-row ">
                    <div className="col-12 text-center d-flex flex-column justify-content-center align-items-center">
                        <div className="p-3">
                            <h1>I'm Ramim Ahmed</h1>
                            <h2>Front-End Developer</h2>
                        </div>
                        <div className="social-link">
                        <a href="https://github.com/ramimcodes" target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon className='social-icon' icon={faGithubSquare} />
                        </a>
                        <a href="https://www.linkedin.com/in/ramim-ahmed-04107a211/" target='_blank' rel='noreferrer' >
                            <FontAwesomeIcon className='social-icon' icon={faLinkedin} />
                        </a>
                       <a href="https://www.facebook.com/ramimahmed.showrab.12" target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon className='social-icon' icon={faFacebookSquare} />
                       </a>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default Header;