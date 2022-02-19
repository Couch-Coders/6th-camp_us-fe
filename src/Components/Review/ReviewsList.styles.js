import styled from 'styled-components';
import { Image } from 'antd';
import { Link } from 'react-router-dom';

export const List = styled.div`
  width: 100%;

  @media screen and (max-width: 760px) {
    display: block;
  }
`;
/* editingTemplate */
export const EditForm = styled.form`
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

export const CampNameLoad = styled.div`
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

export const EditTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 760px) {
    display: block;
  }
`;

export const EditLeft = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const EditRight = styled.div`
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

export const RateSelect = styled.div`
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  & ul {
    margin-left: 5px;
  }
`;

export const EditButton = styled.div`
  color: #fff;
  background: #73d13d;
  border: 1px solid #73d13d;
`;

export const CancleButton = styled.button`
  color: #b9b9b9;
  background: #fff;
  border: 1px solid #b9b9b9;
`;

export const Container = styled.div`
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
export const LikeReview = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
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
    display: block;
    height: auto;
    margin-bottom: 20px;
  }
`;

export const ReviewThumbnail = styled.div`
  width: 155px;
  height: 174px;
  overflow: hidden;
  position: relative;

  & .ant-image {
    width: 155px;
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

export const ReviewThumb = styled(Image)`
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 174%;
  min-height: 100%;
  border-style: hidden;
  border: 0px;
  border-width: 0px;

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

export const ReviewInfo = styled.div`
  width: calc(100% - 132px);
  @media screen and (max-width: 760px) {
    width: 100%;
    position: relative;
  }
`;

export const TopArea = styled.div`
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

export const HandleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 760px) {
    position: absolute;
    bottom: 18px;
    right: 18px;
  }
`;

export const HandleReview = styled.button`
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

export const Date = styled.div`
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

export const Nickname = styled.div`
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

export const CampName = styled(Link)`
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

export const BottomArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px;
  padding-top: 10px;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const Content = styled(Link)`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
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

  @media screen and (max-width: 600px) {
    width: 100%;
    display: block;
    padding-bottom: 10px;
  }
`;

export const ReviewLike = styled.div`
  color: ${({ liked }) => (liked ? '#f35656' : '#9d9d9d')};
  padding: 5px 15px;
  background-color: ${({ liked }) => (liked ? '#fff0f0' : '#efefef')};
  border-radius: 25px;
  font-weight: ${({ liked }) => (liked ? '600' : '400')};
  border: ${({ liked }) => (liked ? '1px solid #ffc1c1' : '1px solid #e1e1e1')};
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

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0;
    margin-top: 10px;
  }
`;
