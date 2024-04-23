import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1><span>I'm ayoub El andaloussi,</span> Lorem ipsum sit amet, adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis,
        cumque ratione inventore enim similique distinctio necessitatibus,
        eveniet nesciunt.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
