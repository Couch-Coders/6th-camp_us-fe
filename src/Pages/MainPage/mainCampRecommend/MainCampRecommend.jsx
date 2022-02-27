import React, { useState, useEffect } from 'react';
import * as api from '../../../service/api';
import Slider from 'react-slick';
import { Section, InnerWrapper, SectionTitle } from '../../../styles/theme';
import useGetGeolocation from '../../../hooks/useGetGeolocation';
import NearCamp from './nearCamp/NearCamp';
import { style } from './mainCampRecommend.styles';
import RecommendSkeleton from '../../../components/skeleton/recommendSkeleton/RecommendSkeleton';

function MainCampRecommend() {
  const [campData, setCampData] = useState([]);
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

  // 위치 허용 가까운 캠핑장 조회
  async function getAllowLocationCamp(geoLocation) {
    const response = await api.getRecommendCamp(geoLocation);
    setCampData(response);
  }

  // 위치 허용 X 가까운 캠핑장 조회
  async function getNotAllowLocationCamp(geoLocation) {
    const response = await api.getRecommendCamp(geoLocation);
    setCampData(response);
  }

  useEffect(() => {
    geoLocation.lat && geoLocation.long && getAllowLocationCamp(geoLocation);
    !geoLocation && getNotAllowLocationCamp(geoLocation);
  }, [geoLocation]);

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
                  <NearCamp
                    camp={camp}
                    geoLocation={geoLocation}
                    key={camp.campId}
                  />
                ))}
              </Slider>
            ) : (
              <>
                <SectionTitle>캠핑장을 불러오는 중입니다... ⛺️</SectionTitle>
                <SkeletonWrap>
                  <RecommendSkeleton />
                  <RecommendSkeleton />
                  {!isMobile && <RecommendSkeleton />}
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

const { TitleWrap, Notice, NearCampList, SliderWrap, SkeletonWrap } = style;
