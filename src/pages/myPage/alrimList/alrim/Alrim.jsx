import React, { useState, useEffect } from 'react';
import * as api from '../../../../service/api';
import { CloseOutlined } from '@ant-design/icons';
import Image from '../../../../assets/images/default.png';
import useGetDate from '../../../../hooks/useGetDate';
import { style } from './alrim.style';

export default function Alrim({ alrim, MemberAlrimRequest }) {
  const chargeTime = useGetDate(alrim.createdDate);

  /* 선택한 알림 삭제 */
  const handleOnDelete = async () => {
    await api.deleteAlrim(alrim.notificationId);
    MemberAlrimRequest();
  };

  /* 선택한 알림 읽기 */
  const [read, setRead] = useState(false);
  const handleOnUpdate = async () => {
    await api.readAlrim(alrim.notificationId);
    setRead(true);
  };

  const [sliceText, setSliceText] = useState('');

  // notificationType에 따라 sliceText에 들어갈 컨텐츠 내용 또는 제목 구분
  useEffect(() => {
    let notiContent = '';
    if (alrim.notificationType !== 'postLike' && alrim.content.length > 10) {
      notiContent = alrim.content.substring(0, 9) + `...`;
      setSliceText(notiContent);
    } else if (alrim.notificationType === 'postLike') {
      notiContent = alrim.title;
      if (alrim.title.length > 10)
        notiContent = alrim.title.substring(0, 9) + `...`;
      setSliceText(notiContent);
    } else {
      setSliceText(alrim.content);
    }
  }, [alrim]);

  // notificationType에 따른 알림타입, 메세지, url, 썸네일이미지 구분
  let notiType = '';
  let notiMsg = '';
  let notiURL = '';
  let notiImg = '';

  switch (alrim.notificationType) {
    case 'postLike':
      notiType = '게시글 좋아요';
      notiMsg = '님이 회원님이 작성한 게시글을 좋아합니다';
      notiURL = `/community/detail/?postId=${alrim.postId}`;
      notiImg =
        alrim.postImgUrlList.length === 0 ? Image : alrim.postImgUrlList[0];
      break;

    case 'commentLike':
      notiType = '댓글 좋아요';
      notiMsg = `님이 '${alrim.postTitle}' 게시글에 작성한 회원님의 댓글을 좋아합니다.`;
      notiURL = `/community/detail/?postId=${alrim.postId}`;
      notiImg =
        alrim.postImgUrlList.length === 0 ? Image : alrim.postImgUrlList[0];
      break;

    case 'reviewLike':
      notiType = '리뷰 좋아요';
      notiMsg = `님이 회원님이 '${alrim.facltNm}'에 작성한 리뷰를 좋아합니다.`;
      notiURL = `/detail?id=${alrim.campId}`;
      notiImg =
        alrim.imgUrl === '' ||
        alrim.imgUrl === null ||
        alrim.imgUrl === undefined
          ? Image
          : alrim.imgUrl;
      break;

    case 'commentWrite':
      notiType = '새 댓글';
      notiMsg = `님이 '${alrim.postTitle}' 게시글에 댓글을 작성하였습니다.`;
      notiURL = `/community/detail/?postId=${alrim.postId}`;
      notiImg =
        alrim.postImgUrlList.length === 0 ? Image : alrim.postImgUrlList[0];
      break;

    default:
      notiType = '';
      notiMsg = '';
      notiURL = `/community`;
      break;
  }

  return (
    <AlrimWrap key={alrim.notificationId} checked={alrim.checked} read={read}>
      <CheckedArea
        to={notiURL}
        onClick={() => handleOnUpdate(alrim.notificationId)}
      >
        <Thumbnail>
          <Thumb src={notiImg}></Thumb>
        </Thumbnail>
        <Info>
          <TopArea>
            <AlrimInfo>
              <Type>
                {notiType} {/* 좋아요 */}
              </Type>
              <AlrimContent>
                <b>{alrim.nickname}</b> {notiMsg}
              </AlrimContent>
            </AlrimInfo>
          </TopArea>
          <BottomArea>
            <AlrimFrom>{sliceText}</AlrimFrom>
            <Date>{chargeTime}</Date>
          </BottomArea>
        </Info>
      </CheckedArea>
      <DeleteBtn onClick={() => handleOnDelete(alrim.notificationId)}>
        <CloseOutlined />
      </DeleteBtn>
    </AlrimWrap>
  );
}

const {
  AlrimWrap,
  CheckedArea,
  Thumbnail,
  Thumb,
  Info,
  TopArea,
  AlrimInfo,
  Type,
  AlrimContent,
  DeleteBtn,
  BottomArea,
  AlrimFrom,
  Date,
} = style;
