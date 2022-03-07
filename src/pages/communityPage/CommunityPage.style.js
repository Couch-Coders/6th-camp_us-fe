import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 960px;
  padding-top: 50px;
  margin: auto;
  height: auto;
  overflow: hidden;
  max-height: calc(100vh - 65px);

  @media screen and (max-width: 960px) {
    display: block;
    width: 100%;
    padding: 50px 10px 0 10px;
    overflow: visible;
  }
`;

const TabsContainer = styled.div`
  width: 200px;
  padding-bottom: 25px;
  @media screen and (max-width: 960px) {
    width: 100%;
    position: fixed;
    top: 50px;
    padding-bottom: 0;
    z-index: 1;
    background-color: #fff;
  }
`;

const TabsWrap = styled.div`
  padding-top: 50px;
  width: 100%;
  background: rgba(255, 255, 255, 1e-5);
  @media screen and (max-width: 960px) {
    display: flex;
  }
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

  @media screen and (max-width: 960px) {
    margin-right: 8px;
    padding: 0 4px 4px 4px;
    margin-bottom: 0;

    ${(props) =>
      props.selectedTabs === props.page
        ? css`
            color: #389e0d;
            border-bottom: 2px solid #389e0d;

            font-weight: 600;
          `
        : css`
            color: #000000;
          `}
  }
`;

const PostGroup = styled.div`
  position: relative;
  width: calc(100% - 220px);
  min-height: calc(100vh - 145px);
  overflow-y: auto;
  &::-webkit-scrollbar,
  ::-webkit-scrollbar-thumb,
  ::-webkit-scrollbar-track {
    display: none;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    padding-top: 70px;
    min-height: auto;
  }
`;

const CreatePostBtn = styled(Link)`
  position: absolute;
  right: 16px;
  bottom: 30px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: #389e0d;
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
  border-radius: 50%;
  color: #fff;
  font-size: 18px;

  &:hover {
    color: #fff;
  }
`;

export const style = {
  Container,
  TabsContainer,
  TabsWrap,
  Tabs,
  PostGroup,
  CreatePostBtn,
};
