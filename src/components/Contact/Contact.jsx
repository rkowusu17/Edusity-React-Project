import React from "react";
import "./contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b8c0448e-c430-45a0-aaa9-c4bd76a8b66e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="message-icon" />
        </h3>
        <p>
          Feel free to reach out through the contact form provided or find our
          contact information below. Your feedback and inquiries are very keem
          to us as we strive to provide wonderful service to our university
          communtiy
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" srcset="" />
            contact-edusity@gmail.com
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" srcset="" />
            +1 123-456-7890
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="" srcset="" />
            123 University Avenue, Suite 456 <br /> Cityville, USA
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Type your message here"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
