import React from 'react';
import BestPost from '../../../components/bestPost/BestPost';
import CommunityPost from '../../../components/communityPost/CommunityPost';
import { style } from './CommunityCategory.style';

export default function CommunityQnA() {
  return (
    <PostWrap>
      <Title>⛺ 궁금해요</Title>
      <BestPost />
      <CommunityPost />
    </PostWrap>
  );
}

const { PostWrap, Title } = style;
