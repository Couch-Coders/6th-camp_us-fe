import styled, { css } from 'styled-components';
import { Image } from 'antd';
import { Link } from 'react-router-dom';

const Wrap = styled.div`
  margin-bottom: 24px;
`;

const List = styled.div`
  width: 100%;

  @media screen and (max-width: 760px) {
    display: block;
  }
`;
/* editingTemplate */
const EditForm = styled.form`
  width: 100%;
  background: #ffffff;
  border-radius: 2px;
  padding: 18px;
  margin-bottom: 20px;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;

  &:after {
    display: block;
    content: '';
    clear: both;
  }

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  * {
    cursor: pointer;
    text-align: center;
    width: 80px;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
  }
`;

const EditButton = styled.div`
  color: #fff;
  background: #73d13d;
  border: 1px solid #73d13d;
  margin-bottom: 8px;
`;

const CancleButton = styled.button`
  color: #b9b9b9;
  background: #fff;
  border: 1px solid #b9b9b9;
  margin-left: 8px;
`;

/* viewTemplate */
const Comment = styled.div`
  background: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  align-items: center;
  padding: 18px;
  box-sizing: border-box;

  & a {
    margin: 0;
  }
`;
const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  height: 56px;
  align-items: center;
  padding-bottom: 0;
  box-sizing: border-box;

  & a {
    margin: 0;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Avatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 8px;
`;

const NickName = styled.div``;

const Author = styled.div`
  margin-left: 8px;
  padding: 4px 6px;
  height: 30px;
  background-color: #efefef;
  border-radius: 5px;
  color: #919191;
  font-size: 14px;
`;

const HandleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Handlecomment = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 8px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    color: #a0a0a0;
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

  &:after {
    display: inline-block;
    content: '|';
    clear: both;
    margin: 0 8px;
  }
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

const CampName = styled.div`
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
  justify-content: start;
  padding-top: 10px;
  align-items: start;
`;

const Content = styled.div`
  white-space: normal;
  display: -webkit-box;
`;

const ReadMore = styled.span`
  cursor: pointer;
  color: #9d9d9d;
  font-size: 12px;
`;

const CommentLike = styled.div`
  width: 50px;
  color: ${({ liked }) => (liked ? '#f35656' : '#9d9d9d')};
  transition: all 200ms ease;

  & svg {
    display: inline-block;
    margin-right: 4px;
  }
  ${({ isMyComment }) =>
    isMyComment
      ? css`
          // 내가 쓴 코멘트일 떄 스타일
          cursor: default;
        `
      : css`
          // 내가 쓴 코멘트 아닐 때 스타일
          cursor: pointer;

          &:hover {
            opacity: 0.8;
            color: ${({ liked }) =>
              liked ? 'rgba(243,86,86,0.8)' : 'rgba(157,157,157,0.8)'};
          }
        `}
`;

export const style = {
  Wrap,
  List,
  EditForm,
  ButtonArea,
  EditButton,
  CancleButton,
  Comment,
  TopArea,
  UserInfo,
  Avatar,
  NickName,
  Author,
  HandleContent,
  Handlecomment,
  Date,
  Nickname,
  CampName,
  BottomArea,
  Content,
  ReadMore,
  CommentLike,
};
