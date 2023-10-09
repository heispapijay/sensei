import React, { useState, useEffect } from 'react';
import './hero.css';
import { Navbar } from '../../components';

// import heroIMG from '../../assets/sensei_hero.svg'
import hero1 from '../../assets/hero1.svg';
import hero2 from '../../assets/hero2.svg';
import hero3 from '../../assets/hero3.svg';


function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    hero1,
    hero2,
    hero3,
  ];

  const headings = [
    'Find Great Coaches',
    'Get More Growth',
    'Build Stronger Connections',
  ];

  const paragraphs = [
    'Get practical career or startup advice',
    'Track your coaching progress and',
    'Contribute meaningfully to connections and',
  ];

  const paragraphs2 = [
    'from professions with real experience',
    'opportunities to accelerate your growth',
    'communities of interest online and offline',
  ]


  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 3000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className='sensei_main'>
      <div className='sensei_rightside'>
        <Navbar />
        <div className='sensei_rightside_center'>
          <div className='sensei_hero_img'>
            <img src={images[currentIndex]} alt='animation' />
          </div>
          <div className='sensei_text center'>
            <h1>{headings[currentIndex]}</h1>
            <p>{paragraphs[currentIndex]}
              <br />{paragraphs2[currentIndex]}</p>
          </div>
          <div className='indicators'>{images.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? 'active' : ''}
              onClick={() => setCurrentIndex(index)}
            />
          ))}</div>
          <div className='mobile_buttons'>
            <a href='https://hztgl43n8jl.typeform.com/to/PLPXt9By'><button className='btn1'>Join Our Test Cohort</button></a>
            <a href='https://hztgl43n8jl.typeform.com/to/OkuBrIXv'><button className='btn2'>Subscribe to Updates
            </button></a>
          </div>
        </div>
        {/* <Footer /> */}
      </div>

      <div className='sensei_leftside'>
        <div className='sensei_leftside_start'>
          <h1>Connect with Us</h1>
          <p>
            Catch the latest updates, exclusive offers, and more right in your inbox. Subscribe now to stay in the know about events, product launches, and tailored content. You can join our test cohort to test our product or join our mailing list. Join us!
          </p>
          <div>
            <a href='https://hztgl43n8jl.typeform.com/to/PLPXt9By'><button className='btn1'>Join Our Test Cohort</button></a>
            <a href='https://hztgl43n8jl.typeform.com/to/OkuBrIXv'><button className='btn2'>Subscribe to Updates
            </button></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
