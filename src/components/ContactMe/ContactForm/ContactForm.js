import React from 'react'
import {ContactFormTag} from './ContactFormStyles'
import Button from '../../Buttons/Button'

const ContactForm = () => {
    return (
        <ContactFormTag>
            <input type="text" placeholder="Your name..."/>
            <input type="email" placeholder="Your email..."/>
            <textarea placeholder="Your message..." height="240px"/>
            <Button textButton="sendMessage"/>
        </ContactFormTag>
    )
}

export default ContactForm