import React from 'react';
import { ContactMeDiv } from './ContactMeStyles';
import { Icon } from '@iconify/react';
import emailIcon from '@iconify/icons-zmdi/email';
import ContactForm from './ContactForm/ContactForm'


const ContactMe = () => {
    return (
        <ContactMeDiv id="contact">
            <div>
                <h2><Icon icon={emailIcon} width="15" /> contactMe</h2>
                <ContactForm/>
            </div>
        </ContactMeDiv>
    )
}

export default ContactMe