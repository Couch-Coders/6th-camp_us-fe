import React, { useContext, useState, useEffect } from 'react';
import CommentList from './commentList/CommentList';
import { UserContext } from '../../../../components/auth/AuthProvider';
import { NotCommentNotification } from '../../../../components/notice/Notice';
import { style } from './PostComments.style';
import { Input, message } from 'antd';
import * as api from '../../../../service/api';
import ReviewSkeleton from '../../../../components/skeleton/reviewSkeleton/ReviewSkeleton';

export default function PostComments({ postId, postData }) {
  const { user } = useContext(UserContext);
  const { TextArea } = Input;
  const [comment, setComment] = useState({ content: '' });
  const [commentData, setCommentData] = useState([]);
  const [totalElement, setTotalElement] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    commentsRequest(currentPage);
  }, [currentPage]);

  // 댓글 입력
  const handleContentChange = (e) => {
    setComment((comment) => {
      return { ...comment, content: e.target.value };
    });
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
    await api.writeCommunityComment(postId, comment.content);
    setComment((comment) => {
      return { ...comment, content: '' };
    });
    commentsRequest();
  }

  // 댓글 조회
  async function commentsRequest(page) {
    setIsLoading(true);
    const response = await api.getCommunityComment(postId, page);
    console.log('response', response);
    setCommentData(response.content);
    setTotalElement(response.totalElements);
    setIsLoading(false);
  }

  // 댓글 삭제
  async function deleteTask(id) {
    await api.deleteCommunityComment(id);
    commentsRequest(currentPage);
  }

  // 댓글 수정
  async function editTask(comment) {
    const editedTaskList = commentData.map((data) => {
      if (comment.commentId === data.commentId) {
        return {
          ...data,
          ...comment,
        };
      }
      return data;
    });
    console.log('editedTaskList', editedTaskList);
    setCommentData(editedTaskList);
    await api.changeCommunityComment(comment);
  }

  // 페이지 변경
  const changePage = (value) => {
    setCurrentPage(value - 1);
    commentsRequest(value - 1);
    console.log('value', value);
  };

  return (
    <Container>
      <EditForm>
        <TextArea
          rows={4}
          onChange={handleContentChange}
          placeholder="댓글을 작성해 주세요."
          value={comment.content}
        />
        <EditButton type="submit" onClick={handleSubmit}>
          작성
        </EditButton>
      </EditForm>
      {!isLoading && commentData.length === 0 ? (
        <NotCommentNotification />
      ) : isLoading ? (
        <>
          <ReviewSkeleton />
          <ReviewSkeleton />
        </>
      ) : (
        <>
          {commentData.map((data) => (
            <CommentList
              commentData={data}
              postData={postData}
              key={data.commentId}
              deleteTask={deleteTask}
              editTask={editTask}
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
    </Container>
  );
}
const { Container, EditForm, EditButton, PaginationContent } = style;
