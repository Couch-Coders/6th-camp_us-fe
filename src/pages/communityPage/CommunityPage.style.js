import { Rate } from 'antd';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 960px;
  padding-top: 50px;
  margin: auto;
  height: auto;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 50px 10px 0 10px;
  }
`;

const TabsContainer = styled.div`
  width: 400px;
  padding-bottom: 25px;
`;

const TabsWrap = styled.div`
  padding-top: 50px;
  width: 100%;
  background: rgba(255, 255, 255, 1e-5);
`;

const Tabs = styled.div`
  height: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 24px;
  cursor: pointer;

  ${(props) =>
    props.selectedTabs === props.page
      ? css`
          color: #389e0d;
          font-weight: 600;
        `
      : css`
          color: #000000;
        `}
`;

const PostGroup = styled.footer`
  width: calc(100% - 420px);
  max-height: calc(100vh - 115px);
  overflow-y: auto;
`;

export const style = {
  Container,
  TabsContainer,
  TabsWrap,
  Tabs,
  PostGroup,
};
