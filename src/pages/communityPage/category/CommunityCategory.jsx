// import Avatar from 'antd/lib/avatar/avatar';
import React, { useEffect, useState } from 'react';
import BestPost from '../../../components/bestPost/BestPost';
import CommunityPost from '../../../components/communityPost/CommunityPost';
import { style } from './CommunityCategory.style';
import * as api from '../../../service/api';

const CommunityCategory = ({ selectedTabs }) => {
  const [PostData, setPostData] = useState([]);

  async function getPost() {
    try {
      const response = await api.getCommunityPost(selectedTabs);
      setPostData(response.data.content);
      console.log(response);
    } catch (e) {
      throw new Error('failed getPost');
    }
  }

  useEffect(() => {
    console.log(selectedTabs);
    getPost(selectedTabs);
  }, [selectedTabs]);

  return (
    <PostWrap>
      <Title>👀 전체</Title>
      <BestPost selectedTabs={selectedTabs} />
      {PostData > 0 &&
        PostData.map((post) => (
          <CommunityPost selectedTabs={selectedTabs} post={post} />
        ))}
    </PostWrap>
  );
};

export default CommunityCategory;
const { PostWrap, Title } = style;
