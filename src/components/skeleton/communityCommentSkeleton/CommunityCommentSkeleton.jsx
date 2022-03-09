import React from 'react';
import { style } from './CommunityCommentSkeleton.style';
import Shimmer from '../Shimmer';

const CommunityCommentSkeleton = () => {
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
    </ContainerLayout>
  );
};

export default CommunityCommentSkeleton;

const {
  ContainerLayout,
  TypeLayout,
  ContentLayout,
  TitleLayout,
  DescriptionLayout,
  TextLayout,
} = style;
