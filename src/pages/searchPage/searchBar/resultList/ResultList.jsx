import React, { useContext } from 'react';
import { style } from './ResultList.style';
import defaultImage from '../../../../assets/images/default_image.png';
import CampLike from '../../../../components/campLike/CampLike';
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
            <CampLike
              likeCount={camp.like}
              campId={camp.campId}
              liked={camp.liked}
            />
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
  ContentDescription,
} = style;
