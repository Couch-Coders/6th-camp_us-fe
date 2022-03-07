import React, { useContext } from 'react';
import { style } from './ResultList.style';
import defaultImage from '../../../../assets/images/default_image.png';
import { Rate } from 'antd';
import { CoordinateContext } from '../../../../context/CoordinateContext';

const ResultList = ({ camp }) => {
  const { changeCampCoordinate } = useContext(CoordinateContext);

  return (
    <Result
      onClick={() => {
        changeCampCoordinate(camp);
      }}
    >
      {camp.firstImageUrl ? (
        <ImageWrap>
          <Image src={camp.firstImageUrl} alt="thumbnail" />
        </ImageWrap>
      ) : (
        <ImageWrap>
          <Image src={defaultImage} alt="thumbnail" />
        </ImageWrap>
      )}
      <Content>
        <ContentHeader>
          <CampTitle>{camp.facltNm}</CampTitle>
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
            <LikeCount>{camp.like}</LikeCount>
          </LikeWrap>
        </ContentHeader>
        <ContentDescription>
          {camp.lineIntro && <p>{camp.lineIntro}</p>}
          <p>{camp.addr1}</p>
        </ContentDescription>
        <Rate
          disabled
          value={camp.rate}
          style={{ fontSize: '12px', paddingLeft: '24px' }}
        />
      </Content>
    </Result>
  );
};

export default React.memo(ResultList);

const {
  Result,
  ImageWrap,
  Image,
  Content,
  ContentHeader,
  CampTitle,
  LikeWrap,
  LikeCount,
  ContentDescription,
} = style;
