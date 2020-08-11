import React from 'react'
import {ContactFormTag} from './ContactFormStyles'

const ContactForm = () => {
    return (
        <ContactFormTag>
            <input type="text" placeholder="Your name..."/>
            <input type="email" placeholder="Your email..."/>
            <input className="message" type="text" placeholder="Your email..."/>

        </ContactFormTag>
    )
}

export default ContactForm