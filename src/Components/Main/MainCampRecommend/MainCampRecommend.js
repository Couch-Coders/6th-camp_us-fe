import React, { useState, useEffect } from 'react';
import * as api from '../../../Service/camps';
import Slider from 'react-slick';
import { Section, InnerWrapper, SectionTitle } from '../../../Styles/theme';
import {
  TitleWrap,
  Notice,
  NearCampList,
  SliderWrap,
  SkeletonWrap,
} from './MainCampRecommend.styles';
import useGetGeolocation from '../../../Hooks/useGetGeolocation';
import NearCamp from './NearCamp/NearCamp';
import Skeleton from '../../Skeleton/Skeleton';

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
        {geoLocation.lat && geoLocation.long && campData.length > 0 && (
          <SectionTitle>내 근처 캠핑장 추천</SectionTitle>
        )}
        {!geoLocation && campData.length > 0 && (
          <TitleWrap>
            <SectionTitle>서울 주변 캠핑장 추천</SectionTitle>
            <Notice>
              위치를 허용하면 내 주변 캠핑장을 확인할 수 있습니다 !
            </Notice>
          </TitleWrap>
        )}

        <NearCampList>
          <SliderWrap sliderLength={3} isMobile>
            {campData.length > 0 ? (
              <Slider {...settings}>
                {campData.map((camp) => (
                  <NearCamp camp={camp} geoLocation={geoLocation} />
                ))}
              </Slider>
            ) : (
              <>
                <SectionTitle>캠핑장을 불러오는 중입니다... ⛺️</SectionTitle>
                <SkeletonWrap>
                  <Skeleton component="recommend" isMobile={isMobile} />
                  <Skeleton component="recommend" isMobile={isMobile} />
                  {!isMobile && <Skeleton component="recommend" />}
                </SkeletonWrap>
              </>
            )}
          </SliderWrap>
        </NearCampList>
      </InnerWrapper>
    </Section>
  );
}

export default MainCampRecommend;
