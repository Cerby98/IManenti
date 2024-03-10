import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { GiWineBottle } from 'react-icons/gi';
import './Footer.css';
import { weekdaysFull, weekdaysHours, weekendFull, weekendHours } from '../consts/working-hours.const';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    {/* <FooterOverlay /> */}
    {/* <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans color-white">Loc. Ronconuovo 13, Neviglie, 12050 (CN)</p>
        <p className="p__opensans color-white">+39 0173 630228</p>
        <p className="p__opensans color-white">E-Mail:</p>
      </div>

      <div className="app__footer-links_logo">
        <GiWineBottle fontSize={27} className="overlay__close" color="var(--color-golden)" />
        <p className="p__opensans color-white">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans color-white">{weekdaysFull}</p>
        <p className="p__opensans color-white">{weekdaysHours}</p>
        <p className="p__opensans color-white">{weekendFull}</p>
        <p className="p__opensans color-white">{weekendHours}</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans color-white">{new Date().getFullYear()} I Manenti. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
