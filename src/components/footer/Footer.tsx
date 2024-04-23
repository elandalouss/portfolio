import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            dignissimos repellat eveniet ullam soluta delectus?
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-botton-left">© 2023 Ayoub El andaloussi, All rights resurved.</p>
      <div className="footer-botton-right">
        <p>Term Of Services</p>
        <p>Privacy Policy</p>
        <p>Connect With Me</p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
