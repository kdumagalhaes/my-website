import React from 'react'
import {SocialIconLi} from './SocialIconStyles'




const SocialIcon = ({url, children}) => {
    return (
        <SocialIconLi>
            <a href={url} target="_blank" rel="noopener noreferrer">{children}</a>
        </SocialIconLi>
    )
}

export default SocialIcon