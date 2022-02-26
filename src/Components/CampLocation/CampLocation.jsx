import React, { useContext } from 'react';
import { MapMarker, Map } from 'react-kakao-maps-sdk';
import { CampContext } from '../../context/CampContext';
import { style } from './CampLocation.style';
import markerImg from '../../Assets/Images/marker.webp';

const CampLocation = () => {
  const data = useContext(CampContext);

  return (
    <section>
      <Title>찾아오시는 길</Title>

      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: data.mapY,
          lng: data.mapX,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '450px',
        }}
        level={4} // 지도의 확대 레벨
      >
        <MapMarker // 마커를 생성합니다
          position={{
            // 마커가 표시될 위치입니다
            lat: data.mapY,
            lng: data.mapX,
          }}
          image={{
            src: markerImg,
            size: {
              width: 60,
              height: 70,
            }, // 마커이미지의 크기입니다
            options: {
              offset: {
                x: 27,
                y: 69,
              }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            },
          }}
        />
      </Map>
    </section>
  );
};

export default CampLocation;

const { Title } = style;
