import React from 'react';
import { ContactFormTag } from './ContactFormStyles';
import Button from '../../Buttons/Button';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha"


const ContactForm = () => {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactFormTag id="ContactForm" onSubmit={sendEmail} >
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
      <ReCAPTCHA sitekey="6Lca974ZAAAAAJtTg7_CoK-eA9VXralvjIlb2-Tv"/>
      <Button margin="20px 0 60px 0" textButton="sendMessage" />
    </ContactFormTag>
  );
};

export default ContactForm;
