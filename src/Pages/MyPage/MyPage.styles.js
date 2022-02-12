import styled, { css } from 'styled-components';
import { Input, Avatar } from 'antd';

export const SectionTitle = styled.h2`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  letter-spacing: -0.02em;
  color: #000000;
`;

export const MyInfo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  border-top: 1px solid #d9d9d9;
  box-sizing: border-box;
  padding: 25px 0;
`;

export const MyProfile = styled.div`
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

export const AvatarImg = styled(Avatar)`
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

export const EditUserName = styled(Input)`
  width: 200px;
  margin: 0 5px;
`;

export const UserName = styled.div`
  display: block;
  margin: 0 10px;
`;

export const MyActivity = styled.ul`
  list-style: none;
  margin: 0;
  margin-left: 70px;
  display: flex;
  justify-content: start;
  align-items: center;

  & li {
    padding-right: 25px;
    color: #434343;
  }
  & li:last-child {
    padding-right: 0;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-bottom: 25px;
`;

export const TabsWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  width: 267px;
  height: 57px;
  background: rgba(255, 255, 255, 1e-5);
  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;
`;

export const InfoTabs = styled.span`
  height: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;

  ${(props) =>
    props.selectedTabs === 'likesList'
      ? css`
          color: #389e0d;
          border-bottom: 2px solid #389e0d;
        `
      : css`
          color: #000000;
        `}
`;

export const LocationTabs = styled.span`
  height: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;

  ${(props) =>
    props.selectedTabs === 'myReviews'
      ? css`
          color: #389e0d;
          border-bottom: 2px solid #389e0d;
        `
      : css`
          color: #000000;
        `}
`;

export const ReviewTabs = styled.span`
  height: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;

  ${(props) =>
    props.selectedTabs === 'alrimList'
      ? css`
          color: #389e0d;
          border-bottom: 2px solid #389e0d;
        `
      : css`
          color: #000000;
        `}
`;
