import React, { useEffect, useState } from 'react';
import {
  Container,
  CampLink,
  CampThumbnail,
  CampThumb,
  CampInfo,
  CampLikeWrap,
  CampName,
  CampAddr,
} from './nearCamp.style';
import LikeButton from '../../../../components/likeButton/LikeButton';
import Image from '../../../../assets/images/default_image.png';

const NearCamp = ({ camp, geoLocation }) => {
  const [distance, setDistance] = useState();

  function getDistance(lat1, lon1, lat2, lon2) {
    if (lat1 === lat2 && lon1 === lon2) return 0;

    var radLat1 = (Math.PI * lat1) / 180;
    var radLat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radTheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radLat1) * Math.sin(radLat2) +
      Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
    if (dist > 1) dist = 1;

    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515 * 1.609344 * 1000;
    if (dist < 100) dist = Math.round(dist / 10) * 10;
    else dist = Math.round(dist / 100) * 100;
    setDistance(dist / 1000);
  }

  useEffect(() => {
    geoLocation &&
      getDistance(camp.mapY, camp.mapX, geoLocation.lat, geoLocation.long);
  }, []);

  return (
    <Container>
      <CampLink to={`/detail?id=${camp.campId}`}>
        <CampThumbnail>
          <CampThumb
            src={camp.firstImageUrl === null ? Image : camp.firstImageUrl}
          ></CampThumb>
        </CampThumbnail>
        <CampInfo>
          <CampName>{camp.facltNm}</CampName>
          <CampAddr>
            {camp.addr1}
            {camp.addr2}
          </CampAddr>
        </CampInfo>
      </CampLink>
      <CampLikeWrap>
        <LikeButton
          likeCount={camp.like}
          Id={camp.campId}
          liked={camp.liked}
          role="camp"
        />
        {geoLocation && `${distance} km`}
      </CampLikeWrap>
    </Container>
  );
};

export default NearCamp;
