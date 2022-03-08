import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import CommunityPost from '../../../components/communityPost/CommunityPost';
import { style } from './CommunityCategory.style';

const CommunityAllPost = () => {
  return (
    <PostWrap>
      <Title>👀 전체</Title>
      <BestPost>
        <BestPostTitle>🏆 Best 게시글</BestPostTitle>
        <BestPosts>
          <BestPostContent>내용</BestPostContent>
          <BestPostContent>내용</BestPostContent>
          <BestPostContent>내용</BestPostContent>
        </BestPosts>
      </BestPost>
      <CommunityPost />
    </PostWrap>
  );
};

export default CommunityAllPost;
const { PostWrap, Title, BestPost, BestPostTitle, BestPosts, BestPostContent } =
  style;
