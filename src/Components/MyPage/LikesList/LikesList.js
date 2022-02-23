import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
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

  const unCheckedCampLike = (id) => {
    // 내 좋아요 목록에서 제거
    fetch(`/members/me/camps/likes/${id}`, {
      method: 'PATCH',
      headers: defaultHeaders,
      body: JSON.stringify({
        checked: false,
      }),
    });
  };

  const subtractCampLikeCnt = (campId) => {
    // 캠핑장 정보에서 좋아요 수 - 1
    fetch(`/camps/${campId}/likes`, {
      // 캠핑장 상세 api인지, 캠핑장 좋아요 api인지
      method: 'PATCH',
      headers: defaultHeaders,
      body: JSON.stringify({
        checked: false,
        //like_cnt : like_cnt-1
      }),
    });
  };
  const CampLikeCancle = (e, campId) => {
    e.preventDefault();

    auth.onAuthStateChanged(async (firebaseUser) => {
      const token = await firebaseUser.getIdToken();
      defaultHeaders.Authorization = `Bearer ${token}`;

      console.log(campId); // 선택한 캠프장의 id
      if (window.confirm('이 캠핑장을 좋아요 목록애서 삭제 하시겠습니까?')) {
        axios
          .all([unCheckedCampLike(campId), subtractCampLikeCnt(campId)])
          .then(
            axios.spread(function (acct, perms) {
              // Both requests are now complete
            }),
          );
      }
    });
  };

  return (
    <LikeList>
      {data.map((camp) => (
        <LikeCamp key={camp.campId}>
          <CampThumbnail>
            <CampThumb
              src={
                camp.firstImageUrl === '' || camp.firstImageUrl === null
                  ? Image
                  : camp.firstImageUrl
              }
            ></CampThumb>
          </CampThumbnail>
          <CampInfo>
            <TopArea>
              <CampName to={`/detail?id=${camp.campId}`}>
                {camp.facltNm}
              </CampName>
              <CampLike onClick={(e) => CampLikeCancle(camp.campId)}>
                <HeartFilled style={{ color: '#FF7875', fontSize: '20px' }} />
                {/*  <HeartOutlined style={{ color: '#FF7875', fontSize: '20px' }} /> */}
              </CampLike>
            </TopArea>
            <BottomArea to={`/detail?id=${camp.campId}`}>
              <CampDesc>{camp.lineIntro}</CampDesc>
              <CampAddr>{camp.addr1}</CampAddr>
            </BottomArea>
          </CampInfo>
        </LikeCamp>
      ))}
    </LikeList>
  );
}
