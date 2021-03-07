import emailjs from 'emailjs-com';
import React, {useState} from 'react';

import './contact.style.scss';
import FormInput from './../../components/form-input/form-input.component';
import FormArea from './../../components/form-input/form-area.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {Editor} from '@tinymce/tinymce-react';
import blog from '../../blog';

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
        toggle();
      }

    const sentAlert = () => {
        <h1>Message Sent</h1>
    }
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [subject, setSubject]=useState("");
    const [message, setMessage]=useState("");
    return (
        <div className="contact">
            {sent ? sentAlert : 
                <form className="contact-form" onSubmit={sendEmail}>
                <FormInput 
                        name="name" 
                        type='text' 
                        value={name}
                        handleChange={(event)=>{setName(event.target.value)}}
                        label='Name'
                        required
                    />
                <FormInput 
                        name="email" 
                        type='email' 
                        value={email} 
                        handleChange={(event)=>{setEmail(event.target.value)}}
                        label='E-Mail'
                        required
                    />
                <FormInput 
                        name="subject" 
                        type='Text' 
                        value={subject}
                        handleChange={(event)=>{setSubject(event.target.value)}}
                        label='Subject'
                        required
                    />
                    <FormArea name='message'
                    type='text'
                    value={message}
                        handleChange={(event)=>{setMessage(event.target.value)}}
                        label='Message'
                        required
                        />
                {/* <Editor name="message"
                        init={{selector: "textarea",
                        menubar: false,
                        plugins: "link image code",
                        toolbar: 'undo redo | styleselect | forecolor | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link image | code'
                        
                    }}
                        apikey={blog}
                        onEditorChange={ (content, editor) => {
                            setMessage(content);
                            console.log(message);
                          }}
                        /> */}
                        {/* <label>Message</label>
                <textarea name="message" /> */}
                <CustomButton type='submit'>Send</CustomButton>
                <br/>
              </form>
            }
        </div>
    )
}

export default Contact;