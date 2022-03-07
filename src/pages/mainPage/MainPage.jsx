import React from 'react';
import MainSearch from './mainSearch/MainSearch';
import MainCampRecommend from './mainCampRecommend/MainCampRecommend';
import MainBestReview from './mainBestReview/MainBestReview';
import styled from 'styled-components';
import bannerImg from '../../assets/images/banner.webp';
import logo from '../../assets/images/Logo.svg';

const MainPage = () => {
  return (
    <>
      <Section>
        <Banner src={bannerImg} alt="banner" />
      </Section>
      <MainSearch />
      <MainCampRecommend />
      <MainBestReview />
      <MainFooter>
        <FooterLogo />
        <p>
          <b>CampUs</b>
        </p>
        <p>© 2022 CampUs All rights reserved</p>
      </MainFooter>
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

const MainFooter = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 16px;
  background-color: #f9f9f9;

  @media screen and (max-width: 960px) {
    font-size: 13px;
  }
`;

const FooterLogo = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background: url(${logo}) no-repeat center center / 100%;
  top: 30px;
  left: 50px;

  @media screen and (max-width: 960px) {
    top: 10px;
    left: 10px;
  }
`;
