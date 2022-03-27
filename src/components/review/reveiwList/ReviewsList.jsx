import React, {
  useState,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { Rate, Input, message } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import Image from '../../../assets/images/default.png';
import * as API from '../../../service/api';
import { UserContext } from '../../auth/AuthProvider';
import { style } from './reviewsList.styles';
import ImagePreview from '../../imageUpload/ImagePreview/ImagePreview';
import ImageUpload from '../../imageUpload/ImageUpload';
import useGetDate from '../../../hooks/useGetDate';
import ConfirmModal from '../../modal/confirmModal/ConfirmModal';

const ReviewsList = ({ reviewData, deleteTask, editTask, clickedPage }) => {
  const [isVisibleReadMore, setisVisibleReadMore] = useState(false);
  const [sliceTextFirst, setSliceTextFirst] = useState();
  const [sliceTextSecond, setSliceTextSecond] = useState();
  const [visibleSecondText, setVisibleSecondText] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const { user } = useContext(UserContext);
  const chargeTime = useGetDate(reviewData.lastModifiedDate);

  const contentRef = useRef();

  const { TextArea } = Input;
  const [review, setReview] = useState({
    reviewId: reviewData.reviewId,
    likeCnt: reviewData.likeCnt,
    rate: reviewData.rate,
    content: reviewData.content,
    imgUrl: reviewData.imgUrl,
    imgName: '',
    lastModifiedDate: reviewData.lastModifiedDate,
    liked: reviewData.liked,
    nickname: reviewData.nickname,
    facltNm: reviewData.facltNm,
  });

  useEffect(() => {
    if (reviewData.content.length > 10) {
      const sliceFIrst = reviewData.content.substring(0, 9);
      const sliceSecond = reviewData.content.substring(9);
      setSliceTextFirst(sliceFIrst);
      setSliceTextSecond(sliceSecond);
      setisVisibleReadMore(true);
    } else {
      setSliceTextFirst(reviewData.content);
    }
  }, [reviewData.content.length]);

  // 텍스트 펼치기
  const openMoreText = () => {
    setVisibleSecondText(true);
    setisVisibleReadMore(false);
  };

  // 별점 변경
  const handleRateChange = (value) => {
    setReview((review) => {
      return { ...review, rate: value };
    });
  };

  // 리뷰 글 변경
  const handleContentChange = (e) => {
    setReview((review) => {
      return { ...review, content: e.target.value };
    });
  };

  // 리뷰 수정 handle
  function handleSubmit(e) {
    e.preventDefault();
    editTask(review);
    setEditing(false);
  }

  // 리뷰 수정 취소
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

  // 리뷰 좋아요
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

  // 리뷰 수정 컴포넌트
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
        <ImageUpload setImageUpload={setImageUpload} pageName="review" />
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

  // 리뷰 컴포넌트
  const [show, setShow] = useState(false);
  const viewTemplate = (
    <ListReview>
      <ReviewThumbnail clickedPage={clickedPage}>
        <ReviewThumb
          image={review.imgUrl !== '' && review.imgUrl !== null ? true : false}
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
            <ConfirmModal
              onClose={setShow}
              TaskId={review.reviewId}
              deleteTask={deleteTask}
              role="delete"
            />
          )}
        </TopArea>
        <Date>{chargeTime}</Date>
        <BottomArea>
          <ContentWrap>
            <Content ref={contentRef}>
              {sliceTextFirst}
              {visibleSecondText && sliceTextSecond}
              {isVisibleReadMore && (
                <ReadMore onClick={openMoreText}> ...더 보기</ReadMore>
              )}
            </Content>
          </ContentWrap>
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
    </ListReview>
  );

  return <List>{isEditing ? editingTemplate : viewTemplate}</List>;
};

export default React.memo(ReviewsList);

const {
  List,
  EditForm,
  CampNameLoad,
  EditTop,
  EditLeft,
  EditRight,
  RateSelect,
  EditButton,
  CancleButton,
  Container,
  ListReview,
  ReviewThumbnail,
  ReviewThumb,
  ReviewInfo,
  TopArea,
  HandleContent,
  HandleReview,
  Date,
  Nickname,
  CampName,
  BottomArea,
  Content,
  ContentWrap,
  ReadMore,
  ReviewLike,
} = style;
