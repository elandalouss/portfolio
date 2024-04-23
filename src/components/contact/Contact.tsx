import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            maiores, explicabo quasi reiciendis cum hic!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>elandaloussi.ay02@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>0635781526</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>location 23 lorem</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" name="name" id="" placeholder="Enter Your Name" />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter Your Email"
          />
          <label htmlFor="">Write Your Message Here</label>
          <textarea name="message" rows="8" placeholder="Enter Your Message"></textarea>
          <button type="submit" className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
