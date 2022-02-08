import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.div`
  width: 100%;

  @media screen and (max-width: 760px) {
    display: block;
  }
`;

export const LikeReview = styled.div`
  width: 100%;
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

export const ReviewThumbnail = styled.div`
  width: 155px;
  height: 174px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const ReviewThumb = styled.img`
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ReviewInfo = styled.div`
  width: calc(100% - 132px);
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

export const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  height: 56px;
  align-items: center;
  padding: 18px;
  padding-bottom: 0;
  box-sizing: border-box;

  & a {
    margin: 0;
  }
`;

export const HandleContent = styled.div`
  display: flex;
  align-items: center;
`;

export const HandleReview = styled.button`
  background: none;
  border: none;
  outline: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.45);
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 0.342);
  }
`;

export const Date = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #bfbfbf;
  padding: 0 18px;
`;

export const CampName = styled(Link)`
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

  & ul {
    margin-left: 7px;
  }
`;

export const BottomArea = styled(Link)`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
  padding: 18px;
  padding-top: 10px;

  &:hover {
    color: #000000;
  }
`;
