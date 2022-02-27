import React from 'react';
import Shimmer from '../Shimmer';
import { style } from './reviewSkeleton.style';

const ReviewSkeleton = () => {
  return (
    <ContainerLayout>
      <ImageLayout>
        <Shimmer />
      </ImageLayout>
      <ContentLayout>
        <HeaderLayout>
          <TitleLayout>
            <Shimmer />
          </TitleLayout>
        </HeaderLayout>
        <DescriptionLayout>
          <TextLayout>
            <Shimmer />
          </TextLayout>
          <TextLayout>
            <Shimmer />
          </TextLayout>
        </DescriptionLayout>
      </ContentLayout>
    </ContainerLayout>
  );
};

export default ReviewSkeleton;

const {
  ContainerLayout,
  ImageLayout,
  ContentLayout,
  HeaderLayout,
  TitleLayout,
  DescriptionLayout,
  TextLayout,
} = style;
