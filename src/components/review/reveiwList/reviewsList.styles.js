import styled, { css } from 'styled-components';
import { Image } from 'antd';
import { Link } from 'react-router-dom';

const List = styled.div`
  width: 100%;

  @media screen and (max-width: 760px) {
    display: block;
  }
`;
/* editingTemplate */
const EditForm = styled.form`
  width: 100%;
  display: block;
  background: #ffffff;
  border-radius: 2px;
  padding: 18px;
  margin-bottom: 20px;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;

  @media screen and (max-width: 760px) {
    position: relative;
  }
`;

const CampNameLoad = styled.div`
  line-height: 24px;
  color: rgba(0, 0, 0, 0.85);
  margin: 6px 0 8px 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 760px) {
    max-width: calc(100% - 164px);
    margin: 6px 0 14px 0;
  }
`;

const EditTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 760px) {
    display: block;
  }
`;

const EditLeft = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const EditRight = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  & > * {
    margin-left: 8px;
    padding: 4px 15px;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
    box-sizing: border-box;
    cursor: pointer;
  }

  @media screen and (max-width: 760px) {
    position: absolute;
    top: 18px;
    right: 18px;
  }
`;

const RateSelect = styled.div`
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  & ul {
    margin-left: 5px;
  }
`;

const EditButton = styled.div`
  color: #fff;
  background: #73d13d;
  border: 1px solid #73d13d;
`;

const CancleButton = styled.button`
  color: #b9b9b9;
  background: #fff;
  border: 1px solid #b9b9b9;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  @media screen and (max-width: 760px) {
    display: block;

    & > div:last-child {
      margin: 12px 0;
    }
  }
`;

/* viewTemplate */
const ListReview = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: 20px;

  &:hover {
    box-shadow: 0px 2px 8px #f0f1f2;
    box-sizing: border-box;
    transition: all 0.5s ease;
  }

  @media screen and (max-width: 760px) {
    overflow: hidden;
  }
`;

const ReviewThumbnail = styled.div`
  width: 100%;
  height: ${({ clickedPage }) =>
    clickedPage === 'mypage' ? '250px' : '174px'};
  overflow: hidden;
  position: relative;

  & .ant-image {
    width: 100%;
    min-height: 100%;
    position: relative;

    @media screen and (max-width: 760px) {
      width: calc(100vw - 20px);
    }
  }

  @media screen and (max-width: 760px) {
    width: calc(100vw - 20px);
    height: 50vw;
  }
`;

const ReviewThumb = styled(Image)`
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${({ image }) => (image ? '100%' : '50%')};
  min-height: 100%;
  border-style: hidden;
  border: 0px;
  border-width: 0px;

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

const ReviewInfo = styled.div`
  width: 100%;
  position: relative;
`;

const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  height: 56px;
  align-items: center;
  padding: 18px;
  padding-bottom: 0;
  box-sizing: border-box;

  & a {
    margin: 0;
  }

  @media screen and (max-width: 760px) {
    display: block;
  }
`;

const HandleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 760px) {
    position: absolute;
    bottom: 18px;
    right: 18px;
  }
`;

const HandleReview = styled.button`
  background: none;
  border: none;
  outline: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.45);
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 0.342);
  }

  @media screen and (max-width: 760px) {
    font-size: 14px;
    margin-left: 12px;
    background-color: rgba(224, 224, 224, 100);
    padding: 5px 10px;
    border-radius: 3px;
  }
`;

const Date = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #bfbfbf;
  padding: 0 18px;
`;

const Nickname = styled.div`
  display: block;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.85);
  margin: 6px 0 8px 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  & ul {
    margin-left: 7px;
  }
`;

const CampName = styled(Link)`
  display: block;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.85);
  margin: 6px 0 8px 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: #8d8d8d;
  }

  & ul {
    margin-left: 7px;
  }
`;

const BottomArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px;
  padding-top: 10px;
  align-items: start;

  @media screen and (max-width: 760px) {
    display: block;
  }
`;

const Content = styled.div`
  white-space: pre-line;
  word-break: break-word;
  display: -webkit-box;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
  &:hover {
    color: #000000;
  }
`;

const ContentWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

const ReadMore = styled.span`
  cursor: pointer;
  color: #9d9d9d;
  font-size: 12px;
`;

const ReviewLike = styled.div`
  ${({ isMyReview }) =>
    isMyReview
      ? css`
          // 내가 쓴 리뷰일 때 스타일
          color: #9d9d9d;
          padding: 5px 15px;
          background-color: #efefef;
          border-radius: 25px;
          font-weight: 400;
          border: 1px solid #e1e1e1;

          & svg {
            display: inline-block;
            margin-right: 4px;
            font-weight: 400;
          }
        `
      : css`
          // 내가 쓴 리뷰가 아닐 때 스타일
          color: ${({ liked }) => (liked ? '#f35656' : '#9d9d9d')};
          padding: 5px 15px;
          background-color: ${({ liked }) => (liked ? '#fff0f0' : '#efefef')};
          border-radius: 25px;
          font-weight: ${({ liked }) => (liked ? '600' : '400')};
          border: ${({ liked }) =>
            liked ? '1px solid #ffc1c1' : '1px solid #e1e1e1'};
          cursor: pointer;

          &:hover {
            color: ${({ liked }) => (liked ? '#f35656' : '#8f8f8f')};
            background-color: ${({ liked }) => (liked ? '#fff0f0' : '#e7e7e7')};
            font-weight: ${({ liked }) => (liked ? '600' : '400')};
            border: ${({ liked }) =>
              liked ? '1px solid #ffc1c1' : '1px solid #d4d4d4'};
            transition: all 0.3s ease;
          }

          & svg {
            display: inline-block;
            margin-right: 4px;
            font-weight: ${({ liked }) => (liked ? '600' : '400')};
          }
        `}

  @media screen and (max-width: 760px) {
    padding: 4px 14px;
    margin-top: 10px;
    display: inline-block;
  }
`;

export const style = {
  List,
  EditForm,
  CampNameLoad,
  EditTop,
  EditLeft,
  EditRight,
  RateSelect,
  EditButton,
  CancleButton,
  Container,
  ListReview,
  ReviewThumbnail,
  ReviewThumb,
  ReviewInfo,
  TopArea,
  HandleContent,
  HandleReview,
  Date,
  Nickname,
  CampName,
  BottomArea,
  Content,
  ContentWrap,
  ReadMore,
  ReviewLike,
};
