import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../auth/AuthProvider';
import { auth } from '../../../Service/firebaseAuth';
import { Rate, Upload, message, Button, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
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
  const { TextArea } = Input;
  const [isEditing, setEditing] = useState(false);
  const [newRate, setNewRate] = useState(props.rate);
  const [newImg, setNewImg] = useState(props.imgUrl);
  const [newContent, setNewContent] = useState(props.content);

  function handleChange(e) {
    //setNewName(e.target.value);
  }

  const handleRateChange = (e) => {
    setNewRate(e.target.value);
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
  const fileprops = {
    /* Post로 이미지 정보 보낼 떄 에러발생 */
    headers: defaultHeaders,
    action: 'http://localhost:3001/campReview',
    //action: '/members/me/reviews',
    name: 'file',
    onChange(info) {
      console.log(info.file.status);
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
        setNewImg(info.file.name);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const editingTemplate = (
    <EditForm onSubmit={handleSubmit} key={props.review_id}>
      <CampNameLoad>{props.camp_name}</CampNameLoad>
      <EditTop>
        <EditLeft>
          <RateSelect>
            별점 선택
            <Rate allowHalf onChange={handleRateChange} value={newRate} />
          </RateSelect>
          <Upload {...fileprops}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </EditLeft>
        <EditRight>
          <EditButton typed="submit">수정완료</EditButton>
          <CancleButton onClick={() => setEditing(false)}>취소</CancleButton>
        </EditRight>
      </EditTop>
      <TextArea rows={4} onChange={handleContentChange} value={newContent} />
    </EditForm>
  );
  const viewTemplate = (
    <LikeReview key={props.review_id}>
      <ReviewThumbnail>
        <ReviewThumb
          src={props.imgUrl === '' ? Image : props.imgUrl}
        ></ReviewThumb>
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
            <HandleReview onClick={() => props.deleteTask(props.id)}>
              삭제
            </HandleReview>
          </HandleContent>
        </TopArea>
        <Date>{props.lastModifiedDate}</Date>
        <BottomArea to={`/detail/${props.camp_id}`}>{props.content}</BottomArea>
      </ReviewInfo>
    </LikeReview>
  );

  return <List>{isEditing ? editingTemplate : viewTemplate}</List>;
}
