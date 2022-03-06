import React, { useContext } from 'react';
import { MapMarker, Map } from 'react-kakao-maps-sdk';
import { CampContext } from '../../../context/CampContext';
import { style } from './campLocation.style';
import markerImg from '../../../assets/images/marker.webp';

const CampLocation = () => {
  const data = useContext(CampContext);

  return (
    <section>
      <Map
        center={{
          lat: data.mapY,
          lng: data.mapX,
        }}
        style={{
          width: '100%',
          height: '450px',
        }}
        level={4}
      >
        <MapMarker
          position={{
            lat: data.mapY,
            lng: data.mapX,
          }}
          image={{
            src: markerImg,
            size: {
              width: 60,
              height: 70,
            },
            options: {
              offset: {
                x: 27,
                y: 69,
              },
            },
          }}
        />
      </Map>
    </section>
  );
};

export default CampLocation;

const { Title } = style;
