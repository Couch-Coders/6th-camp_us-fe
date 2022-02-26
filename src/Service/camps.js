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
export async function getMyCampsLikes(page) {
  try {
    const response = await axiosInstance(
      `/members/me/camps?page=${page}&size=5&sort=createdDate,desc`,
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 알림 조회
export async function getAlrimList(page) {
  try {
    const response = await axiosInstance(
      `/members/me/notifications?page=${page}&size=5&sort=createdDate,desc`,
    );
    const data = response.data;
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
export async function deleteAlrim(notificationId) {
  try {
    const response = await axiosInstance.delete(
      `/notifications/${notificationId}`,
    );
    console.log(response);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 캠핑장 추천
export async function getRecommendCamp(geoLocation) {
  console.log(geoLocation);
  try {
    const response = await axiosInstance({
      url: `/camps?page=0&size=10`,
      params: {
        mapX: geoLocation.long && geoLocation.long,
        mapY: geoLocation.lat && geoLocation.lat,
        sort: 'distance',
      },
    });
    console.log(response);
    const content = response.data.content;
    return content;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 베스트 리뷰 조회
export async function getBestReview() {
  try {
    const response = await axiosInstance(`/reviews/best`);
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

// 캠핑장 좋아요
export async function campLike(id) {
  try {
    const response = await axiosInstance.patch(`/camps/${id}/like`);
    console.log(response);
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
      `/camps/${id}/reviews?&sort=createdDate,desc`,
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 검색페이지 캠핑장 검색

export async function getSearchCamp(address, pageNum, sort) {
  console.log(address);
  try {
    const response = await axiosInstance({
      url: `/camps?page=${pageNum}&size=10`,
      params: {
        name: address.name && address.name,
        doNm: address.doNm && address.doNm,
        sigunguNm: address.sigunguNm && address.sigunguNm,
        rate: address.rate && address.rate,
        tag: address.tag && address.tag,
        sort: sort && sort,
        mapX: address.mapX && address.mapX,
        mapY: address.mapY && address.mapY,
      },
    });
    console.log(response);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 메인페이지 캠핑장 검색
export async function getMainSearch(address, pageNum) {
  try {
    const response = await axiosInstance({
      url: `/camps?page=${pageNum}&size=10`,
      params: {
        name: address.name && address.name,
        doNm: address.doNm && address.doNm,
        sigunguNm: address.sigunguNm && address.sigunguNm,
        rate: address.rate && address.rate,
      },
    });
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
