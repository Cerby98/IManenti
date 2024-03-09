import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.corkcrewLeft} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">In 1999, our family stumbled upon this captivating area in Piedmont, nestled amidst the Piedmontese Apennines. Sheltered by this unique territory&apos;s climatic and environmental characteristics, the region captivated us with its pristine beauty.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.bottleWine} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.corkcrewRight} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">A year after welcoming his second daughter, Roberto Sarotto decided to assign Elena this untouched haven, far from the modern vineyards in the plains. Our estate, perched on a hill, boasts vineyards planted with girapoggio due to the steep slope.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
