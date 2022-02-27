import React, { useState } from 'react';
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

  return (
    <AlrimWrap key={alrim.notificationId} checked={alrim.checked} read={read}>
      <CheckedArea
        to={`/detail?id=${alrim.campId}`}
        onClick={() => handleOnUpdate(alrim.notificationId)}
      >
        <Thumbnail>
          <Thumb
            src={
              alrim.imgUrl === '' || alrim.imgUrl === null
                ? Image
                : alrim.imgUrl
            }
          ></Thumb>
        </Thumbnail>
        <Info>
          <TopArea>
            <AlrimInfo>
              <Type>{/* {alrim.type} */} 좋아요</Type>
              <AlrimContent>
                <b>{alrim.nickname}</b> 님이 리뷰에 좋아요를 눌렀습니다.
              </AlrimContent>
            </AlrimInfo>
          </TopArea>
          <BottomArea>
            <AlrimFrom>{alrim.facltNm}</AlrimFrom>
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
