import axiosInstance from '../common/axiosInstance';

const SERVER_URL = 'https://www.camp-us.link';

// 로그인
export async function login() {
  try {
    const response = await axiosInstance(`${SERVER_URL}/members/me`);

    return response;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 회원가입
export async function register(event) {
  try {
    const response = await axiosInstance.post(`${SERVER_URL}/members`, {
      nickname: event.target.nickname.value,
    });

    return response;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 닉네임 변경
export async function changeNickname(nickname) {
  try {
    const response = await axiosInstance.patch(
      `${SERVER_URL}/members/me`,
      nickname,
    );
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
      `${SERVER_URL}/members/me/reviews/?page=${page}&size=5&sort=createdDate,desc`,
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
    const response = await axiosInstance(`${SERVER_URL}/members/me/info`);
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
      `${SERVER_URL}/members/me/camps?page=${page}&size=5&sort=createdDate,desc`,
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
      `${SERVER_URL}/members/me/notifications?page=${page}&size=5&sort=createdDate,desc`,
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 회원의 안읽은 알림 갯수 조회
export async function getAlrimCount() {
  try {
    const response = await axiosInstance(`/members/me/notifications/count`);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 모든 알림 삭제
export async function deleteAllAlrim() {
  try {
    const response = await axiosInstance.delete(
      `${SERVER_URL}/members/me/notifications`,
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 모든 알림 읽기
export async function readAllAlrim() {
  try {
    const response = await axiosInstance.patch(
      `${SERVER_URL}/members/me/notifications`,
    );
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
      `${SERVER_URL}/members/me/notifications/${id}`,
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
      `${SERVER_URL}/notifications/${notificationId}`,
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 캠핑장 추천
export async function getRecommendCamp(geoLocation) {
  try {
    const response = await axiosInstance({
      url: `${SERVER_URL}/camps?page=0&size=10`,
      params: {
        mapX: geoLocation.long && geoLocation.long,
        mapY: geoLocation.lat && geoLocation.lat,
        sort: 'distance',
      },
    });
    const content = response.data.content;
    return content;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 베스트 리뷰 조회
export async function getBestReview() {
  try {
    const response = await axiosInstance(`${SERVER_URL}/reviews/best`);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 캠핑장 상세 조회
export async function getCamp(id) {
  try {
    const response = await axiosInstance(`${SERVER_URL}/camps/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 캠핑장 좋아요
export async function campLike(id) {
  try {
    const response = await axiosInstance.patch(
      `${SERVER_URL}/camps/${id}/like`,
    );
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
      `${SERVER_URL}/camps/${id}/reviews?size=5&page=${page}&sort=createdDate,desc`,
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 캠핑장의 리뷰 이미지 조회
export async function getReviewImage(id) {
  try {
    const response = await axiosInstance(
      `${SERVER_URL}/camps/${id}/reviews/images?size=1000`,
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 검색페이지 캠핑장 검색

export async function getSearchCamp(address, pageNum, sort) {
  console.log(sort);
  try {
    const response = await axiosInstance({
      url: `${SERVER_URL}/camps?page=${pageNum}&size=10`,
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
      url: `${SERVER_URL}/camps?page=${pageNum}&size=10`,
      params: {
        name: address.name && address.name,
        doNm: address.doNm && address.doNm,
        sigunguNm: address.sigunguNm && address.sigunguNm,
        rate: address.rate && address.rate,
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 리뷰 삭제
export async function deleteReview(reviewId) {
  try {
    const response = await axiosInstance.delete(
      `${SERVER_URL}/reviews/${reviewId}`,
    );

    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 리뷰 작성
export async function writeReview(id, review) {
  try {
    const response = await axiosInstance.post(
      `${SERVER_URL}/camps/${id}/reviews`,
      {
        content: review.content,
        imgUrl: review.imgUrl,
        rate: review.rate,
      },
    );

    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 리뷰 수정
export async function changeReview(review) {
  try {
    const response = await axiosInstance.put(
      `${SERVER_URL}/reviews/${review.reviewId}`,
      {
        rate: review.rate,
        imgUrl: review.imgUrl,
        content: review.content,
      },
    );
  } catch (error) {
    throw new Error('Failed to load data');
  }
}

// 리뷰 좋아요
export async function changeReviewLike(id) {
  try {
    const response = await axiosInstance.patch(
      `${SERVER_URL}/reviews/${id}/like`,
    );
  } catch (error) {
    throw new Error('Failed to load data');
  }
}
