import styled from 'styled-components';

const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  margin-right: 7px;
  height: 288px;
  border: 1px solid #e9e9e9;
  background-color: #fff;
  margin-bottom: 8px;

  @media screen and (max-width: 760px) {
    width: 50%;
    height: auto;
  }
`;

const ImageLayout = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  background-color: #eeeeee;

  @media screen and (max-width: 760px) {
    height: 105px;
  }
`;

const ContentLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  DescriptionLayout,
  TextLayout,
};
