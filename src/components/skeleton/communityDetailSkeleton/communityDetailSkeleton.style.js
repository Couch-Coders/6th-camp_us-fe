import styled from 'styled-components';

const ContainerLayout = styled.div`
  position: relative;
  width: 740px;
  padding-top: 50px;
  margin: auto;
  height: auto;

  @media screen and (max-width: 960px) {
    display: block;
    width: 100%;
    padding: 50px 10px 0 10px;
    overflow: visible;
  }
`;

const WrapLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const UserLayout = styled.div`
  width: 40%;
  height: 30px;
  border-radius: 5px;
  background-color: #eeeeee;
`;

const TypeLayout = styled.div`
  padding: 4px 6px;
  height: 30px;
  border-radius: 5px;
  background-color: #eeeeee;
`;

const ContentLayout = styled.div`
  margin-top: 50px;
  margin-bottom: 40px;
`;

const TitleLayout = styled.div`
  overflow: hidden;
  height: 40px;
  width: 40%;
  background-color: #eeeeee;
  margin-bottom: 16px;
`;

const TextLayout = styled.div`
  width: 80%;
  overflow: hidden;
  height: 20px;
  background-color: #eeeeee;
  margin-bottom: 5px;
`;

const ImageWrapLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ImageLayout = styled.div`
  width: 50%;
  height: 250px;
  overflow: hidden;
  background-color: #eeeeee;

  @media screen and (max-width: 760px) {
    height: 105px;
  }
`;
export const style = {
  ContainerLayout,
  WrapLayout,
  TypeLayout,
  ContentLayout,
  TitleLayout,
  UserLayout,
  TextLayout,
  ImageWrapLayout,
  ImageLayout,
};
