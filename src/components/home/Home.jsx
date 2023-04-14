import React from 'react';
import profileImg from '../../assets/profile-img.jpeg';
import { Link } from 'react-scroll';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import CV from '../../assets/noel-cv.pdf';
import './home.css';

const Home = () => {
  const openPdfInNewTab = () => {
    window.open(CV, '_blank');
  };
  return (
    <section className='home' id='home'>
      <div className='home__wrapper'>
        <div className='home__container container'>
          <h1 className='home__title text-cs'>
            <span>Noel </span> Abdullahi
          </h1>
          <p className='home__job'>
            <b>Data Scientist and Artificial Intelligence product owner</b>
          </p>

          <div className='home__img-wrapper'>
            <div className='home__banner'>
              <img
                src={profileImg}
                alt=''
                className='home__profile'
                style={{ marginLeft: '50px' }}
              />
            </div>

            <p className='home__data home__data-one'>
              <span className='text-lg'>
                20 <b>+</b>
              </span>

              <span className='text-sm text-cs'>
                Years of combined <span>Experience</span>
              </span>
            </p>

            <p className='home__data home__data-two'>
              <span className='text-lg'>
                100 <b>+</b>
              </span>

              <span className='text-sm text-cs'>
                Completed <span>Projects</span>
              </span>
            </p>
          </div>

          <p className='home__text'>
            Good Day, My name is Noel-I am the Lead Consultant and Founder of Issachar concepts Incorporated. Am available for any B2B Staff Augmentation projects.
            With over 15 years of experience in leading engineering and technical teams. I and my team provide data-driven insights that help clients make better decisions, improve operational efficiency, and achieve their business goals. 
            My team of experts are able to cut down analysis time and turn insights into action. I look forward to helping you achieve your business goals and objectives via staff augmentation.

          </p>

          <div className='home__socials'>
            <a
              href='https://www.linkedin.com/in/noelabdullahi/'
              target='_blank'
              className='home__social-link'
            >
              <FaLinkedinIn />
            </a>

            <a
              href='https://github.com/de-issachars'
              target='_blank'
              className='home__social-link'
            >
              <FaGithubAlt />
            </a>
          </div>

          <div className='home__btns'>
            <button onClick={openPdfInNewTab} className='btn text-cs'>
              VIEW CV
            </button>
            <Link
              className='hero__link text-cs'
              to='skills'
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              My Skills
            </Link>
          </div>
        </div>

        <div className='section__deco deco__left'></div>
      </div>

      <div className='section__bg-wrapper'>
        <span className='bg__title'>Data Analyst</span>
      </div>
    </section>
  );
};

export default Home;
