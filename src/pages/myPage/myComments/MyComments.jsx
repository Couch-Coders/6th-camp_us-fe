import React, { useState, useEffect } from 'react';
import { style } from './MyComments.styles';
import { Input } from 'antd';
import Modal from '../../../components/modal/Modal';
import * as API from '../../../service/api';
import { UserContext } from '../../../components/auth/AuthProvider';
import useGetDate from '../../../hooks/useGetDate';
import { useNavigate } from 'react-router';

const MyComments = (/* { commentdata, deleteComment, editComment } */) => {
  const [isVisibleReadMore, setisVisibleReadMore] = useState(false);
  const [sliceTextFirst, setSliceTextFirst] = useState();
  const [sliceTextSecond, setSliceTextSecond] = useState();
  const [visibleSecondText, setVisibleSecondText] = useState(false);
  const [isEditing, setEditing] = useState(false);
  // const chargeTime = useGetDate(commentdata.lastModifiedDate);

  const { TextArea } = Input;
  /*  const [comment, setComment] = useState({  }); */

  /*   useEffect(() => {
    if (commentdata.content.length > 10) {
      const sliceFIrst = commentdata.content.substring(0, 9);
      const sliceSecond = commentdata.content.substring(9);
      setSliceTextFirst(sliceFIrst);
      setSliceTextSecond(sliceSecond);
      setisVisibleReadMore(true);
    } else {
      setSliceTextFirst(commentdata.content);
    } 
  }, [commentdata.content.length]); */

  // 텍스트 펼치기
  const openMoreText = () => {
    setVisibleSecondText(true);
    setisVisibleReadMore(false);
  };

  // 리뷰 글 변경
  const handleContentChange = (e) => {
    /* setReview((review) => {
      return { ...review, content: e.target.value };
    }); */
  };

  // 댓글 수정 handle
  function handleSubmit(e) {
    e.preventDefault();
    //editComment(comment);
    setEditing(false);
  }

  // 댓글 수정 취소
  function handleCancle(e) {
    e.preventDefault();
    setEditing(false);
    /* setReview((review) => {
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
    }); */
  }

  // 나의 댓글 수정 컴포넌트
  const editingTemplate = (
    <EditForm>
      <EditTop>
        <PostTitle>캠핑장 꿀팁</PostTitle>
        <EditRight>
          <EditButton type="submit" onClick={handleSubmit}>
            수정완료
          </EditButton>
          <CancleButton onClick={handleCancle}>취소</CancleButton>
        </EditRight>
      </EditTop>
      <TextArea rows={4} onChange={handleContentChange} value="내용" />
    </EditForm>
  );

  // 나의 댓글 뷰 컴포넌트
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const moveToCommunityDetailPage = () => {
    navigate('/community/detail');
  };

  const viewTemplate = (
    <Post>
      <PostDivision>
        <PostType>캠퍼수다</PostType>
        <HandleContent>
          <HandleReview onClick={() => setEditing(true)}>수정</HandleReview>
          <HandleReview onClick={() => setShow(true)}>삭제</HandleReview>
        </HandleContent>
      </PostDivision>
      <PostDetail onClick={moveToCommunityDetailPage}>
        <PostTop>
          <PostTitle>캠핑장 꿀팁</PostTitle>
          <PostCreateTime>3시간전</PostCreateTime>
        </PostTop>
        <PostContent>
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </PostContent>
        <PostReact>
          <LikeWrap>
            <Like>
              <LikeIcon
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1817 0C13.923 0 11.964 1.32942 11 3.27142C10.036 1.32942 8.07697 0 5.81826 0C2.60477 0 0 2.69143 0 6.01173C0 12.5676 11 20 11 20C11 20 22 12.5676 22 6.01173C22 2.69143 19.3952 0 16.1817 0Z" />
              </LikeIcon>
            </Like>
            <LikeCount>10</LikeCount>
          </LikeWrap>
        </PostReact>
      </PostDetail>
    </Post>
  );

  return <>{isEditing ? editingTemplate : viewTemplate}</>;
};

export default MyComments;

const {
  EditForm,
  EditTop,
  EditRight,
  EditButton,
  CancleButton,
  PostDivision,
  Post,
  PostType,
  PostDetail,
  PostTop,
  PostTitle,
  PostCreateTime,
  HandleContent,
  HandleReview,
  PostContent,
  PostReact,
  LikeWrap,
  Like,
  LikeIcon,
  LikeCount,
} = style;
