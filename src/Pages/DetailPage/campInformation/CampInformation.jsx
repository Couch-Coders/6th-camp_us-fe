import React, { useContext } from 'react';
import { CampContext } from '../../../context/CampContext';
import Slider from 'react-slick';
import Tag from '../../../components/tag/Tag';
import { style } from './campInformation.style';
import {
  CampReviewNotification,
  CampInfoNotification,
} from '../../../components/notice/Notice';
import { Image } from 'antd';

const CampInformation = ({ reviewImg, campInfo }) => {
  const data = useContext(CampContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Title>소개글</Title>
      <Intro>{data.intro}</Intro>
      {reviewImg.length < 1 ? (
        <CampReviewNotification />
      ) : (
        <SliderWrap sliderLength={3} length={reviewImg.length}>
          <Slider {...settings}>
            {reviewImg.map((img) => (
              <ImageWrap key={img.reviewId}>
                <Image src={img.imgUrl} />
              </ImageWrap>
            ))}
          </Slider>
        </SliderWrap>
      )}

      <CampInfoNotification />
      <Title>캠핑장 시설정보</Title>
      <CampInfoWrap>
        {campInfo.map((item, index) => (
          <Tag tag={item} key={index} />
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
const { Title, Intro, SliderWrap, ImageWrap, CampInfoWrap, Table, Th, Td } =
  style;
