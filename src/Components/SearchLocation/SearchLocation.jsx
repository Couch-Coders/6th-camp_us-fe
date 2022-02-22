import React from 'react';
import { Map, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk';
import useGetGeolocation from '../../Hooks/useGetGeolocation';
import EventMarker from '../SearchLocation/EventMarker/EventMarker';
import styled, { css } from 'styled-components';
import { UnorderedListOutlined } from '@ant-design/icons';

const DEFAULT_X = 127.02761;
const DEFAULT_Y = 37.498095;

const CampLocation = ({
  campList,
  isViewLSearchList,
  setIsViewLSearchList,
}) => {
  const PropState = isViewLSearchList ? 'true' : 'false';
  console.log('PropState', PropState);
  const geoLocation = useGetGeolocation();

  return (
    <Wrap PropState={PropState}>
      <MapStyle // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat:
            campList.length > 0
              ? campList[0].mapY
              : geoLocation.lat
              ? geoLocation.lat
              : DEFAULT_Y,
          lng:
            campList.length > 0
              ? campList[0].mapX
              : geoLocation.long
              ? geoLocation.long
              : DEFAULT_X,
        }}
        level={3} // 지도의 확대 레벨
      >
        <ZoomControl position={window.kakao.maps.ControlPosition.TOPRIGHT} />
        <MapTypeControl position={window.kakao.maps.ControlPosition.TOPRIGHT} />
        {campList.length > 0 &&
          campList.map((camp) => <EventMarker key={camp.id} camp={camp} />)}
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
    props.PropState === 'false'
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
