import React from 'react';
import styled from 'styled-components';
import Shimmer from './Shimmer';

const Skeleton = ({ component, isMobile }) => {
  return (
    <>
      {component === 'recommend' ? (
        <RecommendLayout isMobile={isMobile}>
          <RecommendImageLayout isMobile={isMobile}>
            <Shimmer />
          </RecommendImageLayout>
          <ContentLayout>
            <HeaderLayout component={component}>
              <TitleLayout component={component}>
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
        </RecommendLayout>
      ) : (
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
      )}
    </>
  );
};

export default Skeleton;

const RecommendLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ isMobile }) => (isMobile ? '50%' : '33%')};
  margin-right: 7px;
  height: 288px;
  border: 1px solid #e9e9e9;
  background-color: #fff;
  margin-bottom: 8px;

  @media screen and (max-width: 760px) {
    height: auto;
  }
`;

const RecommendImageLayout = styled.div`
  width: 100%;
  height: ${({ isMobile }) => (isMobile ? '105px' : '150px')};
  overflow: hidden;
  background-color: #eeeeee;
`;

const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 170px;
  border: 1px solid #e9e9e9;
  background-color: #fff;
  margin-bottom: 8px;
`;

const ImageLayout = styled.div`
  width: 200px;
  height: 100%;
  overflow: hidden;
  background-color: #eeeeee;
`;

const ContentLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderLayout = styled.div`
  display: ${({ component }) => (component === 'recommend' ? 'none' : 'flex')};
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 16px 24px;
  border-bottom: 1px solid #f0f0f0;
  box-sizing: border-box;
  box-shadow: inset 0px -1px 0px #f0f0f0;
`;

const TitleLayout = styled.div`
  display: ${({ component }) => component === 'recommend' && 'none'};
  overflow: hidden;
  width: 80%;
  height: 20px;
  background-color: #eeeeee;
`;

const DescriptionLayout = styled.div`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  padding: 16px 24px;
`;

const TextLayout = styled.div`
  overflow: hidden;
  height: 10px;
  width: 80%;
  background-color: #eeeeee;
  margin-bottom: 5px;
`;
