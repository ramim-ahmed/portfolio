import React from 'react';
import islamiaStore from '../css/islamiya-store.png';
import petCare from '../css/pet-care-house.png';
import salamKitchen from '../css/salam-kitchen.png';
const MyProjects = () => {
    return (
        <>
            <section id='projects' className="my-5">
                <div className="container">
                    <div className="text-center">
                        <h1>My Projects</h1>
                    </div>
                    <div style={{marginTop: '50px'}} className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card card-img h-100">
    <img src={petCare} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Pet Care | Animal Services Website</h5>
        <p className="card-text">A Mern-stack single-page Pet care house is a animal services management website. Login system with firebase and private routes. Dashboard for admins can do CRUD operations. Any user can be order in services and give them valueable feedback or review</p>
        <div className='project-use-tech d-flex flex-wrap'>
               <p>React.js</p>
               <p>React Bootstrap</p>
                <p>Node.js</p>
                <p>Express.js</p>
                <p>MongoDB</p>
               <p>Firebase Authentication</p>
               <p>Stripe.js</p>
        </div>
      </div>
      <div className="card-footer">
      <div>
          <a style={{backgroundColor:'rgb(238, 6, 238)'}} href='https://pet-care-house-3c798.web.app/' target='_blank' rel='noreferrer' className="btn-primary btn-small text-decoration-none px-2 py-1 border-0">Live Site</a>
          <a style={{backgroundColor:'rgb(238, 6, 238)'}} href='https://github.com/ramimcodes/pet-care-house-client-side' target='_blank' rel='noreferrer' className="btn-primary btn-small text-decoration-none px-2 py-1 border-0 ms-4">Github</a>
        </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card card-img h-100">
      <img src={islamiaStore} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Islamia Store | Grocery Product Sale</h5>
        <p className="card-text">A Mern-stack single-page Islamiya store is a online e-commerce type grocery product sale management website. Login system with firebase and private routes. Dashboard for admins can do CRUD operations. Any user can be buy in product and give them valueable feedback or review</p>
        <div className='project-use-tech d-flex flex-wrap'>
            <p>React.js</p>
            <p>React Bootstrap</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>MongoDB</p>
            <p>Firebase Authentication</p>
        </div>
      </div>
      <div className="card-footer">
      <div>
          <a style={{backgroundColor:'rgb(238, 6, 238)'}} href='https://islamiya-store.web.app/' target='_blank' rel='noreferrer' className="btn-primary btn-small text-decoration-none px-2 py-1 border-0">
            Live Site
            </a>
          <a style={{backgroundColor:'rgb(238, 6, 238)'}} href='https://github.com/ramimcodes/islamiya-store-client' target='_blank' rel='noreferrer' className="btn-primary btn-small text-decoration-none px-2 py-1 border-0 ms-4">Github</a>
        </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card card-img h-100">
      <img src={salamKitchen} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Salam Kitchen | Resturent Food sale</h5>
        <p className="card-text">A Mern-stack single-page Salam Kitchen is a online e-commerce type restaurant food product sale management
website. Login system with firebase and private routes. Dashboard for admins can do CRUD operations.</p>
<div className='project-use-tech d-flex flex-wrap'>
            <p>React.js</p>
            <p>React Bootstrap</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>MongoDB</p>
            <p>Firebase Authentication</p>
        </div>
      </div>
      <div className="card-footer">
        <div>
          <a style={{backgroundColor:'rgb(238, 6, 238)'}} href='https://salam-kitchen-76602.web.app/' target='_blank' rel='noreferrer' className="btn-primary btn-small text-decoration-none px-2 py-1 border-0">Live Site</a>
          <a style={{backgroundColor:'rgb(238, 6, 238)'}} href='https://github.com/ramimcodes/salam-kitchen-client' target='_blank' rel='noreferrer' className="btn-primary btn-small text-decoration-none px-2 py-1 border-0 ms-4">Github</a>
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

export default MyProjects;