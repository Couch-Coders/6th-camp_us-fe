import React from 'react';
import LikeCamp from './LikeCamp';
import { LikeList } from './LikesList.styles';

export default function LikesList({ camp, request }) {
  return (
    <LikeList>
      {camp.map((camp) => (
        <LikeCamp camp={camp} key={camp.campId} request={request} />
      ))}
    </LikeList>
  );
}
