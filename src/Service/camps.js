import axios from 'axios';
import axiosInstance from '../Common/axiosInstance';

// 로그인
export async function login() {
  try {
    const response = await axiosInstance('/members/me');

    return response;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 회원가입
export async function register(event) {
  try {
    const response = await axiosInstance.post('/members', {
      nickname: event.target.nickname.value,
    });

    return response;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 닉네임 변경
export async function changeNickname(nickname) {
  console.log(nickname);
  try {
    const response = await axiosInstance.patch('/members/me', nickname);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 유저가 쓴 리뷰 조회
export async function getUserReview(page) {
  try {
    const response = await axiosInstance(
      `/members/me/reviews/?page=${page}&size=5&sort=createdDate,desc`,
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 유저 정보 조회
export async function getUserInfo() {
  try {
    const response = await axiosInstance('/members/me/info');
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 회원이 좋아요한 캠핑장 조회
export async function getMyCampsLikes() {
  try {
    const response = await axiosInstance('/members/me/camps/likes');
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 알림 조회
export async function getAlrimList() {
  try {
    const response = await axiosInstance(`/members/me/notifications`);
    const data = response.data.content;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 모든 알림 삭제
export async function deleteAllAlrim() {
  try {
    const response = await axiosInstance.delete(`/members/me/notifications`);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 모든 알림 읽기
export async function readAllAlrim() {
  try {
    const response = await axiosInstance.patch(`/members/me/notifications`);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 선택한 알림 읽기
export async function readAlrim(id) {
  try {
    const response = await axiosInstance.patch(
      `/members/me/notifications/${id}`,
      {
        checked: true,
      },
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 선택한 알림 삭제
export async function deleteAlrim(id) {
  try {
    const response = await axiosInstance.delete(`/notifications/${id}`);
    console.log(response);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 캠핑장 추천
export async function getRecommendCamp() {
  try {
    const response = await axios('http://localhost:3001/camp');
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 베스트 리뷰 조회
export async function getBestReview() {
  try {
    const response = await axiosInstance('/reviews/best');
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 캠핑장 상세 조회
export async function getCamp(id) {
  try {
    const response = await axiosInstance(`/camps/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 캠핑장에 대한 리뷰 조회
export async function getCampReview(id, page) {
  try {
    const response = await axiosInstance(
      `/camps/${id}/reviews?page=${page}&size=5&sort=createdDate,desc`,
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 검색페이지 캠핑장 검색
export async function getSearchCamp(
  address,
  pageNum,
  category,
  sort,
  myLocation,
) {
  let url = `/camps?pages=${pageNum}&size=10`;

  console.log(myLocation);

  if (address.address1 !== null) url = url.concat(`&doNm=${address.address1}`);
  if (address.address2 !== null)
    url = url.concat(`&sigunguNm=${address.address2}`);
  if (address.keyword !== null) url = url.concat(`&name=${address.keyword}`);
  if (address.rate !== null) url = url.concat(`&rate=${address.rate}`);
  if (category !== '') url = url.concat(`&tag=${category}`);
  if (sort !== undefined) url = url.concat(`&sort=${sort}`);
  if (myLocation !== null)
    url = url.concat(`&mapY=${myLocation.lat}&mapX=${myLocation.long}`);

  console.log(url);

  try {
    const response = await axiosInstance(url);
    console.log(response);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 검색페이지 검색 임시(json-server)
export async function getSearchTemporary() {
  try {
    const response = await axiosInstance('http://localhost:3001/camp');
    console.log(response);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
// 검색페이지 검색 임시(json-server)
export async function getSearchCampTemporary() {
  try {
    const response = await axios('http://localhost:3001/campSearch');
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 메인페이지 캠핑장 검색
export async function getMainSearch(address, pageNum) {
  console.log(address);
  let url = `/camps?pages=${pageNum}&size=10`;

  if (address.address1 !== null) url = url.concat(`&doNm=${address.address1}`);
  if (address.address2 !== null)
    url = url.concat(`&sigunguNm=${address.address2}`);
  if (address.keyword !== null) url = url.concat(`&name=${address.keyword}`);
  if (address.rate !== null) url = url.concat(`&rate=${address.rate}`);
  console.log(url);
  try {
    const response = await axiosInstance(url);
    console.log(response);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 리뷰 삭제
export async function deleteReview(reviewId) {
  try {
    const response = await axiosInstance.delete(`/reviews/${reviewId}`);

    console.log(response);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 리뷰 작성
export async function writeReview(id, review) {
  try {
    const response = await axiosInstance.post(`/camps/${id}/reviews`, {
      content: review.content,
      imgUrl: review.imgUrl,
      rate: review.rate,
    });

    console.log(response);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 리뷰 수정
export async function changeReview(review) {
  try {
    const response = await axiosInstance.put(`/reviews/${review.reviewId}`, {
      rate: review.rate,
      imgUrl: review.imgUrl,
      content: review.content,
    });

    console.log(response);
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 리뷰 좋아요
export async function changeReviewLike(id) {
  try {
    const response = await axiosInstance.patch(`/reviews/${id}/like`);

    console.log(response);
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
