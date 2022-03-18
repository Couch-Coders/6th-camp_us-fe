import React, { useContext, useState } from 'react';
import CommentList from './commentList/CommentList';
import { UserContext } from '../../../../components/auth/AuthProvider';
import { NotCommentNotification } from '../../../../components/notice/Notice';
import { style } from './PostComments.style';
import { Input, message } from 'antd';
import * as api from '../../../../service/api';
import ReviewSkeleton from '../../../../components/skeleton/reviewSkeleton/ReviewSkeleton';

export default function PostComments() {
  const { user } = useContext(UserContext);
  const { TextArea } = Input;
  const [comment, setComment] = useState('');
  const [commentData, setCommentData] = useState([]);
  const [totalElement, setTotalElement] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  /* useEffect(() => {
        commentsRequest(currentPage)
      }, [currentPage]);
    
      // 댓글 조회
      async function commentsRequest(page) {
        setIsLoading(true);
        const response = await api.getCampReview(CampId, page);
        setCommentData(response.content);
        setTotalElement(response.totalElements);
        setIsLoading(false);
      } */

  // 리뷰 작성
  async function handleSubmit(e) {
    e.preventDefault();
    if (!user) {
      message.warning('로그인한 유저만 리뷰를 작성 할 수 있습니다.');
      return;
    }

    /* if (review.content.length < 5) {
      message.warning('5글자 이상의 리뷰만 등록이 가능합니다.');
      buttonRef.current.click();
      return;
    }
    await api.writeReview(CampId, review);
    setComment();
    commentsRequest(); */
  }

  // 텍스트 수정
  const handleContentChange = (e) => {
    setComment(e.target.value);
  };

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
          /* value="댓글" */
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
          <CommentList
          /* commentData={data}
          key={data.reviewId}
          deleteTask={deleteTask}
          editTask={editTask}
          clickedPage={clickedPage} */
          />
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
