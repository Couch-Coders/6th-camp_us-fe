import React, { useState, useCallback } from 'react';
import { Rate, Input } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import ImagePreview from '../ImageUpload/ImagePreview/ImagePreview';
import ImageUpload from '../ImageUpload/ImageUpload';
import DeleteModal from '../Modal/DeleteModal';
import Image from '../../Assets/Images/default.png';
import {
  List,
  EditForm,
  CampNameLoad,
  EditTop,
  EditLeft,
  EditRight,
  EditButton,
  CancleButton,
  Container,
  RateSelect,
  LikeReview,
  ReviewThumbnail,
  ReviewThumb,
  ReviewInfo,
  TopArea,
  HandleContent,
  HandleReview,
  CampName,
  Date,
  BottomArea,
  Content,
  ReviewLike,
} from './ReviewsList.styles';

export default function ReviewsList({ reviewData, deleteTask, editTask }) {
  console.log('리렌더');
  /* 리뷰 수정 */
  const { TextArea } = Input;
  const [review, setReview] = useState({
    reviewId: reviewData.reviewId,
    likeCnt: reviewData.likeCnt,
    rate: reviewData.rate,
    content: reviewData.content,
    imgUrl: reviewData.imgUrl,
    imgName: '',
  });

  const [isEditing, setEditing] = useState(false);

  const handleRateChange = (value) => {
    setReview((review) => {
      return { ...review, rate: value };
    });
  };
  const handleContentChange = (e) => {
    setReview((review) => {
      return { ...review, content: e.target.value };
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    editTask(review);
    setEditing(false);
  }

  function handleCancle(e) {
    e.preventDefault();
    setEditing(false);
    setReview((review) => {
      return {
        ...review,
        reviewId: reviewData.reviewId,
        likeCnt: reviewData.likeCnt,
        rate: reviewData.rate,
        content: reviewData.content,
        imgUrl: reviewData.imgUrl,
        imgName: '',
      };
    });
  }

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

  // 리뷰 수정
  const editingTemplate = (
    <EditForm key={review.id}>
      <CampNameLoad>{review.camp_name}</CampNameLoad>
      <EditTop>
        <EditLeft>
          <RateSelect>
            별점 선택
            <Rate allowHalf onChange={handleRateChange} value={review.rate} />
          </RateSelect>
        </EditLeft>
        <EditRight>
          <EditButton type="submit" onClick={handleSubmit}>
            수정완료
          </EditButton>
          <CancleButton onClick={handleCancle}>취소</CancleButton>
        </EditRight>
      </EditTop>
      <Container>
        <ImageUpload setImageUpload={setImageUpload} />
        {review.imgUrl !== null && review.imgUrl !== '' && (
          <ImagePreview
            setImageUpload={setImageUpload}
            previewImg={review.imgUrl}
            previewName={review.imgName}
          />
        )}
      </Container>
      <TextArea
        rows={4}
        onChange={handleContentChange}
        value={review.content}
      />
    </EditForm>
  );

  /* 리뷰  */
  const [show, setShow] = useState(false);
  const viewTemplate = (
    <LikeReview key={review.id}>
      <ReviewThumbnail>
        <ReviewThumb
          src={
            review.imgUrl === '' || review.imgUrl === null
              ? Image
              : review.imgUrl
          }
        />
      </ReviewThumbnail>
      <ReviewInfo>
        <TopArea>
          <div>
            <CampName to={`/detail?id=${reviewData.campId}`}>
              {review.camp_name}
              <Rate allowHalf disabled defaultValue={review.rate} />
            </CampName>
          </div>
          <HandleContent>
            <HandleReview onClick={() => setEditing(true)}>수정</HandleReview>
            <HandleReview onClick={() => setShow(true)}>삭제</HandleReview>
          </HandleContent>
          {show && (
            <DeleteModal
              onClose={setShow}
              reviewId={review.reviewId}
              deleteTask={deleteTask}
            />
          )}
        </TopArea>
        <Date>{review.lastModifiedDate}</Date>
        <BottomArea>
          <Content to={`/detail?id=${reviewData.campId}`}>
            {review.content}
          </Content>
          <ReviewLike>
            <LikeOutlined />
            {review.likeCnt}
          </ReviewLike>
        </BottomArea>
      </ReviewInfo>
    </LikeReview>
  );

  return <List>{isEditing ? editingTemplate : viewTemplate}</List>;
}
