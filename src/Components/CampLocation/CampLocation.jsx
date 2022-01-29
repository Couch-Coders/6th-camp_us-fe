import React from 'react';
import styled from 'styled-components';

const CampLocation = (props) => {
  return (
    <>
      <Title>찾아오시는 길</Title>
      <Map>지도</Map>
    </>
  );
};

export default CampLocation;

const Title = styled.title`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  margin-bottom: 6px;
`;

const Map = styled.div`
  width: 509.76px;
  height: 355.65px;
  border: 1px solid #000000;
`;
