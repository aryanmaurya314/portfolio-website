import { useState } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();   
    emailjs.sendForm('service_vil2z3s', 'template_a9zsycc', e.target, 'To7GyPi0l6T6oL2Og')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    setMessage(true);
  }

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/contact.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="top">
            <h2>Get In Touch </h2>
            <a href="https://bit.ly/3xru2n8" target="_blank">
              <div className="socialIcons">
                <img src="assets/linkedin.png" />
              </div>
            </a>
            <a href="https://bit.ly/3MroD40" target="_blank">
              <div className="socialIcons">
                <img src="assets/twitter.png" />
              </div>
            </a>
            <a href="https://bit.ly/3xsu7qO" target="_blank">
              <div className="socialIcons">
                <img src="assets/github.png" />
              </div>
            </a>
          </div>

          <form onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="name" />
            <input type="tel" placeholder="Mobile" name="mobile" />
            <input type="email" placeholder="Email" name="email" />
            <textarea placeholder="Message" name="message"></textarea>
            <button type="submit">Send</button>
            {message && <h4>"Thanks, I'll reply ASAP :)</h4>}
          </form>
        </div>
      </div>
    </div>

  )
}

export default Contact 