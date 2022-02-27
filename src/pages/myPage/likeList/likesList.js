import React from 'react';
import styled from 'styled-components';
import LikeCamp from './likeCamp/LikeCamp';

export default function LikesList({ camp, LikeListRequest }) {
  return (
    <LikeList>
      {camp.map((camp) => (
        <LikeCamp
          camp={camp}
          key={camp.campId}
          LikeListRequest={LikeListRequest}
        />
      ))}
    </LikeList>
  );
}

const LikeList = styled.div`
  width: 100%;

  @media screen and (max-width: 760px) {
    display: block;
  }
`;
