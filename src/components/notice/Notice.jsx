import React from 'react';
import { style } from './notice.style';
import {
  BellFilled,
  MessageOutlined,
  AlertOutlined,
  FrownOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

export const AlrimNotification = () => {
  return (
    <Notification>
      <BellFilled />
      <NotiTitle>새로운 알림이 없습니다.</NotiTitle>
      <NotiContent>
        나의 활동소식과 친구들의 새소식을 한번에 받아보세요!
      </NotiContent>
    </Notification>
  );
};

export const NotMyLikeListNotification = () => {
  return (
    <Notification>
      <FrownOutlined />
      <NotiTitle>좋아요한 캠핑장이 없습니다.</NotiTitle>
      <NotiContent>관심있는 캠핑장을 스크랩해보세요!</NotiContent>
    </Notification>
  );
};

export const NotMyPostsNotification = () => {
  return (
    <Notification>
      <FrownOutlined />
      <NotiTitle>작성한 게시글이 없습니다</NotiTitle>
      <NotiContent>커뮤니티에서 캠퍼들과 정보를 공유해주세요!</NotiContent>
    </Notification>
  );
};

export const NotMyCommentsNotification = () => {
  return (
    <Notification>
      <FrownOutlined />
      <NotiTitle>작성한 댓글이 없습니다</NotiTitle>
      <NotiContent>커뮤니티에서 캠퍼들과 정보를 공유해주세요!</NotiContent>
    </Notification>
  );
};

export const NotMyReviewNotification = () => {
  return (
    <Notification>
      <FrownOutlined />
      <NotiTitle>등록된 리뷰가 없습니다</NotiTitle>
      <NotiContent>방문한 캠핑장의 후기를 공유해주세요!</NotiContent>
    </Notification>
  );
};

export const NotCommentNotification = () => {
  return (
    <Notification>
      <MessageOutlined />
      <NotiTitle>아직 댓글이 없어요</NotiTitle>
      <NotiContent>가장 먼저 댓글을 남겨보세요!</NotiContent>
    </Notification>
  );
};

export const CampReviewNotification = () => {
  return (
    <Notification>
      <MessageOutlined />
      <NotiTitle>등록된 이미지 리뷰가 없습니다.</NotiTitle>
      <NotiContent>이 캠핑장의 첫 리뷰어가 되어주세요!</NotiContent>
    </Notification>
  );
};

export const CampInfoNotification = () => {
  return (
    <Notification>
      <AlertOutlined />
      <NotiTitle>기재된 사항과 다를 수 있습니다.</NotiTitle>
      <NotiContent>
        자세한 문의사항이 있으시면 홈페이지 또는 연락처로 문의주세요!
      </NotiContent>
    </Notification>
  );
};

export const CampSearchResultNotification = () => {
  return (
    <Notification>
      <ExclamationCircleOutlined />
      <NotiTitle>검색결과가 없습니다.</NotiTitle>
    </Notification>
  );
};

const { Notification, NotiTitle, NotiContent } = style;
