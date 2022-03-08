import React from 'react';
import { style } from './bestPost.style';

const BestPost = ({ selectedTabs }) => {
  return (
    <Wrap>
      <BestPostTitle>🏆 Best 게시글</BestPostTitle>
      <BestPosts>
        <BestPostContent>내용</BestPostContent>
        <BestPostContent>내용</BestPostContent>
        <BestPostContent>내용</BestPostContent>
      </BestPosts>
    </Wrap>
  );
};

export default BestPost;

const { Wrap, BestPostTitle, BestPosts, BestPostContent } = style;
