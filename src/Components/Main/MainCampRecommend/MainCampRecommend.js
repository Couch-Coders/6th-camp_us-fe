import React, { useState, useEffect } from 'react';
import * as campService from '../../../Service/camps';
import Image from '../../../Assets/Images/default_image.png';
import { Section, InnerWrapper, SectionTitle } from '../../../Styles/theme';
import {
  NearCampList,
  NearCamp,
  CampThumbnail,
  CampThumb,
  CampInfo,
  CampLike,
  CampName,
  CampAddr,
} from './MainCampRecommend.styles';

function MainCampRecommend() {
  const [campData, setCampData] = useState([]);

  async function getCampData() {
    const response = await campService.getCamp();
    setCampData(response);
  }

  useEffect(() => {
    getCampData();
  }, []);

  return (
    <Section>
      <InnerWrapper>
        <SectionTitle>내 근처 캠핑장 추천</SectionTitle>
        <NearCampList>
          {campData.slice(0, 3).map((camp) => (
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
          ))}
        </NearCampList>
      </InnerWrapper>
    </Section>
  );
}

export default MainCampRecommend;
