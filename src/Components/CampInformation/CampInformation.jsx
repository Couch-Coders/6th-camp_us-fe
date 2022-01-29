import React, { useContext } from 'react';
import styled from 'styled-components';
import { CampContext } from '../../context/CampContext';
import Slider from 'react-slick';
import CampInfoTag from '../CampInfoTag/CampInfoTag';

const CampInformation = ({ reviewImg, campInfo }) => {
  const data = useContext(CampContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
      </Table>
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

const ImageNoticeWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageNotice = styled.div`
  width: 70%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  margin: 20px 0 50px 0;
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
  margin-bottom: 37px;
`;

const Notice = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
`;

const CampInfoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const Table = styled.table`
  width: 100%;
  padding-bottom: 60px;
`;

const Th = styled.th`
  display: flex;
  justify-content: flex-start;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
`;

const Td = styled.td`
  width: 70%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  padding-bottom: 18px;
`;
