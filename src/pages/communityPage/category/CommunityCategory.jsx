import React, { useCallback, useEffect, useState } from 'react';
import BestPost from '../../../components/bestPost/BestPost';
import CommunityPost from '../../../components/communityPost/CommunityPost';
import CommunityPostSkeleton from '../../../components/skeleton/communityPostSkeleton/CommunityPostSkeleton';
import { style } from './CommunityCategory.style';
import * as api from '../../../service/api';

const CommunityCategory = ({ selectedTabs }) => {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalElement, setTotalElement] = useState();
  const [currentPage, setCurrentPage] = useState(0);
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
    getPost(selectedTabs, currentPage);
  }, [selectedTabs]);

  async function getPost(page) {
    try {
      setIsLoading(true);
      const response = await api.getCommunityPost(selectedTabs, page);
      const { data } = response;
      setPostData(data.content);
      setTotalElement(data.totalElements);
      setIsLoading(false);
    } catch (e) {
      throw new Error('failed getPost');
    }
  }

  const deletePost = useCallback(async (id) => {
    try {
      await api.deleteCommunityPost(id);
      setPostData((postData) => {
        return postData.filter((post) => post.postId !== id);
      });
      getPost(0);
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  const changePage = (value) => {
    setCurrentPage(value - 1);
    getPost(value - 1);
  };

  return (
    <PostWrap>
      {categoryType && <Title>{categoryType}</Title>}
      <BestPost selectedTabs={selectedTabs} />
      {!isLoading ? (
        postData.map((post) => (
          <CommunityPost
            key={post.postId}
            categoryType={categoryType}
            post={post}
            deletePost={deletePost}
          />
        ))
      ) : (
        <CommunityPostSkeleton />
      )}
      <PaginationContent
        current={currentPage + 1}
        total={totalElement}
        pageSize={5}
        onChange={(value) => {
          changePage(value);
        }}
      />
    </PostWrap>
  );
};

export default CommunityCategory;
const { PostWrap, Title, PaginationContent } = style;
