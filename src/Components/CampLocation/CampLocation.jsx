import React from 'react';
import { style } from './CampLocation.style';

const CampLocation = () => {
  return (
    <>
      <Title>찾아오시는 길</Title>
      <Map>지도</Map>
    </>
  );
};

export default CampLocation;

const { Title, Map } = style;
