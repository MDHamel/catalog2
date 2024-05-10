import './App.css';
import React, { useEffect, useRef, useState } from 'react';

import weddingImg from './images/wedding-event.jpg';
import valentineImg from './images/valentines-day-promotion.jpg';
import newArrivalsImages from './images/flower.jpg';

import roseImage from './images/products/purple-rose.jpg'
import rosePROMOTIONImage from './images/products/VALENTINES-white-red-rose.jpg'
import tulipImage from './images/products/Tulips.png';
import { DynamicRows } from './DynamicRows';

function App() {
  return (
    <div className="App bg-dark">
      <nav className='bg-light border-bottom border-2'>
        <div className='w-100 d-flex justify-content-center nav1 h6 fw-bold mt-2 mb-3 ff-lato fw-light text-center align-items-center'>
          <div id='logo' className='p-2 px-3 border border-3 border-dark rounded-4 m-0'>
            <h2 className='m-0 mt-2'>POSH</h2>
            <hr className='border border-2 border-dark opacity-100 m-0' />
            <h1 className='fw-bold'>POTS</h1>
          </div>
        </div>
        <div className='w-100 bg-dark nav2 h4 text-center ff-montserrat d-flex flex-wrap justify-content-center'>
          <a className='col-4 col-md-2 py-3 text-light' href='#flowers'>Flowers</a>
          <a className='col-4 col-md-2 py-3 text-light' href='#bouquets'>Bouquets</a>
          <a className='col-4 col-md-2 py-3 text-light' href='#events'>Events</a>
          <a className='col-6 col-md-2 py-3 text-light' href='#gifts'>Gifts</a>
          <a className='col-6 col-md-2 py-3 text-light' href='#confections'>Confections</a>
        </div>

      </nav>
      <main className='container bg-light py-4'>
        <div className='px-2 px-md-5 m-auto'>
          <EventPlacard />

        </div>

        <section id="flowers" className='my-5 container'>
          <Title>Flowers</Title>
          <DynamicRows>
            <ProductCard src={roseImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
            <ProductCard src={rosePROMOTIONImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
            <ProductCard src={tulipImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
            <ProductCard src={roseImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />

          </DynamicRows>
        </section>

        <section id="bouquets" className='my-5 container'>
          <Title>Bouquets</Title>
          <DynamicRows>
            <ProductCard src={roseImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
            <ProductCard src={rosePROMOTIONImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
            <ProductCard src={tulipImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
            <ProductCard src={roseImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
            <ProductCard src={rosePROMOTIONImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
          </DynamicRows>
        </section>

        <section id="events" className='my-5 container'>
          <Title>Events</Title>
          <DynamicRows>
            <ProductCard src={roseImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
            <ProductCard src={rosePROMOTIONImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
            <ProductCard src={tulipImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
          </DynamicRows>
        </section>

        <section id="gifts" className='my-5 container'>
          <Title>Gifts</Title>
          <DynamicRows>
            <ProductCard src={roseImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
            <ProductCard src={rosePROMOTIONImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
            <ProductCard src={tulipImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
            <ProductCard src={roseImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
            <ProductCard src={rosePROMOTIONImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />

          </DynamicRows>
        </section>

        <section id="confections" className='my-5 container'>
          <Title>Confections</Title>
          <DynamicRows>
            <ProductCard src={roseImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
            <ProductCard src={rosePROMOTIONImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
            <ProductCard src={tulipImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
            <ProductCard src={roseImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
            <ProductCard src={rosePROMOTIONImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
            <ProductCard src={tulipImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
            <ProductCard src={tulipImage} text="Testing testing one two three. This concludes our test, thank you for your patience." title="TEST" />
          </DynamicRows>
        </section>
          <footer className='d-flex flex-column  flex-md-row justify-content-center my-3'>
          <small className='mx-5 p-2 text-decoration-none text-dark-emphasis  text-center'>All Rights Reserved</small>
          <small className='mx-5 p-2 text-decoration-none text-dark-emphasis  text-center'>© Copyright 2023</small>
          <small className='mx-5 p-2 text-decoration-none text-dark-emphasis text-center' href="#">Developed and Maintained by <br />Matthew Hamel</small>
        </footer>
      </main>
    </div>
  );
}

function EventPlacard() {
  const images = [weddingImg, valentineImg, newArrivalsImages];
  const text = [
    <p className='position-absolute bottom-0 py-0 py-md-2 px-1 text-center w-100  ff-montserrat '>Our Wedding Collection is in full bloom!<br />Browse our selection to make your day memorable.</p>
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div id="EventPlacard" class="carousel slide rounded-4 overflow-hidden my-4">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#EventPlacard" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#EventPlacard" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#EventPlacard" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner" >
        <div class="carousel-item active">
          <img src={weddingImg} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <p className='display-6 ff-montserrat fw-bold carousel-text'>Our Wedding Collection is in Bloom!<br />Make your day memorable, book online.</p>
          </div>
          <div class="carousel-caption d-block d-md-none">
            <p className='h4 ff-montserrat fw-bold carousel-text'>View our Wedding Collection</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={valentineImg} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5 className='h1 ff-lato fw-bold text-light carousel-text'>Give the gift of luxury to the one you love. <br />Valentine items now available.</h5>
          </div>
          <div class="carousel-caption d-block d-md-none">
            <p className='h4 ff-montserrat fw-bold carousel-text'>Valentine's Items Now Available</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={newArrivalsImages} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5 className='h1 ff-lato fw-bold text-light carousel-text' >Our new arrivals are here!<br />Check out our expanded Spring Collection</h5>
          </div>
          <div class="carousel-caption d-block d-md-none">
            <p className='h4 ff-montserrat fw-bold carousel-text'>New Arrivals On Sale NOW</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev m-1" type="button" data-bs-target="#EventPlacard" data-bs-slide="prev" >
        <div class="bg-dark rounded-circle p-2 d-flex justify-items-middle justify-content-middle">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </div>
        <span class="visually-hidden" >Previous</span>
      </button>
      <button class="carousel-control-next m-1" type="button" data-bs-target="#EventPlacard" data-bs-slide="next">
        <div class="bg-dark rounded-circle p-2 d-flex justify-items-middle">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </div>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

function ProductCard({ text, title, src }) {

  return (
    <div class="card my-3 mx-auto m-md-3" style={{ maxWidth: "18rem", minWidth: '18rem' }}>
      <img src={src} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{text}</p>
        <a href="#" class="btn btn-dark col-12">Add to Cart</a>
      </div>
    </div>
  )
}

function CartMenu() {

}

function Title({ children }) {

  return (
    <div className='d-flex w-100 mb-4'>
      <hr className='w-50 my-auto mx-4 border border-1 border-dark opacity-100' style={{}} />
      <h1 className='display-1 text-center'>{children}</h1>
      <hr className='w-50 my-auto mx-4 border border-1 border-dark opacity-100' />

    </div>
  )
}

export default App;
