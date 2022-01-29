import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { CampContext } from '../../context/CampContext';
import Slider from 'react-slick';

const CampInformation = ({ reviewImg }) => {
  const data = useContext(CampContext);

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: 'block', color: 'black' }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Title>소개글</Title>
      <Intro>{data.intro}</Intro>
      <SliderWrap sliderLength={3}>
        <Slider {...settings}>
          {reviewImg.map(() => (
            <slide>
              <SlideImage />
            </slide>
          ))}
          <slide>
            <SlideImage />
          </slide>
          <slide>
            <SlideImage />
          </slide>
        </Slider>
      </SliderWrap>
      <NoticeWrap>
        <Notice>기재된 사항과 다를 수 있습니다.</Notice>
        <Notice>
          자세한 문의사항이 있으시면 홈페이지 또는 연락처로 문의주세요.
        </Notice>
      </NoticeWrap>
    </>
  );
};

export default CampInformation;

const Title = styled.title`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  margin-bottom: 21px;
`;

const Intro = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
  padding-bottom: 16px;
`;

const SliderWrap = styled.div`
  width: 480px;
  margin-bottom: 50px;

  .slick-prev {
    left: -57px;
  }

  .slick-next {
    right: -37px;
  }

  .slick-next:before {
    content: '→';
  }

  .slick-prev:before,
  .slick-next:before {
    color: #c2c2c2;
    font-size: 30px;
    opacity: 1;
  }
`;

const SlideImage = styled.div`
  width: 150px;
  height: 150px;
  /* background: url(1:1.png); */
  margin-right: 14px;
  border: 0.1px solid black;
`;

const NoticeWrap = styled.div`
  width: 482px;
  height: 93px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
`;

const Notice = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
`;
