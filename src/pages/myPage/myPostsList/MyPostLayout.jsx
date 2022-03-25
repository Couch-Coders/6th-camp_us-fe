import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../components/auth/AuthProvider';
import * as api from '../../../service/api';
import MyPosts from './MyPosts';
import { Pagination } from 'antd';
import { NotMyPostsNotification } from '../../../components/notice/Notice';
import styled from 'styled-components';
import CommunityPostSkeleton from '../../../components/skeleton/communityPostSkeleton/CommunityPostSkeleton';

export default function MyPostLayout() {
  const { user } = useContext(UserContext);
  const [postData, setPostData] = useState([]);
  const [totalElement, setTotalElement] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    MyPostsRequest(currentPage);
  }, [user, currentPage]);

  // 나의 게시글 리스트 조회
  async function MyPostsRequest(page) {
    setIsLoading(true);
    const response = await api.getMyPost(page);
    setPostData(response.content);
    setTotalElement(response.totalElements);
    setIsLoading(false);
  }

  /* 게시글 삭제 */
  async function deletePost(id) {
    await api.deleteCommunityPost(id);
    MyPostsRequest(currentPage);
  }

  // 게시글 수정
  async function editPost(comment) {
    const editedPostList = postData.map((data) => {
      if (postData.commentId === data.commentId) {
        return {
          ...data,
          ...comment,
        };
      }
      return data;
    });
    setPostData(editedPostList);
    await api.changeCommunityPost(comment);
    MyPostsRequest(currentPage);
  }

  // 페이지 변경
  const changePage = (value) => {
    setCurrentPage(value - 1);
  };

  return (
    <>
      {!isLoading && postData.length === 0 ? (
        <NotMyPostsNotification />
      ) : isLoading ? (
        <>
          <CommunityPostSkeleton />
          <CommunityPostSkeleton />
          <CommunityPostSkeleton />
        </>
      ) : (
        <>
          {postData.map((post) => (
            <MyPosts
              key={post.postId}
              postData={post}
              deletePost={deletePost}
              editPost={editPost}
            />
          ))}
          <PaginationContent
            current={currentPage + 1}
            total={totalElement}
            pageSize={5}
            onChange={(value) => {
              changePage(value);
            }}
          />
        </>
      )}
    </>
  );
}

const PaginationContent = styled(Pagination)`
  text-align: center;
  .ant-select-selector {
    display: none;
  }
`;
