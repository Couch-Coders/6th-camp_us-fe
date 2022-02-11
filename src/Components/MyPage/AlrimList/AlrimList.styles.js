import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AlrimButton = styled.div`
  display: flex;
  margin-bottom: 24px;

  & button {
    margin-right: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 2px 0px 0px 2px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #000000;

    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.027);
    }
  }
`;

export const Notification = styled.div`
  text-align: center;
  background: #fdfdfd;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px;

  & svg {
    font-size: 20px;
    color: #c2c2c2;
  }
`;

export const NotiTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 5px;
`;

export const NotiContent = styled.div`
  font-size: 14px;
  color: #616161;
`;

export const List = styled.div`
  width: 100%;

  @media screen and (max-width: 760px) {
    display: block;
  }
`;

export const Alrim = styled.div`
  display: flex;
  justify-content: start;
  height: 88px;
  background: ${({ checked }) => (checked ? '#f5f5f5' : '#ffffff')};
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: 20px;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 2px 8px #f0f1f2;
    box-sizing: border-box;
    transition: all 0.5s ease;
  }

  &:hover img {
    height: 105%;
    transition: all 0.5s ease;
  }

  @media screen and (max-width: 760px) {
    height: auto;
    margin-bottom: 20px;
  }
`;

export const CheckedArea = styled(Link)`
  width: calc(100% - 50px);
  display: flex;
  justify-content: start;
`;

export const Thumbnail = styled.div`
  width: 88px;
  height: 88px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const Thumb = styled.img`
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Info = styled.div`
  width: calc(100% - 88px);
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

export const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  padding-bottom: 6px;
  box-sizing: border-box;

  font-family: Roboto;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const AlrimInfo = styled.div`
  display: flex;
  justify-content: start;
  width: calc(100% - 18px);
`;

export const Type = styled.div`
  font-weight: bold;
  margin-right: 16px;
  min-width: 50px;
`;

export const AlrimContent = styled.div`
  font-weight: normal;
  max-width: calc(100% - 92px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const DeleteBtn = styled.button`
  padding: 18px;
  background: none;
  outline: none;
  border: none;
  color: #000;
  &:hover {
    cursor: pointer;
  }
`;

export const BottomArea = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 18px;
  padding-top: 0;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
`;

export const AlrimFrom = styled.div`
  color: #000000;
`;

export const Date = styled.div`
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.45);
`;
