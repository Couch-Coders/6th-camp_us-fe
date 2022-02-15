import React, { useEffect, useState } from 'react';
import MainSearch from '../../Components/Main/MainSearch/MainSearch';
import MainCampRecommend from '../../Components/Main/MainCampRecommend/MainCampRecommend';
import MainBestReview from '../../Components/Main/MainBestReview/MainBestReview';

const MainPage = (props) => {
  const [geolocation, setGeolocation] = useState({
    lat: null,
    long: null,
  });

  function getLocation() {
    let lat, long;
    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        function (position) {
          lat = position.coords.latitude;
          long = position.coords.longitude;
          setGeolocation((geolocation) => {
            return {
              ...geolocation,
              lat,
              long,
            };
          });
        },
        function (error) {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        },
      );
    } else {
      alert('위치 설정을 허용해주세요!');
      return;
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  geolocation.lat !== null &&
    geolocation.long !== null &&
    console.log(geolocation);

  return (
    <>
      <MainSearch />
      <MainCampRecommend />
      <MainBestReview />
    </>
  );
};

export default MainPage;
