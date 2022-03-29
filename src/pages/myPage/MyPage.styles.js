import styled, { css } from 'styled-components';
import { Input, Avatar } from 'antd';

const SectionTitle = styled.h2`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  letter-spacing: -0.02em;
  color: #000000;
`;

const MyInfo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  border-top: 1px solid #d9d9d9;
  box-sizing: border-box;
  padding: 25px 0;
`;

const MyProfile = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  & button {
    background: none;
    outline: none;
    border: none;
  }

  & svg {
    cursor: pointer;
  }
`;

const AvatarImg = styled(Avatar)`
  position: relative;

  & span.ant-avatar-string {
    position: relative;
    left: 0;
    transform: scale(1) translateX(0) !important;
    width: 100%;
    height: 100%;
    display: block;
  }

  & img {
    width: 32px;
    height: 32px;
    vertical-align: initial;
  }
`;

const EditUserName = styled(Input)`
  width: 200px;
  margin: 0 5px;
`;

const UserName = styled.div`
  display: block;
  margin: 0 10px;
`;

const TabsContainer = styled.div`
  padding-bottom: 25px;
`;

const TabsWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  height: 50px;
  background: rgba(255, 255, 255, 1e-5);
  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;
  @media screen and (max-width: 960px) {
    border-bottom: 1px solid #f0f0f0;
    white-space: nowrap;
    transition: transform 0.5s;
    overflow-x: auto;
    &::-webkit-scrollbar,
    ::-webkit-scrollbar-thumb,
    ::-webkit-scrollbar-track {
      background-color: transparent;
      height: 1px;
    }
  }
`;

const Tabs = styled.span`
  line-height: 50px;
  display: inline-block;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  margin-right: 24px;
  padding: 0 4px;
  cursor: pointer;

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
`;

export const style = {
  SectionTitle,
  MyInfo,
  MyProfile,
  AvatarImg,
  EditUserName,
  UserName,
  TabsContainer,
  TabsWrap,
  Tabs,
};
