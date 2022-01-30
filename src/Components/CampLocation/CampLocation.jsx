import React, { useContext, useEffect } from 'react';
import { CampContext } from '../../context/CampContext';
import { style } from './CampLocation.style';

const CampLocation = () => {
  const data = useContext(CampContext);

  useEffect(() => {
    let mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new window.kakao.maps.LatLng(data.mapY, data.mapX), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
    let map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커가 표시될 위치입니다
    let markerPosition = new window.kakao.maps.LatLng(data.mapY, data.mapX);

    // 마커를 생성합니다
    let marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null);
  }, []);

  return (
    <Section>
      <Title>찾아오시는 길</Title>
      <Map id="map" />
    </Section>
  );
};

export default CampLocation;

const { Title, Map, Section } = style;
