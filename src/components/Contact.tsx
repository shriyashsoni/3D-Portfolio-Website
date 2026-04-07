import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/shriyash-soni"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — shriyash-soni
              </a>
            </p>
            <p>
              <a
                href="mailto:sonishriyash@gmail.com"
                data-cursor="disable"
              >
                Email — sonishriyash@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              Bachelor of Engineering (Computer Science - Data Science) | RGPV University, Jabalpur — Expected 2028
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/shriyashsoni"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/shriyash-soni"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://x.com/shriyash_soni?t=8Mh_W6fG5hfabPzJNTW3lg&s=09"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter / X <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/sonishriyash"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Shriyash Soni</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
