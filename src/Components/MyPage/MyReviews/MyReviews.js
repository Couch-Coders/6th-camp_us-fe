import React, { useState, useCallback, useContext } from 'react';
import { UserContext } from '../../auth/AuthProvider';
import { auth } from '../../../Service/firebaseAuth';
import { Rate, Input } from 'antd';
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
  const [isEditing, setEditing] = useState(false);
  const [newRate, setNewRate] = useState(props.rate);
  const [newImg, setNewImg] = useState(props.imgUrl);
  const [newContent, setNewContent] = useState(props.content);

  function handleChange(e) {
    //setNewName(e.target.value);
  }

  const handleRateChange = (value) => {
    setNewRate(value);
  };
  const handleContentChange = (e) => {
    setNewContent(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newRate, newImg, newContent);
    setNewRate('');
    setNewImg('');
    setNewContent('');
    setEditing(false);
  }
  function handleCancle(e) {
    e.preventDefault();
    setNewImg('');
    setEditing(false);
  }

  const setImageUpload = useCallback((file, action) => {
    if (action === 'add') {
      setNewImg(file);
    } else {
      setNewImg(null);
    }
  }, []);

  const editingTemplate = (
    <EditForm key={props.id}>
      <CampNameLoad>{props.camp_name}</CampNameLoad>
      <EditTop>
        <EditLeft>
          <RateSelect>
            별점 선택
            <Rate allowHalf onChange={handleRateChange} value={newRate} />
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
        {newImg !== null && newImg !== '' && (
          <ImagePreview setImageUpload={setImageUpload} previewImg={newImg} />
        )}
      </Container>
      <TextArea rows={4} onChange={handleContentChange} value={newContent} />
    </EditForm>
  );

  /* 리뷰 삭제 */
  const [show, setShow] = useState(false);
  const viewTemplate = (
    <LikeReview key={props.id}>
      <ReviewThumbnail>
        <ReviewThumb src={props.imgUrl === '' ? Image : props.imgUrl} />
      </ReviewThumbnail>
      <ReviewInfo>
        <TopArea>
          <div>
            <CampName to={`/detail/${props.camp_id}`}>
              {props.camp_name}
              <Rate allowHalf disabled defaultValue={props.rate} />
            </CampName>
          </div>
          <HandleContent>
            <HandleReview onClick={() => setEditing(true)}>수정</HandleReview>
            <HandleReview onClick={() => setShow(true)}>삭제</HandleReview>
          </HandleContent>
          {show && <DeleteModal onClose={setShow} contentId={props.id} />}
        </TopArea>
        <Date>{props.lastModifiedDate}</Date>
        <BottomArea to={`/detail/${props.camp_id}`}>{props.content}</BottomArea>
      </ReviewInfo>
    </LikeReview>
  );

  return <List>{isEditing ? editingTemplate : viewTemplate}</List>;
}
