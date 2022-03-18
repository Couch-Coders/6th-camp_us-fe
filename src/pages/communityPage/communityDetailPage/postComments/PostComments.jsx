import React, { useContext, useState, useEffect } from 'react';
import CommentList from './commentList/CommentList';
import { UserContext } from '../../../../components/auth/AuthProvider';
import { NotCommentNotification } from '../../../../components/notice/Notice';
import { style } from './PostComments.style';
import { Input, message } from 'antd';
import * as api from '../../../../service/api';
import ReviewSkeleton from '../../../../components/skeleton/reviewSkeleton/ReviewSkeleton';

export default function PostComments({ postId }) {
  const { user } = useContext(UserContext);
  const { TextArea } = Input;
  const [comment, setComment] = useState('');
  const [commentData, setCommentData] = useState([]);
  const [totalElement, setTotalElement] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    commentsRequest(currentPage);
  }, [currentPage]);

  // 댓글 입력
  const handleContentChange = (e) => {
    setComment(e.target.value);
  };

  // 댓글 작성
  async function handleSubmit(e) {
    e.preventDefault();
    if (!user) {
      message.warning('로그인한 유저만 댓글을 작성 할 수 있습니다.');
      return;
    }

    if (comment.length < 1) {
      message.warning('최소 1글자 이상 입력해야 등록이 가능합니다.');
      //buttonRef.current.click();
      return;
    }
    await api.writeCommunityComment(postId, comment);
    setComment();
    commentsRequest();
  }

  // 댓글 조회
  async function commentsRequest() {
    setIsLoading(true);
    const response = await api.getCommunityComment(postId);
    console.log('response', response);
    setCommentData(response.content);
    setTotalElement(response.totalElements);
    setIsLoading(false);
  }

  // 페이지 변경
  const changePage = (value) => {
    setCurrentPage(value - 1);
    //commentsRequest(value - 1);
  };

  return (
    <Container>
      <EditForm>
        <TextArea
          rows={4}
          onChange={handleContentChange}
          placeholder="댓글을 작성해 주세요."
          value={comment}
        />
        <EditButton type="submit" onClick={handleSubmit}>
          작성
        </EditButton>
      </EditForm>
      {!isLoading && commentData.length !== 0 ? (
        <NotCommentNotification />
      ) : isLoading ? (
        <>
          <ReviewSkeleton />
          <ReviewSkeleton />
        </>
      ) : (
        <>
          {/* {commentData.map((data) => (
            <CommentList
              data={data}
              key={data.id}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))} */}
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
    </Container>
  );
}
const { Container, EditForm, EditButton, PaginationContent } = style;
