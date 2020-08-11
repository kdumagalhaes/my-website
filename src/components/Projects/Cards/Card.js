import React, {useEffect, useState} from 'react';
import { CardTag } from './CardStyles';
import { Icon } from '@iconify/react';
import linkIcon from '@iconify/icons-zmdi/link';


const Card = ({ repo }) => {

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');


  useEffect(() => {

    fetch(`https://api.github.com/repos/kdumagalhaes/${repo}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [repo]);

  const setData = ({ name, html_url, description, language }) => {
    setName(name);
    setUrl(html_url);
    setDescription(description);
    setLanguage(language)
  };

  return (
    <CardTag href={url} target="_blank" >
      <h3>{name}</h3>
      <p>
        {description}
      </p>
      <div>
        <span>{language}</span>
        <Icon icon={linkIcon} color="#0A84FF" width="20" />
      </div>
    </CardTag>
  );
};

export default Card;
