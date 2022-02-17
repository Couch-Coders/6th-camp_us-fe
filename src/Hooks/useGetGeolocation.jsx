import { useEffect, useState } from 'react';

const useGetGeolocation = (props) => {
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

  return geolocation;
};

export default useGetGeolocation;
