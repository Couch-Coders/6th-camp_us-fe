import React, { useState, useEffect } from 'react';
import * as api from '../../../Service/camps';
import { HeartFilled } from '@ant-design/icons';
import Image from '../../../Assets/Images/default.png';
import {
  LikeCampWrap,
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

export default function LikeCamp({ camp, request }) {
  const CampLikeCancle = async () => {
    if (window.confirm('좋아요 리스트에서 삭제 하시겠습니까?')) {
      const response = await api.campLike(camp.campId);
      request();
    }
  };

  return (
    <LikeCampWrap key={camp.campId}>
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
          <CampName to={`/detail?id=${camp.campId}`}>{camp.facltNm}</CampName>
          <CampLike onClick={(e) => CampLikeCancle(camp.campId)}>
            <HeartFilled style={{ color: '#FF7875', fontSize: '20px' }} />
          </CampLike>
        </TopArea>
        <BottomArea to={`/detail?id=${camp.campId}`}>
          <CampDesc>{camp.lineIntro}</CampDesc>
          <CampAddr>{camp.addr1}</CampAddr>
        </BottomArea>
      </CampInfo>
    </LikeCampWrap>
  );
}
