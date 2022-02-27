import React from 'react';
import { style } from './recommendSkeleton.style';
import Shimmer from '../Shimmer';

const RecommendSkeleton = () => {
  return (
    <ContainerLayout>
      <ImageLayout>
        <Shimmer />
      </ImageLayout>
      <ContentLayout>
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

export default RecommendSkeleton;

const {
  ContainerLayout,
  ImageLayout,
  ContentLayout,
  DescriptionLayout,
  TextLayout,
} = style;
