import React from 'react';
import * as api from '../../../../service/api';
import { HeartFilled } from '@ant-design/icons';
import Image from '../../../../assets/images/default.png';
import { style } from './LikeCamp.style';

function LikeCamp({ camp, LikeListRequest }) {
  // 좋아요 리스트 삭제
  const CampLikeCancle = async () => {
    if (window.confirm('좋아요 리스트에서 삭제 하시겠습니까?')) {
      await api.campLike(camp.campId);
      LikeListRequest();
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

export default React.memo(LikeCamp);

const {
  LikeCampWrap,
  CampThumbnail,
  CampThumb,
  CampInfo,
  TopArea,
  CampLike,
  CampName,
  BottomArea,
  CampDesc,
  CampAddr,
} = style;
