import React from 'react';
import { AlbumDescriptionDiv } from './AlbumDescriptionStyles';
import RetornoImg from '../../assets/kadu-magalhaes-retorno.jpg';

const AlbumDescription = () => {
  return (
    <AlbumDescriptionDiv>
      <img src={RetornoImg} alt="retorno album by kadu magalhaes" />
      <p>
        O cantor e compositor Kadu Magalhães divulga o trabalho “Retorno”. EP de
        estreia, o registro mostra sete faixas inspiradas em lembranças da
        infância, cotidiano e relacionamento, guiadas pela sonoridade pop e
        acústica. O lançamento é pelo selo Sagitta Records e tem a produção de
        Julio Alecrim (Arquitetura Musical).
      </p>
    </AlbumDescriptionDiv>
  );
};

export default AlbumDescription;
