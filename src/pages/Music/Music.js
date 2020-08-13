import React from 'react';
import { Link } from 'react-router-dom';
import { MusicDiv, StreamButtonsDiv } from './MusicStyles';
import AlbumDescription from '../../components/AlbumDescription/AlbumDescription';
import Button from '../../components/Buttons/Button';
import { Helmet } from 'react-helmet';

const Music = () => {
  return (
    <MusicDiv>
      <Helmet>
        <title>myMusic</title>
      </Helmet>
      <h1>
        <Link to="/">goToHome > </Link> myMusic
      </h1>
      <AlbumDescription />
      <StreamButtonsDiv>
        <Link
          to={{
            pathname: 'https://open.spotify.com/artist/7Kckvhfw7lWaH6ptEuneQv',
          }}
          target="_blank"
        >
          <Button margin="0 0 15px 0" maxWidth="600px" textButton="Spotify" />
        </Link>
        <Link
          to={{
            pathname: 'https://music.apple.com/br/album/retorno/1289293524',
          }}
          target="_blank"
        >
          <Button
            margin="0 0 15px 0"
            maxWidth="600px"
            textButton="Apple Music"
          />
        </Link>
        <Link
          to={{ pathname: 'https://www.deezer.com/br/artist/10656263' }}
          target="_blank"
        >
          <Button maxWidth="600px" textButton="Deezer" />
        </Link>
      </StreamButtonsDiv>
    </MusicDiv>
  );
};

export default Music;
