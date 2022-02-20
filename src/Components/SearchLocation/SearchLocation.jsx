import React from 'react';
import { Map, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk';
import useGetGeolocation from '../../Hooks/useGetGeolocation';
import EventMarker from '../SearchLocation/EventMarker/EventMarker';

const CampLocation = ({ campList }) => {
  const geoLocation = useGetGeolocation();

  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: campList.length > 0 ? campList[0].mapY : geoLocation.lat,
        lng: campList.length > 0 ? campList[0].mapX : geoLocation.long,
      }}
      style={{
        // 지도의 크기
        width: '60%',
        height: '100%',
      }}
      level={3} // 지도의 확대 레벨
    >
      <ZoomControl position={window.kakao.maps.ControlPosition.TOPRIGHT} />
      <MapTypeControl position={window.kakao.maps.ControlPosition.TOPRIGHT} />
      {campList.length > 0 &&
        campList.map((camp) => <EventMarker key={camp.id} camp={camp} />)}
    </Map>
  );
};

export default CampLocation;
