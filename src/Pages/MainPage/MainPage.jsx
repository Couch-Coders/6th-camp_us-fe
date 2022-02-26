import React from 'react';
import MainSearch from '../../Components/Main/MainSearch/MainSearch';
import MainCampRecommend from '../../Components/Main/MainCampRecommend/MainCampRecommend';
import MainBestReview from '../../Components/Main/MainBestReview/MainBestReview';

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
