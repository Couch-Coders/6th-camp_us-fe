import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import ImagePreview from '../ImageUpload/ImagePreview/ImagePreview';
import ImageUpload from '../ImageUpload/ImageUpload';
import { Rate, Input } from 'antd';
import * as api from '../../Service/camps';
import ReviewsList from '../Review/ReviewsList';
import { style } from './Review.style';

const Review = ({ CampId, clickedPage }) => {
  const { TextArea } = Input;
  const [review, setReview] = useState({
    rate: null,
    content: '',
    imgUrl: '',
    imgName: '',
  });

  const [reviewData, setReviewData] = useState([]);
  const [totalElement, setTotalElement] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  async function detailReviewRequest(page) {
    const response = await api.getCampReview(CampId, page);
    console.log(response);
    setReviewData(response.content);
    setTotalElement(response.totalElements);
  }

  async function MemberReviewRequest(page) {
    const response = await api.getUserReview(page);
    console.log(response);
    setReviewData(response.content);
    setTotalElement(response.totalElements);
  }

  useEffect(() => {
    clickedPage === 'detail'
      ? detailReviewRequest(currentPage)
      : MemberReviewRequest(currentPage);
  }, [currentPage]);

  // 페이지 변경
  const changePage = (value) => {
    setCurrentPage(value - 1);
    clickedPage === 'detail'
      ? detailReviewRequest(value - 1)
      : MemberReviewRequest(value - 1);
  };

  /* 리뷰 삭제 */
  async function deleteTask(id) {
    const response = await api.deleteReview(id);
    console.log(response);
    // const remainingTasks = reviewData.filter((data) => id !== data.id);
    // setReviewData(remainingTasks);
  }

  // 리뷰 수정
  async function editTask(review) {
    console.log('review =', review);
    const editedTaskList = reviewData.map((data) => {
      if (review.reviewId === data.reviewId) {
        return {
          ...data,
          ...review,
        };
      }
      return data;
    });
    setReviewData(editedTaskList);

    const response = await api.changeReview(review);
    console.log(response);
  }

  // 이미지 업로드
  const setImageUpload = useCallback((file, action) => {
    if (action === 'add') {
      setReview((review) => {
        return { ...review, imgUrl: file.url, imgName: file.name };
      });
    } else {
      setReview((review) => {
        return { ...review, imgUrl: null, imgName: null };
      });
    }
  }, []);

  // 별점 수정
  const handleRateChange = (value) => {
    setReview((review) => {
      return { ...review, rate: value };
    });
  };

  // 텍스트 수정
  const handleContentChange = (e) => {
    setReview((review) => {
      return { ...review, content: e.target.value };
    });
  };

  // 리뷰 작성
  async function handleSubmit(e) {
    e.preventDefault();
    if (review.content === '') return;

    const response = await api.writeReview(CampId, review);
    setReview((review) => {
      return { ...review, rate: null, content: '', imgUrl: '', imgName: '' };
    });
    detailReviewRequest();
    console.log(response);
  }

  return (
    <Container>
      {clickedPage === 'detail' && (
        <EditForm>
          <EditTop>
            <EditLeft>
              <RateSelect>
                별점 선택
                <Rate
                  allowHalf
                  onChange={handleRateChange}
                  value={review.rate}
                />
              </RateSelect>
            </EditLeft>
            <EditRight>
              <EditButton type="submit" onClick={handleSubmit}>
                작성
              </EditButton>
            </EditRight>
          </EditTop>
          <Wrap>
            <ImageUpload setImageUpload={setImageUpload} />
            {review.imgUrl !== null && review.imgUrl !== '' && (
              <ImagePreview
                setImageUpload={setImageUpload}
                previewImg={review.imgUrl}
                previewName={review.imgName}
              />
            )}
          </Wrap>
          <TextArea
            rows={4}
            onChange={handleContentChange}
            value={review.content}
          />
        </EditForm>
      )}

      {reviewData &&
        reviewData.map((data) => (
          <ReviewsList
            reviewData={data}
            key={data.reviewId}
            deleteTask={deleteTask}
            editTask={editTask}
            clickedPage={clickedPage}
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
    </Container>
  );
};

export default Review;

const {
  Container,
  EditForm,
  EditTop,
  EditLeft,
  EditRight,
  RateSelect,
  EditButton,
  Wrap,
  PaginationContent,
} = style;