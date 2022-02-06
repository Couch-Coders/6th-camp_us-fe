import React, { useState, useEffect } from 'react';
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
  /* 좋아요 클릭 시 목록에서 제거 */
  /* const { setUser } = useContext(UserContext); */
  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const handleCampLike = (e, campId) => {
    e.preventDefault();
    console.log(campId); // 선택한 캠프장의 id
    // console.log(`nickname :${event.target.nickname.value}`);
    /* const res = await fetch('/members/me', {
      method: 'DELETE',
      headers: defaultHeaders,
      body: JSON.stringify({
        id: campId,
      }),
    });
    const user = await res.json();
    console.log(`DELETE /members/mes ${JSON.stringify(user)}`); */
    // setUser(user);
  };

  return (
    <LikeList>
      {data.map((camp) => (
        <LikeCamp key={camp.id}>
          <CampThumbnail>
            <CampThumb
              src={camp.firstImageUrl === '' ? Image : camp.firstImageUrl}
            ></CampThumb>
          </CampThumbnail>
          <CampInfo>
            <TopArea>
              <CampName to={`/detail/${camp.id}`} key={camp.id}>
                {camp.facltNm}
              </CampName>
              <CampLike onClick={(e) => handleCampLike(e, camp.id)}>
                <HeartFilled style={{ color: '#FF7875', fontSize: '20px' }} />
                {/*  <HeartOutlined style={{ color: '#FF7875', fontSize: '20px' }} /> */}
              </CampLike>
            </TopArea>
            <BottomArea to={`/detail/${camp.id}`} key={camp.id}>
              <CampDesc>{camp.lineIntro}</CampDesc>
              <CampAddr>
                {camp.addr1}
                {camp.addr2}
              </CampAddr>
            </BottomArea>
          </CampInfo>
        </LikeCamp>
      ))}
    </LikeList>
  );
}
