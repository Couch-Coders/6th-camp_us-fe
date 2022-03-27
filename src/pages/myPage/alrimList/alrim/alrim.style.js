import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AlrimWrap = styled.div`
  display: flex;
  justify-content: start;
  background: ${({ checked, read }) =>
    checked ? '#f5f5f5' : read ? '#f5f5f5' : '#ffffff'};
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
    position: relative;
    margin-bottom: 20px;
  }
`;

const CheckedArea = styled(Link)`
  width: calc(100% - 50px);
  display: flex;
  justify-content: start;
  align-items: center;

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

const Thumbnail = styled.div`
  width: 88px;
  height: 88px;
  overflow: hidden;
  position: relative;
  margin-left: 18px;
  border-radius: 8px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const Thumb = styled.img`
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Info = styled.div`
  width: calc(100% - 88px);
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

const TopArea = styled.div`
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

const AlrimInfo = styled.div`
  width: calc(100% - 18px);
`;

const Type = styled.span`
  font-size: 14px;
  color: gray;
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 4px;
`;

const AlrimContent = styled.div`
  font-weight: normal;
  margin-top: 4px;
`;
const DeleteBtn = styled.button`
  padding: 18px;
  background: none;
  outline: none;
  border: none;
  color: #000;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 760px) {
    position: absolute;
    top: 18px;
    right: 18px;
    padding: 0;
  }
`;

const BottomArea = styled.div`
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

const AlrimFrom = styled.div`
  color: #000000;
  &::after {
    display: inline-block;
    content: '|';
    clear: both;
    margin: 0 4px 0 8px;
    color: rgba(0, 0, 0, 0.45);
  }
`;

const Date = styled.div`
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.45);
`;

export const style = {
  AlrimWrap,
  CheckedArea,
  Thumbnail,
  Thumb,
  Info,
  TopArea,
  AlrimInfo,
  Type,
  AlrimContent,
  DeleteBtn,
  BottomArea,
  AlrimFrom,
  Date,
};
