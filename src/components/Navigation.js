import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
const Navigation = () => {

  const [show, setShow] = useState(false)
    return (
             <>
               <nav className="navigation">
                 <section className="container d-flex justify-content-between align-items-center">
                   <div className="brand">
                     <a href="/">
                      RamimDevs
                     </a>
                   </div>
                    <ul className={"d-flex nav-links m-0 nav-navbar " + (!show? 'active' : 'hidden')}>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="#about">About</a>
                      </li>
                      <li>
                        <a href="#projects">Project</a>
                      </li>
                      <li>
                        <a href="#contact">Contact</a>
                      </li>
                      <li className="text-center">
                        <a className="resume" href="/">Resume</a>
                      </li>
                    </ul>
                    <div onClick={() => setShow(!show)} className="mobile-menu">
                    <FontAwesomeIcon icon={faBars} />
                    </div>
                 </section>
               </nav>
             </>
    );
};

export default Navigation;