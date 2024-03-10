import React from 'react';

import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 310;
    } else {
      current.scrollLeft += 310;
    }
  };

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Where rolling hills whisper secrets of the wine" color="white" />
        <h1 className="app__header-h1">The Spirit of Piedmont</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>The origin of the Manenti family dates to 1320 in Venice, one of the four Maritime Republics known as the Serenissima. The family&apos;s legacy intertwines with the evolution of vine cultivation, influenced by the events of the Serenissima and the estates built by the Genoese nobility on the hills of our present-day Manenti estate. </p>
        <button type="button" className="custom__button">Explore Menu</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Header;
