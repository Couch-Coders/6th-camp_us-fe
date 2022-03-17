import React, { useEffect, useState } from 'react';
import BestPost from '../../../components/bestPost/BestPost';
import CommunityPost from '../../../components/communityPost/CommunityPost';
import { style } from './CommunityCategory.style';
import * as api from '../../../service/api';

const CommunityCategory = ({ selectedTabs }) => {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
        setCategoryType('👀 전체');
    }
  }, [selectedTabs]);

  useEffect(() => {
    getPost(selectedTabs);
  }, [selectedTabs]);

  async function getPost() {
    try {
      setIsLoading(true);
      const response = await api.getCommunityPost(selectedTabs);
      setPostData(response.data.content);
      setIsLoading(false);
    } catch (e) {
      throw new Error('failed getPost');
    }
  }
  console.log(postData);

  return (
    <PostWrap>
      {categoryType && <Title>{categoryType}</Title>}

      <BestPost selectedTabs={selectedTabs} />
      {!isLoading &&
        postData.map((post) => (
          <CommunityPost categoryType={categoryType} post={post} />
        ))}
    </PostWrap>
  );
};

export default CommunityCategory;
const { PostWrap, Title } = style;
