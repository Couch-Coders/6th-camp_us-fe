import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../auth/AuthProvider';
import { auth } from '../../../Service/firebaseAuth';
import { HeartFilled } from '@ant-design/icons';
import Image from '../../../Assets/Images/default.png';
import {
  LikeList,
  LikeCamp,
  CampThumbnail,
  CampThumb,
  CampInfo,
  TopArea,
  CampLike,
  BottomArea,
  CampName,
  CampDesc,
  CampAddr,
} from './LikesList.styles';

export default function LikesList({ data }) {
  const { user } = useContext(UserContext);
  // console.log('data = ', data);
  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  /* 좋아요 클릭 시 목록에서 제거 */
  const CampLikeCancle = (e, campId) => {
    e.preventDefault();

    auth.onAuthStateChanged(async (firebaseUser) => {
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

      /*
       1. 선택한 캠프장의 like_cnt -1
       2. 마이페이지 좋아요 리스트에서 삭제
      */
    });
  };

  return (
    <LikeList>
      {data.map((camp) => (
        <LikeCamp key={camp.campLikeId}>
          <CampThumbnail>
            <CampThumb
              src={camp.imgUrl === '' ? Image : camp.imgUrl}
            ></CampThumb>
          </CampThumbnail>
          <CampInfo>
            <TopArea>
              <CampName to={`/detail/${camp.campId}`}>{camp.campName}</CampName>
              <CampLike onClick={(e) => CampLikeCancle(e, camp.campLikeId)}>
                <HeartFilled style={{ color: '#FF7875', fontSize: '20px' }} />
                {/*  <HeartOutlined style={{ color: '#FF7875', fontSize: '20px' }} /> */}
              </CampLike>
            </TopArea>
            <BottomArea to={`/detail/${camp.campId}`}>
              <CampDesc>{camp.campDesc}</CampDesc>
              <CampAddr>
                {camp.addr1}
                {/* {camp.addr2} */}
              </CampAddr>
            </BottomArea>
          </CampInfo>
        </LikeCamp>
      ))}
    </LikeList>
  );
}
