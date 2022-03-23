import React from 'react';
import Shimmer from '../Shimmer';
import { style } from './bestPostSkeleton.style';

const CommunityCommentSkeleton = () => {
  return (
    <ContainerLayout>
      <TitleLayout>
        <Shimmer />
      </TitleLayout>
      <SliderLayout>
        <SliderListLayout />
        <SliderListLayout />
        <SliderListLayout />
      </SliderLayout>
    </ContainerLayout>
  );
};

export default CommunityCommentSkeleton;

const { ContainerLayout, TitleLayout, SliderLayout, SliderListLayout } = style;
