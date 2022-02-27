import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LikeCampWrap = styled.div`
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
    height: 105%;
    transition: all 0.5s ease;
  }

  @media screen and (max-width: 760px) {
    height: auto;
    margin-bottom: 20px;
  }
`;

const CampThumbnail = styled.div`
  width: 155px;
  height: 155px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const CampThumb = styled.img`
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CampInfo = styled.div`
  width: calc(100% - 132px);
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  height: 56px;
  align-items: center;
  padding: 18px;
  border-bottom: 1px solid #f0f0f0;
  box-sizing: border-box;
`;

const CampLike = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const CampName = styled(Link)`
  display: block;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.85);
  margin: 6px 0 8px 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: #8d8d8d;
  }
`;

const BottomArea = styled(Link)`
  display: block;
  align-items: center;
  padding: 18px;
`;

const CampDesc = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #595959;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 8px;
`;

const CampAddr = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.45);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const style = {
  LikeCampWrap,
  CampThumbnail,
  CampThumb,
  CampInfo,
  TopArea,
  CampLike,
  CampName,
  BottomArea,
  CampDesc,
  CampAddr,
};
