import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../auth/AuthProvider';
import { auth } from '../../../Service/firebaseAuth';
import { CloseOutlined } from '@ant-design/icons';
import Image from '../../../Assets/Images/default.png';
import {
  List,
  Alrim,
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
} from './AlrimList.styles';

export default function AlrimList({ data }) {
  const { user } = useContext(UserContext);
  // console.log('data = ', data);
  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  /* 좋아요 클릭 시 목록에서 제거 */
  const CampLikeCancle = (e) => {
    e.preventDefault();

    /* auth.onAuthStateChanged(async (firebaseUser) => {
      const token = await firebaseUser.getIdToken();
      defaultHeaders.Authorization = `Bearer ${token}`;

      console.log(campId); // 선택한 캠프장의 id
      const res = await fetch(`/members/me/camps/likes`, {
        method: 'PATCH',
        headers: defaultHeaders,
        body: JSON.stringify({
          checked: false,
        }),
      });
    }); */
  };

  const CheckedAlrim = (e) => {
    e.preventDefault();
    console.log('해당 알림 읽기');
  };

  const DeletedAlrim = (e) => {
    e.preventDefault();
    console.log('해당 알림 삭제');
  };

  return (
    <>
      <List>
        <Alrim>
          <CheckedArea to={`/detail`} onClick={CheckedAlrim}>
            <Thumbnail>
              <Thumb src={Image}></Thumb>
            </Thumbnail>
            <Info>
              <TopArea>
                <AlrimInfo>
                  <Type>좋아요</Type>
                  <AlrimContent>
                    eunbee 님이 게시글에 좋아요를 눌렀습니다.eunbee 님이
                    게시글에 좋아요를 눌렀습니다.eunbee 님이 게시글에 좋아요를
                    눌렀습니다.
                  </AlrimContent>
                </AlrimInfo>
              </TopArea>
              <BottomArea>
                <AlrimFrom>아리아캠핑</AlrimFrom>
                <Date>2021.12.12</Date>
              </BottomArea>
            </Info>
          </CheckedArea>
          <DeleteBtn onClick={DeletedAlrim}>
            <CloseOutlined />
          </DeleteBtn>
        </Alrim>
      </List>
    </>
  );
}
