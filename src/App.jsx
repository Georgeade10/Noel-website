import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import PhotoGallery from './components/photoGalery/PhotoGalery';

function App() {
  return (
    <main className='main'>
      <Header />
      <Home />
      <PhotoGallery />
      <Portfolio />
      <Skills />
      <Resume />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
