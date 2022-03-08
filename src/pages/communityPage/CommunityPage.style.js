import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  max-height: calc(100vh - 65px);
  overflow: auto;
  background-color: #fafafa;
`;

const Wrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 960px;
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

const TabsContainer = styled.div`
  width: 200px;
  padding-bottom: 25px;
  @media screen and (max-width: 960px) {
    width: 100%;
    position: fixed;
    top: 30px;
    padding-bottom: 0;
    z-index: 1;
    background-color: #fff;
  }
`;

const TabsWrap = styled.div`
  position: fixed;
  padding-top: 50px;
  background: rgba(255, 255, 255, 1e-5);

  @media screen and (max-width: 960px) {
    display: flex;
    position: initial;
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
  transition: all 200ms ease;

  &:hover {
    color: #389e0d;
  }

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
    font-size: 0.9rem;

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
    padding-top: 50px;
    min-height: auto;
  }
`;

const CreatePostBtn = styled(Link)`
  position: absolute;
  right: 60px;
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
  transition: box-shadow 200ms ease;

  &:hover {
    color: #fff;
    box-shadow: rgb(0 0 0 / 35%) 3px 7px 6px;
  }
  @media screen and (max-width: 960px) {
    position: fixed;
    right: 30px;
  }
`;

export const style = {
  Wrap,
  Container,
  TabsContainer,
  TabsWrap,
  Tabs,
  PostGroup,
  CreatePostBtn,
};
