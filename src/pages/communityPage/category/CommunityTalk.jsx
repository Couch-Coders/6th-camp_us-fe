import React from 'react';
import BestPost from '../../../components/bestPost/BestPost';
import CommunityPost from '../../../components/communityPost/CommunityPost';
import { style } from './CommunityCategory.style';

export default function CommunityTalk({ selectedTabs }) {
  return (
    <PostWrap>
      <Title>👄 캠퍼수다</Title>
      <BestPost selectedTabs={selectedTabs} />
      <CommunityPost selectedTabs={selectedTabs} />
    </PostWrap>
  );
}

const { PostWrap, Title } = style;
