import React from 'react';
import MainSearch from './mainSearch/MainSearch';
import MainCampRecommend from './mainCampRecommend/MainCampRecommend';
import MainBestReview from './mainBestReview/MainBestReview';

const MainPage = () => {
  return (
    <>
      <MainSearch />
      <MainCampRecommend />
      <MainBestReview />
    </>
  );
};

export default MainPage;
