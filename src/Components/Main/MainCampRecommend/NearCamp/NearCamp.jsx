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
} from './NearCamp.style';
import CampLike from '../../../CampLike/CampLike';
import Image from '../../../../Assets/Images/default_image.png';

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
    console.log(geoLocation);
    geoLocation &&
      getDistance(camp.mapY, camp.mapX, geoLocation.lat, geoLocation.long);
  }, []);

  console.log(distance);

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
        <CampLike
          likeCount={camp.like}
          campId={camp.campId}
          liked={camp.liked}
        />
        {geoLocation && `${distance} km`}
      </CampLikeWrap>

      {/* {campData.slice(0, 3).map((camp) => (
            <NearCamp to={`/detail/${camp.id}`} key={camp.id}>
              <CampThumbnail>
                <CampThumb
                  src={camp.firstImageUrl === '' ? Image : camp.firstImageUrl}
                ></CampThumb>
              </CampThumbnail>
              <CampInfo>
                <CampLike>
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.1817 0C13.923 0 11.964 1.32942 11 3.27142C10.036 1.32942 8.07697 0 5.81826 0C2.60477 0 0 2.69143 0 6.01173C0 12.5676 11 20 11 20C11 20 22 12.5676 22 6.01173C22 2.69143 19.3952 0 16.1817 0Z"
                      fill="#FF7875"
                    />
                  </svg>
                  {camp.like_cnt}
                </CampLike>
                <CampName>{camp.facltNm}</CampName>
                <CampAddr>
                  {camp.addr1}
                  {camp.addr2}
                </CampAddr>
              </CampInfo>
            </NearCamp>
          ))} */}
    </Container>
  );
};

export default NearCamp;
