import React, { useEffect, useState } from 'react';
import { Map, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk';
import useGetGeolocation from '../../../hooks/useGetGeolocation';
import EventMarker from './eventMarker/EventMarker';
import styled, { css } from 'styled-components';
import { UnorderedListOutlined } from '@ant-design/icons';

const DEFAULT_X = 127.02761;
const DEFAULT_Y = 37.498095;

const CampLocation = ({
  campList,
  isViewLSearchList,
  setIsViewLSearchList,
  selectedCampCoordinate,
}) => {
  const geoLocation = useGetGeolocation();
  const mobileViewChange = isViewLSearchList ? 'true' : 'false';
  const [campCoordinate, setCampCoordinate] = useState({
    mapX: null,
    mapY: null,
  });

  useEffect(() => {
    if (selectedCampCoordinate.mapX && selectedCampCoordinate.mapY) {
      setCampCoordinate((campCoordinate) => {
        return {
          ...campCoordinate,
          mapX: selectedCampCoordinate.mapX,
          mapY: selectedCampCoordinate.mapY,
        };
      });
    } else if (campList.length > 0) {
      setCampCoordinate((campCoordinate) => {
        return {
          ...campCoordinate,
          mapX: campList[0].mapX,
          mapY: campList[0].mapY,
        };
      });
    }
  }, [campList, selectedCampCoordinate]);

  return (
    <Wrap mobileViewChange={mobileViewChange}>
      <MapStyle
        center={{
          lat: campCoordinate.mapY
            ? campCoordinate.mapY
            : geoLocation.lat
            ? geoLocation.lat
            : DEFAULT_Y,
          lng: campCoordinate.mapX
            ? campCoordinate.mapX
            : geoLocation.long
            ? geoLocation.long
            : DEFAULT_X,
        }}
        level={3}
      >
        <ZoomControl position={window.kakao.maps.ControlPosition.TOPRIGHT} />
        <MapTypeControl position={window.kakao.maps.ControlPosition.TOPRIGHT} />
        {campList.length > 0 &&
          campList.map((camp) => (
            <EventMarker
              key={camp.id}
              camp={camp}
              selectedCampCoordinate={selectedCampCoordinate}
            />
          ))}
      </MapStyle>
      <ChangeViewBtn onClick={() => setIsViewLSearchList(true)}>
        <UnorderedListOutlined />
      </ChangeViewBtn>
    </Wrap>
  );
};

export default CampLocation;

const Wrap = styled.div`
  display: block;
  max-width: calc(100% - 480px);
  width: 60%;
  height: 100%;
  overflow: hidden;
  ${(props) =>
    props.mobileViewChange === 'false'
      ? css`
          @media screen and (max-width: 960px) {
            max-width: 100%;
            width: 100%;
            min-height: calc(100vh - 194px);
            background-color: #f8f8f8;
            margin: auto;
            margin-top: 144px;

            & > div {
              min-height: calc(100vh - 194px);
            }
          }
        `
      : css`
          @media screen and (max-width: 960px) {
            display: none;
          }
        `}
`;
const MapStyle = styled(Map)`
  width: 100%;
  height: 100%;
`;

const ChangeViewBtn = styled.button`
  border: none;
  outline: none;
  width: 50px;
  height: 50px;
  background-color: #73d13d;
  color: #fff;
  position: fixed;
  z-index: 1;
  bottom: 20px;
  right: 20px;
  font-size: 22px;
  box-shadow: 2px 2px 8px rgb(0 0 0 / 12%);
  border-radius: 4px;
  @media screen and (min-width: 960px) {
    display: none;
  }
`;
