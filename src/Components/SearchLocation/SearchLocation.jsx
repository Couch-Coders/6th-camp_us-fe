import React from 'react';
import { Map, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk';
import EventMarker from '../SearchLocation/EventMarker/EventMarker';

const DEFAULT_X = 126.570667;
const DEFAULT_Y = 33.450701;

const CampLocation = ({ campList }) => {
  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: campList.length > 0 ? campList[0].mapY : DEFAULT_Y,
        lng: campList.length > 0 ? campList[0].mapX : DEFAULT_X,
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
