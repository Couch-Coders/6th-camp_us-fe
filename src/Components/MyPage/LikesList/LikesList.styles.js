import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LikeList = styled.div`
  width: 100%;

  @media screen and (max-width: 760px) {
    display: block;
  }
`;

export const LikeCamp = styled(Link)`
  width: 100%;
  height: 156px;
  display: flex;
  justify-content: start;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: 20px;

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
    height: auto;
    margin-bottom: 20px;
  }
`;

export const CampThumbnail = styled.div`
  width: 132px;
  height: 155px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 760px) {
    min-height: 200px;
  }
`;

export const CampThumb = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CampInfo = styled.div`
  padding: 18px;
`;

export const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CampLike = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  font-size: 14px;

  * {
    margin-right: 5px;
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

export const BottomArea = styled.div`
  display: flex;
  align-items: center;
`;

export const CampAddr = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
