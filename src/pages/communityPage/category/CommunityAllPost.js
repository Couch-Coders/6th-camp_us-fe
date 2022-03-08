import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import BestPost from '../../../components/bestPost/BestPost';
import CommunityPost from '../../../components/communityPost/CommunityPost';
import { style } from './CommunityCategory.style';

const CommunityAllPost = () => {
  return (
    <PostWrap>
      <Title>👀 전체</Title>
      <BestPost />
      <CommunityPost />
    </PostWrap>
  );
};

export default CommunityAllPost;
const { PostWrap, Title } = style;
