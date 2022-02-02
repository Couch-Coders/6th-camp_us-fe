import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BestReviewList = styled.div`
  position: relative;
`;

export const BestReview = styled(Link)`
  background: #ffffff;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 18px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
  position: relative;

  &:hover {
    box-shadow: 0px 2px 8px #f0f1f2;
    box-sizing: border-box;
    transition: all 0.5s ease;
  }
  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const ReviewImg = styled.img`
  width: 170px;
  height: 127.5px;
  overflow: hidden;

  background-color: darkgray;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

export const ReviewContent = styled.div`
  margin: 0 25px;
  width: calc(100% - 270px);
  height: 127.5px;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0;
    padding-top: 25px;
  }
`;

export const CampName = styled.div`
  color: #000;
  font-size: 17px;
  font-weight: bold;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ReviewInfo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 8px 0;
`;

export const Reviewer = styled.div`
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  margin-right: 8px;
`;

export const Content = styled.div`
  color: #000000;
  height: 65px;
  white-space: normal;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const ReviewLike = styled.div`
  width: 50px;
  color: #000;

  & svg {
    display: inline-block;
    margin-right: 4px;
  }
`;
