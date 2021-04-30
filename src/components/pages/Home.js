import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

import Fade from '@material-ui/core/Fade';

function Home() {
  return (
    <Fade in={true} timeout={500}>
        <div>
            <HeroSection />
            <Cards />
        </div>
    </Fade>
  );
}

export default Home;


// <Footer />
