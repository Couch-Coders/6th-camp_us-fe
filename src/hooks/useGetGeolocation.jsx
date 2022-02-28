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
          setGeolocation(false);
          throw new Error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        },
      );
    } else {
      setGeolocation(false);
      return;
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return geolocation;
};

export default useGetGeolocation;
