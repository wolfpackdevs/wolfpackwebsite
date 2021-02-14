import emailjs from 'emailjs-com';
import React, {useState} from 'react';

import './contact.style.scss';

const Contact = () => {

    const [sent, setSent] = useState(false);

    const toggle = () => {
        setSent(!sent);
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_iyo7j7l', 'template_ky1oume', e.target, 'user_LKK2kTjNuqABfR8kaZ41y')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        toggle()
      }

    const sentAlert = () => {
        <h1>Message Sent</h1>
    }

    return (
        <div className="contact">
            {sent ? sentAlert : 
                <form className="contact-form" onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Subject</label>
                <input type="text" name="subject" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
              </form>
            }
        </div>
    )
}

export default Contact;