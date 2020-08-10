import React from 'react';
import { SocialLinksUl } from './SocialLinksStyles';
import SocialIcon from './SocialIcons/SocialIcon';
import { Icon } from '@iconify/react';
import githubBox from '@iconify/icons-zmdi/github-box';
import twitterBox from '@iconify/icons-zmdi/twitter-box';
import linkedinBox from '@iconify/icons-zmdi/linkedin-box';
import instagramIcon from '@iconify/icons-zmdi/instagram';


const SocialLinks = () => {
  return (
    <SocialLinksUl>
      <SocialIcon url="https://github.com/kdumagalhaes/">
        <Icon icon={githubBox} width="30" />
      </SocialIcon>
      <SocialIcon url="https://twitter.com/KduMagalhaes">
        <Icon icon={twitterBox} width="30" />
      </SocialIcon>
      <SocialIcon url="https://www.linkedin.com/in/kdumagalhaes/">
        <Icon icon={linkedinBox} width="30" />
      </SocialIcon>
      <SocialIcon url="https://www.instagram.com/kdumagalhaes/">
        <Icon icon={instagramIcon} width="30" />
      </SocialIcon>
    </SocialLinksUl>
  );
};

export default SocialLinks;
