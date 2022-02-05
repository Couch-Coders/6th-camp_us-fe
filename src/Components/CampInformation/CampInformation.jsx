import React, { useContext, useEffect, useState } from 'react';
import { CampContext } from '../../context/CampContext';
import Slider from 'react-slick';
import CampInfoTag from '../CampInfoTag/CampInfoTag';
import { style } from './CampInformation.style';

const CampInformation = ({ reviewImg, campInfo }) => {
  const [slideShowCount, setSlideShowCount] = useState();
  const data = useContext(CampContext);

  useEffect(() => {
    reviewImg.length === 1 && setSlideShowCount(1);
    reviewImg.length === 2 && setSlideShowCount(2);
    reviewImg.length >= 3 && setSlideShowCount(3);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slideShowCount ? slideShowCount : 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <Title>소개글</Title>
      <Intro>{data.intro}</Intro>
      {reviewImg.length < 1 ? (
        <ImageNoticeWrap>
          <ImageNotice>
            <Notice>등록된 이미지 리뷰가 없습니다.</Notice>
            <Notice>이 캠핑장의 첫 리뷰어가 되어주세요!</Notice>
          </ImageNotice>
        </ImageNoticeWrap>
      ) : (
        <SliderWrap sliderLength={3}>
          <Slider {...settings}>
            {reviewImg.map(() => (
              <div>
                <SlideImage />
              </div>
            ))}
          </Slider>
        </SliderWrap>
      )}

      <NoticeWrap>
        <Notice>기재된 사항과 다를 수 있습니다.</Notice>
        <Notice>
          자세한 문의사항이 있으시면 홈페이지 또는 연락처로 문의주세요.
        </Notice>
      </NoticeWrap>
      <Title>캠핑장 시설정보</Title>
      <CampInfoWrap>
        {campInfo.map((item, index) => (
          <CampInfoTag tag={item} key={index} />
        ))}
      </CampInfoWrap>
      <Table>
        <tbody>
          <tr>
            <Th>주요시설</Th>
            <Td>{data.induty}</Td>
          </tr>
          <tr>
            <Th>사이트간 거리</Th>
            <Td>{data.sitedStnc}</Td>
          </tr>
          <tr>
            <Th>카라반 내부시설</Th>
            <Td>{data.caravInnerFclty}</Td>
          </tr>
          <tr>
            <Th>글램핑 내부시설</Th>
            <Td>{data.glampInnerFclty}</Td>
          </tr>
          <tr>
            <Th>캠핑 장비대여</Th>
            <Td>{data.eqpmnLendCl}</Td>
          </tr>
          <tr>
            <Th>반료동물 출입</Th>
            <Td>{data.animalCmgCl}</Td>
          </tr>
          <tr>
            <Th>화로대</Th>
            <Td>{data.brazierCl}</Td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default CampInformation;

const {
  Title,
  Intro,
  ImageNoticeWrap,
  ImageNotice,
  SliderWrap,
  SlideImage,
  NoticeWrap,
  Notice,
  CampInfoWrap,
  Table,
  Th,
  Td,
} = style;
