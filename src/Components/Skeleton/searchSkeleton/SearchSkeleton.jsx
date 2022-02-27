import React from 'react';
import { style } from './searchSkeleton.style';
import Shimmer from '../Shimmer';

const SearchSkeleton = () => {
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

export default SearchSkeleton;

const {
  ContainerLayout,
  ImageLayout,
  ContentLayout,
  HeaderLayout,
  TitleLayout,
  DescriptionLayout,
  TextLayout,
} = style;
