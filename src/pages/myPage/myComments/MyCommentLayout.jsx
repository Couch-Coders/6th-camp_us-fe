import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../components/auth/AuthProvider';
import * as api from '../../../service/api';
import MyComments from './MyComments';
import { Pagination } from 'antd';
import { NotMyCommentsNotification } from '../../../components/notice/Notice';
import styled from 'styled-components';
import CommunityCommentSkeleton from '../../../components/skeleton/communityCommentSkeleton/CommunityCommentSkeleton';

export default function MyCommentLayout() {
  const { user } = useContext(UserContext);
  const [commentdata, setCommentdata] = useState([]);
  const [totalElement, setTotalElement] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    MyCommentsRequest(currentPage);
  }, [user, currentPage]);

  // 나의 댓글 리스트 조회
  async function MyCommentsRequest(page) {
    setIsLoading(true);
    const response = await api.getMyComment(page);
    setCommentdata(response.content);
    setTotalElement(response.totalElements);
    setIsLoading(false);
  }

  /* 댓글 삭제 */
  async function deleteComment(id) {
    await api.deleteCommunityComment(id);
    MyCommentsRequest(currentPage);
  }

  // 댓글 수정
  async function editComment(comment) {
    const editedCommentList = commentdata.map((data) => {
      if (commentdata.commentId === data.commentId) {
        return {
          ...data,
          ...comment,
        };
      }
      return data;
    });
    setCommentdata(editedCommentList);
    await api.changeCommunityComment(comment);
    MyCommentsRequest(currentPage);
  }

  // 페이지 변경
  const changePage = (value) => {
    setCurrentPage(value - 1);
  };

  return (
    <>
      {!isLoading && commentdata.length === 0 ? (
        <NotMyCommentsNotification />
      ) : isLoading ? (
        <>
          <CommunityCommentSkeleton />
          <CommunityCommentSkeleton />
          <CommunityCommentSkeleton />
        </>
      ) : (
        <>
          {commentdata.map((commentdata) => (
            <MyComments
              key={commentdata.commentId}
              commentData={commentdata}
              MyCommentsRequest={MyCommentsRequest}
              deleteComment={deleteComment}
              editComment={editComment}
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
