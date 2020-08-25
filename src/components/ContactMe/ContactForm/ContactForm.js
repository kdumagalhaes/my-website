import React, { useState } from 'react';
import { ContactFormTag } from './ContactFormStyles';
import Button from '../../Buttons/Button';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [confirmation, setConfirmation] = useState("sendMessage")

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'gmail',
        'template_o9emmeh9',
        e.target,
        'user_eJy9cWqvsK2R45FQKV6lV'
      )
      .then(
        (result) => {
          console.log(result.text);
          setConfirmation('Email sent!')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactFormTag
      id="ContactForm"
      onSubmit={sendEmail}
      action="?"
      method="POST"
    >
      <label htmlFor="name">Name</label>
      <input type="text" placeholder="Your name..." name="from_name" required />
      <label htmlFor="email">email</label>
      <input
        type="email"
        placeholder="Your email..."
        name="reply_to"
        required
      />
      <textarea
        placeholder="Your message..."
        height="240px"
        name="message_html"
        required
      />
      <Button backgroundColor={confirmation === 'Email sent!' ?  '#c6ff03' : 'var(--primary-blue)'} textColor={confirmation === 'Email sent!' ?  'var(--dark-gray)' : 'var(--lighter-blue)'} textButton={confirmation}/>
    </ContactFormTag>
  );
};

export default ContactForm;
