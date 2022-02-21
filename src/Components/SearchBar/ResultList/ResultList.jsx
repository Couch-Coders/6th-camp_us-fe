import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import defaultImage from '../../../Assets/Images/default_image.png';
const ResultList = ({ camp }) => {
  // console.log(camp.firstImageUrl);

  let navigate = useNavigate();

  const goToDetail = () => {
    navigate('/detail');
  };

  return (
    <Result onClick={goToDetail}>
      {camp.firstImageUrl ? (
        <Image src={camp.firstImageUrl} alt="thumbnail" />
      ) : (
        <Image src={defaultImage} alt="thumbnail" />
      )}
      <Content>
        <ContentHeader>
          <CampTitle>{camp.facltNm}</CampTitle>
        </ContentHeader>
        <ContentDescription>
          <span>{camp.lineIntro}</span>
          <span>{camp.addr1}</span>
        </ContentDescription>
        <LikeWrap>
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.19898 0C7.93888 0 6.84598 0.796875 6.30815 1.96094C5.77032 0.796875 4.67743 0 3.41732 0C1.62456 0 0.171387 1.61328 0.171387 3.60352C0.171387 7.5332 6.30815 11.9883 6.30815 11.9883C6.30815 11.9883 12.4449 7.5332 12.4449 3.60352C12.4449 1.61328 10.9917 0 9.19898 0Z"
              fill="#FF7875"
            />
          </svg>
          <LikeCount>15</LikeCount>
        </LikeWrap>
      </Content>
    </Result>
  );
};

export default React.memo(ResultList);

const Result = styled.li`
  display: flex;
  width: 100%;
  height: 170px;
  list-style: none;
  margin-bottom: 8px;
  cursor: pointer;
  border: 1px solid #e9e9e9;
  box-sizing: border-box;
  background-color: #fff;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Image = styled.img`
  width: 130px;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 16px 24px;
  border-bottom: 1px solid #f0f0f0;
  box-sizing: border-box;
  box-shadow: inset 0px -1px 0px #f0f0f0;
`;

const CampTitle = styled.span`
  font-size: 16px;
`;

const LikeWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 0 24px 16px 24px;
`;

const LikeCount = styled.div`
  padding-top: 3px;
  margin-left: 5px;
  font-size: 14px;
`;

const ContentDescription = styled.div`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  font-size: 13px;
  color: #161616;
  padding: 16px 24px;
  white-space: normal;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  & span {
    display: block;
  }
  & span:last-child {
    color: #adadad;
  }
`;
