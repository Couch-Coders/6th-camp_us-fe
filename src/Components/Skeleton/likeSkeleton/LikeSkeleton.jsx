import React from 'react';
import { style } from './likeSkeleton.style';
import Shimmer from '../Shimmer';

const LikeSkeleton = () => {
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

export default LikeSkeleton;

const {
  ContainerLayout,
  ImageLayout,
  ContentLayout,
  HeaderLayout,
  TitleLayout,
  DescriptionLayout,
  TextLayout,
} = style;
