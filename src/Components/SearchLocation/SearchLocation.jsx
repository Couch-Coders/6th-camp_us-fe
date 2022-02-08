import React, { useMemo, useState } from 'react';
import { Map, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk';
import EventMarker from '../SearchLocation/EventMarker/EventMarker';

const CampLocation = ({ campList }) => {
  console.log(campList);
  const [map, setMap] = useState();

  const bounds = useMemo(() => {
    const bounds = new window.kakao.maps.LatLngBounds();

    campList.forEach((camp) => {
      bounds.extend(new window.kakao.maps.LatLng(camp.mapY, camp.X));
    });
    return bounds;
  }, [campList]);

  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: campList[0].mapY,
        lng: campList[0].mapX,
      }}
      style={{
        // 지도의 크기
        width: '100%',
        height: '450px',
      }}
      onCreate={setMap}
      level={3} // 지도의 확대 레벨
    >
      <ZoomControl position={window.kakao.maps.ControlPosition.TOPRIGHT} />
      <MapTypeControl position={window.kakao.maps.ControlPosition.TOPRIGHT} />
      {campList.map((camp, index) => (
        <EventMarker key={camp.id} camp={camp} bounds={bounds} map={map} />
      ))}
    </Map>
  );
};

export default CampLocation;
