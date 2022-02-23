import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TitleWrap = styled.div`
  display: flex;
`;

export const Notice = styled.span`
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.45);
`;

export const NearCampList = styled.div`
  width: 100%;
`;

export const SliderWrap = styled.div`
  .slick-prev {
    left: -57px;
  }

  .slick-next {
    right: -37px;
  }

  .slick-next:before {
    content: '→';
  }

  .slick-cloned {
    display: ${({ length }) => length < 3 && 'none'};
  }

  .slick-track {
    margin: 0;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #c2c2c2;
    font-size: 30px;
    opacity: 1;
  }

  .slick-slide {
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    width: 100%;

    .slick-arrow {
      right: 0;
    }

    .slick-prev:before,
    .slick-next:before {
      display: none;
    }
  }
`;

export const NearCamp = styled.div`
  width: calc(100% - 7px) !important;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  border-radius: 2px;
  margin: 0 auto;

  &:hover {
    box-shadow: 0px 2px 8px #f0f1f2;
    box-sizing: border-box;
    transition: all 0.5s ease;
  }

  &:hover img {
    width: 105%;
    transition: all 0.5s ease;
  }

  @media screen and (max-width: 760px) {
    width: 100%;
    height: auto;
  }
`;

export const CampLink = styled(Link)`
  width: 100%;
  display: block;
`;

export const CampThumbnail = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 760px) {
    height: fit-content;
  }
`;

export const CampThumb = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 760px) {
    width: auto;
    height: 105px;
    min-width: 100%;
    position: relative;
    top: 0;
    left: 0;
    transform: none;
  }
`;

export const CampInfo = styled.div`
  @media screen and (max-width: 760px) {
    padding: 8px;
  }
  padding: 18px;
  text-align: left;
`;

export const CampLike = styled.div`
  @media screen and (max-width: 760px) {
    padding: 8px;
  }

  padding: 18px;
  padding-top: 0;
  display: flex;
  align-items: center;
  color: #000;
  font-size: 14px;
  cursor: pointer;

  * {
    margin-right: 5px;
  }

  &:hover svg {
    opacity: 0.8;
    transform: scale(1.05);
    transition: all 0.5s ease;
  }
`;

export const CampName = styled.div`
  line-height: 24px;
  color: rgba(0, 0, 0, 0.85);
  margin: 6px 0 8px 0;
  font-weight: 600;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CampAddr = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
