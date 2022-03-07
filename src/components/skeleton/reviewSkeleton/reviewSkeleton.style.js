import styled from 'styled-components';

const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border: 1px solid #e9e9e9;
  background-color: #fff;
  border-radius: 2px;
  margin-bottom: 20px;
`;

const ImageLayout = styled.div`
  width: 100%;
  height: 175px;
  overflow: hidden;
  background-color: #eeeeee;

  @media screen and (max-width: 760px) {
    width: 100%;
    height: 50vw;
  }
`;

const ContentLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 16px 24px;
  border-bottom: 1px solid #f0f0f0;
  box-sizing: border-box;
  box-shadow: inset 0px -1px 0px #f0f0f0;
`;

const TitleLayout = styled.div`
  overflow: hidden;
  width: 80%;
  height: 20px;
  background-color: #eeeeee;

  @media screen and (max-width: 760px) {
    display: none;
  }
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

export const style = {
  ContainerLayout,
  ImageLayout,
  ContentLayout,
  HeaderLayout,
  TitleLayout,
  DescriptionLayout,
  TextLayout,
};
