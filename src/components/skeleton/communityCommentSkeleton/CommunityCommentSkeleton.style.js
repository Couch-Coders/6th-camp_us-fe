import styled from 'styled-components';

const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e9e9e9;
  background-color: #fff;
  padding: 16px 24px;
  margin-bottom: 8px;

  @media screen and (max-width: 760px) {
    width: 50%;
    height: auto;
  }
`;

const TypeLayout = styled.div`
  overflow: hidden;
  width: 50px;
  height: 25px;
  background-color: #eeeeee;
  margin-bottom: 12px;
`;

const ContentLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleLayout = styled.div`
  overflow: hidden;
  height: 70px;
  width: 40%;
  background-color: #eeeeee;
  margin-bottom: 16px;
`;

const DescriptionLayout = styled.div`
  height: 100%;
`;

const TextLayout = styled.div`
  overflow: hidden;
  height: 10px;
  background-color: #eeeeee;
  margin-bottom: 5px;
`;

export const style = {
  ContainerLayout,
  TypeLayout,
  ContentLayout,
  TitleLayout,
  DescriptionLayout,
  TextLayout,
};
