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
export async function getUserReview(id) {
  try {
    const response = await axiosInstance(`/members/me/reviews`);
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
    const response = await axiosInstance('/members/me/notifications');
    const data = response.data.content;
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
    );
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
    const response = await axios(`/camps/${id}`);
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
export async function getCampReview(id) {
  try {
    const response = await axiosInstance(`/camps/${id}/reviews`);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 검색페이지 캠핑장 검색
export async function getSearchCamp(address, pageNum) {
  console.log(address);
  try {
    const response = await axiosInstance('/camps', {
      name: address.keyword,
      pageNumber: pageNum,
      pageSize: 10,
      // sigunguNm: address.address1,
    });
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 메인페이지 캠핑장 검색
export async function getMainSearch(address, pageNum) {
  try {
    const response = await axiosInstance('/camps', {
      name: address.keyword,
      pageNumber: pageNum,
      pageSize: 10,
      // sigunguNm: address.address1,
    });
    console.log(response);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 리뷰 삭제
export async function deleteReview(id) {
  try {
    const response = await axiosInstance.delete(`/reviews/${id}`);

    console.log(response);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 리뷰 작성
export async function writeReview(id) {
  try {
    const response = await axiosInstance.post(`/camps/2598/reviews`, {
      content: '여기 캠핑장 추천합니다.',
      imgUrl:
        'https://gocamping.or.kr/upload/camp/1023/thumb/thumb_720_8920mL8X4QwnXtiSF10BNgEW.jpg',
      rate: 4,
    });

    console.log(response);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
