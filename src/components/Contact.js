import { faEnvelope, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import codeImg from '../css/undraw_Code_review_re_woeb.svg';

const Contact = () => {
    return (
        <section id='contact' className='my-5'>
            <div class="container px-4">
            <div className="text-center">
                        <h1>Get In Touch</h1>
                </div>
                <div style={{marginTop: '50px'}}  class="row gx-5 row-cols-1 row-cols-md-2 row-cols-lg-3 gy-3">
                    <div class="col">
                        <div class="p-3 border bg-light">
                            <div className="contact-icon phone-icon text-center">
                                <FontAwesomeIcon className='phone' icon={faPhone} />
                            </div>
                            <div className="phone-number text-center">
                                <h3>+8801684799670</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light">
                        <div className="contact-icon phone-icon text-center">
                                <FontAwesomeIcon className='phone' icon={faEnvelope} />
                            </div>
                            <div className="phone-number text-center">
                                <h3>devramimahmed01@gmail.com</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light">
                        <div className="contact-icon phone-icon text-center">
                                <FontAwesomeIcon className='phone' icon={faLocationArrow} />
                            </div>
                            <div className="phone-number text-center">
                                <h3>Baridhara, Gulshan-2, Dhaka</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-5 contact-form">
                <div class="row gx-5 row-cols-1 row-cols-md-2 gy-3">
                        <div class="col">
                            <div class="p-3 border">
                            <div className="text-center">
                                <p className="lead">
                                    Feel Free to Ask Me. I will Try My Best Get Back You.
                                </p>
                             </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email"/>
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Subject"/>
                            </div>
                            <div class="mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Your Message' rows="3"></textarea>
                            </div>
                            <button className="btn-primary btn-md w-100 border-0">
                                Send Message
                            </button>
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-3 border">
                                <img className='img-fluid' src={codeImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Contact;