import React from 'react';
import MainSearch from './mainSearch/MainSearch';
import MainCampRecommend from './mainCampRecommend/MainCampRecommend';
import MainBestReview from './mainBestReview/MainBestReview';
import styled from 'styled-components';
import bannerImg from '../../assets/images/banner.webp';

const MainPage = () => {
  return (
    <>
      <Section>
        <Banner src={bannerImg} alt="banner" />
      </Section>
      <MainSearch />
      <MainCampRecommend />
      <MainBestReview />
    </>
  );
};

export default MainPage;

const Section = styled.section`
  width: 770px;
  height: 385px;
  margin: 0 auto;

  @media screen and (max-width: 760px) {
    width: 100%;
    padding: 20px;
    height: auto;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 20px;
    height: 210px;
  }
`;

const Banner = styled.img`
  width: 100%;
  height: auto;
`;
