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
  background-color: #e9ecef;
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
  /* & .ant-rate-star-first,
  .ant-rate-star-second {
    color: #fff;
  } */
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
  position: absolute;
  right: 0;
  bottom: -150px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${(props) =>
    props.isResultOpen &&
    css`
      bottom: -70px;
    `}
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
};
