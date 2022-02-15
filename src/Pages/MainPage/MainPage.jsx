import React from 'react';
import MainSearch from '../../Components/Main/MainSearch/MainSearch';
import MainCampRecommend from '../../Components/Main/MainCampRecommend/MainCampRecommend';
import MainBestReview from '../../Components/Main/MainBestReview/MainBestReview';
import useGetGeolocation from '../../Hooks/useGetGeolocation';

const MainPage = (props) => {
  const geoLocation = useGetGeolocation();

  geoLocation.lat && geoLocation.long && console.log(geoLocation);
  return (
    <>
      <MainSearch />
      <MainCampRecommend />
      <MainBestReview />
    </>
  );
};

export default MainPage;
