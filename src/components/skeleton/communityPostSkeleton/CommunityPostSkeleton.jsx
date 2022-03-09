import React from 'react';
import { style } from './CommunityPostSkeleton.style';
import Shimmer from '../Shimmer';

const CommunityPostSkeleton = () => {
  return (
    <ContainerLayout>
      <TypeLayout>
        <Shimmer />
      </TypeLayout>

      <ContentLayout>
        <TitleLayout>
          <Shimmer />
        </TitleLayout>
        <DescriptionLayout>
          <TextLayout>
            <Shimmer />
          </TextLayout>
          <TextLayout>
            <Shimmer />
          </TextLayout>
          <TextLayout>
            <Shimmer />
          </TextLayout>
        </DescriptionLayout>
      </ContentLayout>

      <ImageLayout>
        <Shimmer />
      </ImageLayout>
    </ContainerLayout>
  );
};

export default CommunityPostSkeleton;

const {
  ContainerLayout,
  TypeLayout,
  ContentLayout,
  TitleLayout,
  DescriptionLayout,
  TextLayout,
  ImageLayout,
} = style;
