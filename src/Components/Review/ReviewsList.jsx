import React, { useState, useCallback, useContext, useRef } from 'react';
import { Rate, Input, message, Button } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import ImagePreview from '../ImageUpload/ImagePreview/ImagePreview';
import ImageUpload from '../ImageUpload/ImageUpload';
import Modal from '../Modal/Modal';
import Image from '../../Assets/Images/default.png';
import * as API from '../../Service/camps';
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
  Nickname,
  ReviewLike,
} from './ReviewsList.styles';
import useGetDate from '../../Hooks/useGetDate';
import { UserContext } from '../auth/AuthProvider';

const ReviewsList = ({ reviewData, deleteTask, editTask, clickedPage }) => {
  const { user } = useContext(UserContext);
  const chargeTime = useGetDate(reviewData.lastModifiedDate);
  const buttonRef = useRef();

  const { TextArea } = Input;
  const [review, setReview] = useState({
    reviewId: reviewData.reviewId,
    likeCnt: reviewData.likeCnt,
    nickname: reviewData.nickname,
    rate: reviewData.rate,
    content: reviewData.content,
    imgUrl: reviewData.imgUrl,
    imgName: '',
    lastModifiedDate: reviewData.lastModifiedDate,
    liked: reviewData.liked,
  });
  console.log(review);
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
        lastModifiedDate: reviewData.lastModifiedDate,
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

  const likeChange = async () => {
    if (!user) {
      message.warning('로그인한 유저만 리뷰에 좋아요 할 수 있습니다.');
      return;
    }

    if (reviewData.memberId === user.data.memberId) return;

    await API.changeReviewLike(reviewData.reviewId);
    const reviewCnt = review.liked ? review.likeCnt - 1 : review.likeCnt + 1;

    setReview((review) => {
      return { ...review, liked: !review.liked, likeCnt: reviewCnt };
    });
  };

  // 리뷰 수정
  const editingTemplate = (
    <EditForm>
      {clickedPage === 'detail' ? (
        <CampNameLoad>{review.nickname}</CampNameLoad>
      ) : (
        <CampNameLoad>{review.facltNm}</CampNameLoad>
      )}
      <EditTop>
        <EditLeft>
          <RateSelect>
            별점 선택
            <Rate onChange={handleRateChange} value={review.rate} />
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
    <LikeReview>
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
          <Nickname>
            {clickedPage === 'detail' ? (
              <div>
                {review.nickname}
                <Rate disabled defaultValue={review.rate} />
              </div>
            ) : (
              <CampName to={`/detail?id=${reviewData.campId}`}>
                {review.facltNm}
                <Rate disabled defaultValue={review.rate} />
              </CampName>
            )}
          </Nickname>
          {user && reviewData.memberId === user.data.memberId && (
            <HandleContent>
              <HandleReview onClick={() => setEditing(true)}>수정</HandleReview>
              <HandleReview onClick={() => setShow(true)}>삭제</HandleReview>
            </HandleContent>
          )}
          {show && (
            <Modal
              onClose={setShow}
              reviewId={review.reviewId}
              deleteTask={deleteTask}
              role="deleteReview"
            />
          )}
        </TopArea>
        <Date>{chargeTime}</Date>
        <BottomArea>
          <Content to={`/detail?id=${reviewData.campId}`}>
            {review.content}
          </Content>
          <ReviewLike
            liked={review.liked}
            onClick={likeChange}
            isMyReview={
              user && reviewData.memberId === user.data.memberId ? true : false
            }
          >
            <LikeOutlined />
            {review.likeCnt}
          </ReviewLike>
        </BottomArea>
      </ReviewInfo>
    </LikeReview>
  );

  return <List>{isEditing ? editingTemplate : viewTemplate}</List>;
};

export default React.memo(ReviewsList);
