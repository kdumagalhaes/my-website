import React from 'react';
import { ContactMeDiv, FlexDiv } from './ContactMeStyles';
import { Icon } from '@iconify/react';
import emailIcon from '@iconify/icons-zmdi/email';
import ContactForm from './ContactForm/ContactForm'


const ContactMe = () => {
    return (
        <ContactMeDiv id="contact">
            <FlexDiv>
                <h2><Icon icon={emailIcon} width="15" /> contactMe</h2>
                <ContactForm/>
            </FlexDiv>
        </ContactMeDiv>
    )
}

export default ContactMe