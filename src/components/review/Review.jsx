import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import ImagePreview from '../imageUpload/ImagePreview/ImagePreview';
import ImageUpload from '../imageUpload/ImageUpload';
import ReviewsList from './reveiwList/ReviewsList';
import { UserContext } from '../auth/AuthProvider';
import { NotMyReviewNotification } from '../notice/Notice';
import { style } from './Review.style';
import { Rate, Input, message } from 'antd';
import * as api from '../../service/api';
import ReviewSkeleton from '../skeleton/reviewSkeleton/ReviewSkeleton';

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
  const [isLoading, setIsLoading] = useState(false);
  const buttonRef = useRef();

  const { user } = useContext(UserContext);

  useEffect(() => {
    clickedPage === 'detail'
      ? detailReviewRequest(currentPage)
      : MemberReviewRequest(currentPage);
  }, [currentPage]);

  // 상세페이지 리뷰 조회
  async function detailReviewRequest(page) {
    setIsLoading(true);
    const response = await api.getCampReview(CampId, page);
    setReviewData(response.content);
    setTotalElement(response.totalElements);
    setIsLoading(false);
  }

  // 마이페이지 리뷰 조회
  async function MemberReviewRequest(page) {
    setIsLoading(true);
    const response = await api.getUserReview(page);
    setReviewData(response.content);
    setTotalElement(response.totalElements);
    setIsLoading(false);
  }

  // 페이지 변경
  const changePage = (value) => {
    setCurrentPage(value - 1);
    clickedPage === 'detail'
      ? detailReviewRequest(value - 1)
      : MemberReviewRequest(value - 1);
  };

  /* 리뷰 삭제 */
  async function deleteTask(id) {
    await api.deleteReview(id);
    clickedPage === 'detail'
      ? detailReviewRequest(currentPage)
      : MemberReviewRequest(currentPage);
  }

  // 리뷰 수정
  async function editTask(review) {
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
    await api.changeReview(review);
  }

  // 이미지 업로드
  const setImageUpload = useCallback((file, action) => {
    if (action === 'add') {
      setReview((review) => {
        return { ...review, imgUrl: file.url, imgName: file.name };
      });
    } else {
      setReview((review) => {
        return { ...review, imgUrl: '', imgName: '' };
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
    if (!user) {
      message.warning('로그인한 유저만 리뷰를 작성 할 수 있습니다.');
      return;
    }

    if (review.content.length < 5) {
      message.warning('5글자 이상의 리뷰만 등록이 가능합니다.');
      buttonRef.current.click();
      return;
    }

    if (!review.rate) {
      message.warning('별점을 등록해주세요.');
      buttonRef.current.click();
      return;
    }

    await api.writeReview(CampId, review);
    setReview((review) => {
      return { ...review, rate: null, content: '', imgUrl: '', imgName: '' };
    });
    detailReviewRequest();
  }

  return (
    <Container>
      {clickedPage === 'detail' && (
        <EditForm>
          <EditTop>
            <EditLeft>
              <RateSelect>
                별점 선택
                <Rate onChange={handleRateChange} value={review.rate} />
              </RateSelect>
            </EditLeft>
            <EditRight>
              <EditButton type="submit" onClick={handleSubmit}>
                작성
              </EditButton>
            </EditRight>
          </EditTop>
          <Wrap>
            <ImageUpload setImageUpload={setImageUpload} pageName="review" />
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
      {!isLoading && reviewData.length === 0 ? (
        <NotMyReviewNotification />
      ) : isLoading ? (
        <>
          <ReviewSkeleton />
          <ReviewSkeleton />
        </>
      ) : (
        <>
          {reviewData.map((data) => (
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
        </>
      )}
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
