import React, { useState, useCallback, useContext } from 'react';
import { UserContext } from '../../auth/AuthProvider';
import { auth } from '../../../Service/firebaseAuth';
import { Rate, Input } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import ImagePreview from '../../ImageUpload/ImagePreview/ImagePreview';
import ImageUpload from '../../ImageUpload/ImageUpload';
import DeleteModal from '../../Modal/DeleteModal';
import Image from '../../../Assets/Images/default.png';
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
} from './MyReviews.styles';

export default function MyReviews(props) {
  const { user } = useContext(UserContext);
  // console.log('data = ', data);
  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  /* 리뷰 수정 */
  const { TextArea } = Input;
  const [review, setReview] = useState({
    id: props.id,
    camp_id: props.camp_id,
    camp_name: props.camp_name,
    author: props.author,
    createdDate: props.createdDate,
    lastModifiedDate: props.lastModifiedDate,
    likes: props.likes,
    rate: props.rate,
    content: props.content,
    image: props.image,
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
    props.editTask(review);
    setEditing(false);
  }
  function handleCancle(e) {
    e.preventDefault();
    setEditing(false);
    setReview((review) => {
      return {
        ...review,
        id: props.id,
        camp_id: props.camp_id,
        camp_name: props.camp_name,
        author: props.author,
        createdDate: props.createdDate,
        lastModifiedDate: props.lastModifiedDate,
        likes: props.likes,
        rate: props.rate,
        content: props.content,
        image: props.image,
      };
    });
  }

  const setImageUpload = useCallback((file, action) => {
    if (action === 'add') {
      setReview((review) => {
        return { ...review, image: file };
      });
    } else {
      setReview((review) => {
        return { ...review, image: null };
      });
    }
  }, []);

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
        {review.image !== null && review.image !== '' && (
          <ImagePreview
            setImageUpload={setImageUpload}
            previewImg={review.image}
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

  /* 리뷰 삭제 */
  const [show, setShow] = useState(false);
  const viewTemplate = (
    <LikeReview key={review.id}>
      <ReviewThumbnail>
        <ReviewThumb
          src={
            review.image === '' || review.image === null
              ? Image
              : review.image.url
          }
        />
      </ReviewThumbnail>
      <ReviewInfo>
        <TopArea>
          <div>
            <CampName to={`/detail/${review.camp_id}`}>
              {review.camp_name}
              <Rate allowHalf disabled defaultValue={review.rate} />
            </CampName>
          </div>
          <HandleContent>
            <HandleReview onClick={() => setEditing(true)}>수정</HandleReview>
            <HandleReview onClick={() => setShow(true)}>삭제</HandleReview>
          </HandleContent>
          {show && <DeleteModal onClose={setShow} contentId={review.id} />}
        </TopArea>
        <Date>{review.lastModifiedDate}</Date>
        <BottomArea>
          <Content to={`/detail/${review.camp_id}`}>{review.content}</Content>
          <ReviewLike>
            <LikeOutlined />
            {review.likes}
          </ReviewLike>
        </BottomArea>
      </ReviewInfo>
    </LikeReview>
  );

  return <List>{isEditing ? editingTemplate : viewTemplate}</List>;
}
