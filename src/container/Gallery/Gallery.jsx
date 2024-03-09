import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Langhe, Roero & Gavi" color="white" />
        <h1 className="headtext__cormorant">Wine Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>The estate&apos;s elevation and dedication to hand cultivation contribute to the production of exceptional wines, particularly the Gavi of the Municipality of Gavi, with its soil rich in abundant mineral components.</p>
        <button type="button" className="custom__button">Special Promotion</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.bdxBottle, images.burgBottle, images.alscBottle].map((image, index) => (
            <div className="app__bottle-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" className="bottle__image" />
              <p className="bottle__image-price">----</p>
            </div>
          ))}
        </div>
        <div className="app__bottle-images_arrows">
          <BsArrowLeftShort className="bottle__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="bottle__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
