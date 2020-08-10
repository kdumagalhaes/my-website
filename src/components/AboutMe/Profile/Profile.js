import React from 'react'
import {ProfileDiv} from './ProfileStyles'
import NameAndRole from './NameAndRole/NameAndRole'
import SocialLinks from './SocialLinks/SocialLinks'

const Profile = () => {
    return (
        <ProfileDiv>
            <NameAndRole/>
            <SocialLinks />
        </ProfileDiv>
    )
}

export default Profile