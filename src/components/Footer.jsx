import React from 'react';
import fb from '../icons/fb.png';
import instagram from '../icons/Instagram_small.jpg';
import twitter from '../icons/Twitter.svg';
import '../styles/Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <section className="footer">
          <div className="social-media-container">
            <img src={fb} alt="" className="social-icon" />
            <img src={instagram} alt="" className="social-icon" />
            <img src={twitter} alt="" className="social-icon" />
          </div>
          <div className="contact-information">
            <p> Info &#149; Support &#149; Marketing </p>
            <p> Terms of Use &#149; Privacy Policy </p>
            <p> &copy; 2021 TrelloReader </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;
