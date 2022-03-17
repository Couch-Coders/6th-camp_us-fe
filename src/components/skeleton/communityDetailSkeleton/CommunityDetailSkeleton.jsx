import React from 'react';
import { style } from './communityDetailSkeleton.style';
import Shimmer from '../Shimmer';

const CommunityDetailSkeleton = () => {
  return (
    <ContainerLayout>
      <WrapLayout>
        <TitleLayout>
          <Shimmer />
        </TitleLayout>
        <TypeLayout>
          <Shimmer />
        </TypeLayout>
      </WrapLayout>
      <WrapLayout>
        <UserLayout></UserLayout>
      </WrapLayout>

      <ContentLayout>
        <TextLayout>
          <Shimmer />
        </TextLayout>
        <TextLayout>
          <Shimmer />
        </TextLayout>
        <TextLayout>
          <Shimmer />
        </TextLayout>
      </ContentLayout>
      <ImageWrapLayout>
        <ImageLayout>
          <Shimmer />
        </ImageLayout>
      </ImageWrapLayout>
    </ContainerLayout>
  );
};

export default CommunityDetailSkeleton;

const {
  ContainerLayout,
  WrapLayout,
  TypeLayout,
  ContentLayout,
  TitleLayout,
  UserLayout,
  TextLayout,
  ImageWrapLayout,
  ImageLayout,
} = style;
