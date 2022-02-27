import React from 'react';
import { useNavigate } from 'react-router';
import { style } from './ResultList.style';
import defaultImage from '../../../../assets/images/default_image.png';

const ResultList = ({ camp }) => {
  let navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/detail?id=${camp.campId}`);
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

const {
  Result,
  Image,
  Content,
  ContentHeader,
  CampTitle,
  LikeWrap,
  LikeCount,
  ContentDescription,
} = style;
