import React, { useState, useEffect } from 'react';
import * as api from '../../../Service/camps';
import Slider from 'react-slick';
import { Section, InnerWrapper, SectionTitle } from '../../../Styles/theme';
import {
  TitleWrap,
  Notice,
  NearCampList,
  SliderWrap,
} from './MainCampRecommend.styles';
import useGetGeolocation from '../../../Hooks/useGetGeolocation';
import NearCamp from './NearCamp/NearCamp';

function MainCampRecommend() {
  const [campData, setCampData] = useState([]);
  const [slideShowCount, setSlideShowCount] = useState();
  const geoLocation = useGetGeolocation();

  /* 모바일사이즈일 때 컨텐츠 갯수 */
  const [isMobile, setIsMobile] = useState(false);
  const ResizeSliderLength = () => {
    if (window.innerWidth <= 960) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    ResizeSliderLength();
  }, []);

  window.addEventListener('resize', ResizeSliderLength);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  async function getAllowLocationCamp(geoLocation) {
    const response = await api.getRecommendCamp(geoLocation);
    console.log(response);
    setCampData(response);
  }

  async function getNotAllowLocationCamp(geoLocation) {
    const response = await api.getRecommendCamp(geoLocation);
    console.log(response);
    setCampData(response);
  }

  useEffect(() => {
    console.log(geoLocation);
    geoLocation.lat && geoLocation.long && getAllowLocationCamp(geoLocation);
    !geoLocation && getNotAllowLocationCamp(geoLocation);
  }, [geoLocation]);

  console.log(geoLocation);
  return (
    <Section>
      <InnerWrapper>
        {geoLocation.lat && geoLocation.long && (
          <SectionTitle>내 근처 캠핑장 추천</SectionTitle>
        )}
        {!geoLocation && (
          <TitleWrap>
            <SectionTitle>서울 주변 캠핑장 추천</SectionTitle>
            <Notice>
              위치를 허용하면 내 주변 캠핑장을 확인할 수 있습니다 !
            </Notice>
          </TitleWrap>
        )}

        <NearCampList>
          <SliderWrap sliderLength={3} isMobile>
            <Slider {...settings}>
              {campData.length > 0 &&
                campData.map((camp) => (
                  <NearCamp camp={camp} geoLocation={geoLocation} />
                ))}
            </Slider>
          </SliderWrap>
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
        </NearCampList>
      </InnerWrapper>
    </Section>
  );
}

export default MainCampRecommend;
