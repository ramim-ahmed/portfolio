import React from 'react';
import me from '../css/my-bg2.png';
const About = () => {
    return (
        <>
            <section id='about' className='py-5'>
            <div className="container px-4">
                <div className="row gx-5">
                    <div className="col-12 col-lg-5">
                    <div className="p-3">
                        <img src={me} alt="" className="img-fluid" />
                    </div>
                    </div>
                    <div className="col-12 col-lg-7">
                    <div className="p-3 border bg-light">
                        <h1>About Me</h1>
                        <p className="lead">
                        My name is Ramim Ahmed. I am an professionally Junior ReactJS Developer. I have been working with javascript programming language in ReactJS ( Front-End ), NodeJS ( Back-End ) and MongoDB ( Data-Base ). And I have some of Mern Stack Project. I am a positive, enthusiastic and competent junior Web Developer who, always try to learn new thing of skills, qualities and attributes that guarantee I will perform highly in this role.So I Belive that I Will can Manage All aspects of the web application development process for complicated, and challenging project.
                        </p>
                        <div>
                            <h4>
                                Working With Technolgoies :
                            </h4>
                           <div className='mt-3'>
                              <h5>Front-End Development</h5>
                              <div className='front-end technologies d-flex justify-content-between flex-wrap'>
                                  <p>JavaScript</p>
                                  <p>ES6</p>
                                  <p>React.JS</p>
                                  <p>Redux</p>
                                  <p>Bootstrap</p>
                                  <p>HTML5</p>
                                  <p>CSS3</p>
                              </div>
                           </div>
                           <div>
                              <h5>Back-End Development</h5>
                              <div className='Back-end technologies d-flex'>
                                  <p>Node.JS</p>
                                  <p>Express.JS</p>
                                  <p>MongoDB</p>
                              </div>
                           </div>
                           <div>
                              <h5>Tools</h5>
                              <div className='Back-end technologies d-flex'>
                                  <p>VS Code</p>
                                  <p>Git</p>
                                  <p>Chrome Dev Tool</p>
                              </div>
                           </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default About;