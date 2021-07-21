import { useState } from "react";
import "./contact.scss";

function Contact(props) {
  const [massage, setmassage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setmassage(true)
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="svg" />
      </div>
      <div className="right">
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Massage"></textarea>
          <button type="submit">Send</button>
        </form>
        {massage && <span>Thanks I'll reply ASAP</span>}
      </div>
    </div>
  );
}

export default Contact;
