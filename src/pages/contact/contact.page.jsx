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
    
        emailjs.sendForm('gmail', 'service_iyo7j7l', e.target, 'user_LKK2kTjNuqABfR8kaZ41y')
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
                    <input type="text" placeholder="name" name="name" />
                    <input type="email" placeholder="email" name="email" />
                    <input type="text" placeholder="subject" name="subject" />
                    <input as="textarea" rows={5} palceholder="message" name="message" />
                    <input type="submit" value="send message" block />
                </form>
            }
        </div>
    )
}

export default Contact;