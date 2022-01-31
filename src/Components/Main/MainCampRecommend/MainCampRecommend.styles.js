import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NearCampList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 760px) {
    display: block;
  }
`;

export const NearCamp = styled(Link)`
  width: 240px;
  height: 268px;
  display: block;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  border-radius: 2px;

  &:hover {
    box-shadow: 0px 2px 8px #f0f1f2;
    box-sizing: border-box;
    transition: all 0.5s ease;
  }

  @media screen and (max-width: 760px) {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
`;

export const CampThumb = styled.img`
  width: 100%;
  height: 150px;

  background-color: darkgray;

  @media screen and (max-width: 760px) {
    height: auto;
  }
`;

export const CampInfo = styled.div`
  padding: 18px;
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

export const CampAddr = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
