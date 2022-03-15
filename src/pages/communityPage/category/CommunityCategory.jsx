// import Avatar from 'antd/lib/avatar/avatar';
import React, { useEffect, useState } from 'react';
import BestPost from '../../../components/bestPost/BestPost';
import CommunityPost from '../../../components/communityPost/CommunityPost';
import { style } from './CommunityCategory.style';
import * as api from '../../../service/api';

const CommunityCategory = ({ selectedTabs }) => {
  const [PostData, setPostData] = useState([]);
  const [categoryType, setCategoryType] = useState('👀 전체');

  useEffect(() => {
    switch (selectedTabs) {
      case 'all':
        setCategoryType('👀 전체');
        return;
      case 'free':
        setCategoryType('👄 캠퍼수다');
        return;
      case 'picture':
        setCategoryType('🎞️ 캠핑한장');
        return;
      case 'question':
        setCategoryType('⛺ 궁금해요');
        return;
      default:
        break;
    }
  }, [selectedTabs]);

  useEffect(() => {
    console.log(selectedTabs);
    getPost(selectedTabs);
  }, [selectedTabs]);

  async function getPost() {
    try {
      const response = await api.getCommunityPost(selectedTabs);
      setPostData(response.data.content);
      console.log(response);
    } catch (e) {
      throw new Error('failed getPost');
    }
  }

  return (
    <PostWrap>
      {categoryType && <Title>{categoryType}</Title>}

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
