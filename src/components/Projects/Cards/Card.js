import React, {useEffect, useState} from 'react';
import { CardTag } from './CardStyles';

const Card = ({ repo }) => {

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {

    fetch(`https://api.github.com/repos/kdumagalhaes/${repo}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [repo]);

  const setData = ({ name, html_url, description }) => {
    setName(name);
    setUrl(html_url);
    setDescription(description);
  };

  return (
    <CardTag href={url} target="_blank" >
      <h3>{name}</h3>
      <p>
        {description}
      </p>
    </CardTag>
  );
};

export default Card;
