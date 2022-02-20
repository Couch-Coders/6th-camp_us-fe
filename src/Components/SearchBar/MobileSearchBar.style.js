import styled, { css } from 'styled-components';
import { Input, Select, Rate } from 'antd';

const Form = styled.form`
  position: relative;
  background-color: #73d13d;
  overflow: hidden;

  & * {
    font-weight: 600;
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ bg }) => (bg ? '#fff' : 'none')};

  width: calc(100% - 10px);
  margin: auto;
  margin-bottom: 10px;

  &:first-child {
    margin-top: 10px;
  }

  & .ant-select-selector,
  .ant-input {
    border: 0 !important;
  }
`;
const GrayBox = styled.div`
  background-color: #f8f8f8;
  padding: 6px;
  white-space: nowrap;
  transition: transform 0.5s;
  overflow-x: auto;
  &::-webkit-scrollbar,
  ::-webkit-scrollbar-thumb,
  ::-webkit-scrollbar-track {
    display: none;
  }
`;

const InputContent = styled(Input)`
  max-width: calc(100% - 132px);
`;

const InputTitle = styled.div`
  font-size: 14px;
`;

const SelectAddress = styled(Select)`
  width: calc(45% - 5px);
  height: 32px;
`;

const RateContent = styled(Rate)`
  margin-top: -5px;
`;

const CategoryWrap = styled.div`
  width: max-content;
  display: flex;
  justify-content: start;

  & div.sc-hBUSln {
    display: inline-block;
    width: fit-content;
    padding: 4px 20px;
    height: auto;
    margin-bottom: 0;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  width: calc(10% + 10px);

  & svg {
    color: #73d13d;
    font-weight: bold;
    font-size: 18px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5px;
`;

const ResultArea = styled.div`
  width: calc(100% - 10px);
  min-height: calc(100vh - 194px);
  background-color: #f8f8f8;
  margin: auto;
  margin-top: 8px;
`;

const ResultDefault = styled.div`
  min-height: inherit;
  text-align: center;
  color: #bbbbbb;
  font-size: 0.9rem;
  border: 1px solid #dbdbdb;
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    font-size: 1.3rem;
    margin-right: 4px;
  }
`;

export const style = {
  FlexBox,
  GrayBox,
  Form,
  InputContent,
  InputTitle,
  SelectAddress,
  RateContent,
  CategoryWrap,
  Button,
  ButtonWrap,
  ResultArea,
  ResultDefault,
};
