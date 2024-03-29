import React from 'react';

import { SubHeading } from '../../components';
import { data } from '../../constants';
import './Awards.css';

const AwardCard = ({ award: { imgUrl, title, origin, grapevariety, soil, ageing, description, link } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans color-black"><strong>Origin:</strong> {origin}</p>
      <p className="p__opensans color-black"><strong>Grape variety:</strong> {grapevariety}</p>
      <p className="p__opensans color-black"><strong>Soil:</strong> {soil}</p>
      <p className="p__opensans color-black"><strong>Ageing:</strong> {ageing}</p>
      <p className="p__opensans color-black"><strong>Description:</strong> {description}</p>
      <a href={link} className="custom__button_award">Download Technical</a>
    </div>
  </div>
);

const Awards = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Get lost in the tastes of our wines" color="black" />
      <h1 className="headtext__cormorant">Our Wines</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>
  </div>
);

export default Awards;
