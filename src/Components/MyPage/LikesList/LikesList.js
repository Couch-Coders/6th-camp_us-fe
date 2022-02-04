import React, { useState, useEffect } from 'react';
import * as campService from '../../../Service/camps';
import Image from '../../../Assets/Images/default_image.png';
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
  CampAddr,
} from './LikesList.styles';

export default function LikesList() {
  const [campData, setCampData] = useState([]);

  async function getCampData() {
    const response = await campService.getCamp();
    setCampData(response);
  }

  useEffect(() => {
    getCampData();
  }, []);

  return (
    <LikeList>
      {campData.slice(0, 3).map((camp) => (
        <LikeCamp to={`/detail/${camp.id}`} key={camp.id}>
          <CampThumbnail>
            <CampThumb
              src={camp.firstImageUrl === '' ? Image : camp.firstImageUrl}
            ></CampThumb>
          </CampThumbnail>
          <CampInfo>
            <TopArea>
              <CampName>{camp.facltNm}</CampName>
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
              </CampLike>
            </TopArea>
            <BottomArea>
              <campDesc></campDesc>
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
