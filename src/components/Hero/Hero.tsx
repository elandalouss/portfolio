import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm ayoub El andaloussi,</span> Lorem ipsum sit amet, adipisicing
        elit.
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis,
        cumque ratione inventore enim similique distinctio necessitatibus,
        eveniet nesciunt.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" ofset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
