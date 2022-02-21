import React from 'react';
import { Map, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk';
import EventMarker from '../SearchLocation/EventMarker/EventMarker';
import styled from 'styled-components';
import { UnorderedListOutlined } from '@ant-design/icons';

const DEFAULT_X = 126.570667;
const DEFAULT_Y = 33.450701;

const CampLocation = ({
  campList,
  isViewLSearchList,
  setIsViewLSearchList,
}) => {
  return (
    isViewLSearchList === false && (
      <>
        <MapStyle // 지도를 표시할 Container
          center={{
            // 지도의 중심좌표
            lat: campList.length > 0 ? campList[0].mapY : DEFAULT_Y,
            lng: campList.length > 0 ? campList[0].mapX : DEFAULT_X,
          }}
          level={3} // 지도의 확대 레벨
        >
          <ZoomControl position={window.kakao.maps.ControlPosition.TOPRIGHT} />
          <MapTypeControl
            position={window.kakao.maps.ControlPosition.TOPRIGHT}
          />
          {campList.length > 0 &&
            campList.map((camp) => <EventMarker key={camp.id} camp={camp} />)}
        </MapStyle>
        <ChangeViewBtn onClick={() => setIsViewLSearchList(true)}>
          <UnorderedListOutlined />
        </ChangeViewBtn>
      </>
    )
  );
};

export default CampLocation;
const MapStyle = styled(Map)`
  width: 60%;
  height: 100%;
  @media screen and (max-width: 960px) {
    width: 100%;
    min-height: calc(100vh - 194px);
    background-color: #f8f8f8;
    margin: auto;
    margin-top: 144px;
  }
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
`;
