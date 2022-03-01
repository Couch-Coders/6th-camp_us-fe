import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BestReviewList = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const BestReview = styled(Link)`
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
  &:hover img {
    width: 105%;
    transition: all 0.5s ease;
  }
  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const ReviewThumbnail = styled.div`
  width: 170px;
  height: 127.5px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 200px;
  }
`;

const ReviewImg = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

const ReviewContent = styled.div`
  margin: 0 25px;
  width: calc(100% - 270px);
  height: 127.5px;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0;
    padding: 18px;
    height: auto;
  }
`;

const CampName = styled.div`
  color: #000;
  font-size: 17px;
  font-weight: bold;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ReviewInfo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 8px 0;
`;

const Reviewer = styled.div`
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  margin-right: 8px;
`;

const Content = styled.div`
  color: #000000;
  height: 65px;
  white-space: normal;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const ReviewLike = styled.div`
  width: 50px;
  color: #000;

  & svg {
    display: inline-block;
    margin-right: 4px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0 18px;
  }
`;

export const style = {
  BestReviewList,
  BestReview,
  ReviewThumbnail,
  ReviewImg,
  ReviewContent,
  CampName,
  ReviewInfo,
  Reviewer,
  Content,
  ReviewLike,
};
