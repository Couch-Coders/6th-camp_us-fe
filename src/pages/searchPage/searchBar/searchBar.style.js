import styled, { css } from 'styled-components';
import { Input, Select, Rate } from 'antd';

/* PC design */
const Container = styled.div`
  position: relative;
  width: 40%;
  min-width: 480px;
  height: 100%;
  padding: 0 75px 0 20px;
  overflow-y: hidden;
`;

const Header = styled.header`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  padding: 22px 0 32px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ResetSearch = styled.span`
  padding: 8px;
  border: 1px solid #bdbdbd;
  color: #bdbdbd;
  font-size: 0.9rem;
  align-items: center;
  display: flex;
  cursor: pointer;

  & svg {
    margin: 4px;
  }
`;

const Form = styled.form`
  position: relative;
`;

const InputContent = styled(Input)`
  max-width: 300px;
`;

const InputTitle = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #333333;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const RateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const SelectAddress = styled(Select)`
  width: 98px;
  height: 32px;
  margin-left: 8px;
`;

const CategoryWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const Button = styled.button`
  width: 166px;
  height: 40px;
  color: white;
  background: #73d13d;
  border-radius: 2px;
  border: 0;
  cursor: pointer;
  margin-bottom: 10px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;

  ${(props) =>
    props.isResultOpen &&
    css`
      bottom: -70px;
    `}

  & button {
    width: calc(50% - 4px);
  }
`;

const RateWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

/* Mobile design */

const MobileForm = styled.form`
  position: fixed;
  background-color: #73d13d;
  overflow: hidden;
  z-index: 1;
  width: 100%;

  & * {
    font-weight: 600;
  }
`;

const MobileFlexBox = styled.div`
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
const MobileGrayBox = styled.div`
  background-color: #f8f8f8;
  white-space: nowrap;

  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;

  &::after {
    display: inline-block;
    content: '';
    clear: both;
    position: absolute;
    left: 124px;
    top: 10px;
    width: 1px;
    height: 20px;
    background-color: #c1c1c1;
  }
`;

const MobileInputContent = styled(Input)`
  max-width: calc(100% - 132px);
`;

const MobileSelectAddress = styled(Select)`
  width: calc(45% - 5px);
  height: 32px;
`;

const MobileRateContent = styled(Rate)`
  margin-right: 10px;
  min-width: 140px;
`;

const MobileResetSearch = styled.span`
  border: 1px solid #ff7875;
  border-radius: 3px;
  box-sizing: border-box;
  background-color: #fff;
  color: #ff7875;
  padding: 2px 8px;
  margin: 0 8px;

  & svg {
    margin-right: 4px;
  }
`;

const MobileCategoryWrap = styled.div`
  width: max-content;
  display: flex;
  justify-content: start;
  align-items: center;
  /* background-color: #e7e7e7; */
  transition: transform 0.5s;
  padding: 6px;
  padding-left: 0px;
  margin-left: 6px;
  overflow-x: auto;
  &::-webkit-scrollbar,
  ::-webkit-scrollbar-thumb,
  ::-webkit-scrollbar-track {
    background-color: transparent;
    height: 1px;
  }

  & div.sc-hBUSln {
    display: inline-block;
    width: fit-content;
    padding: 4px 20px;
    height: auto;
  }
  & .sc-bdvvtL {
    margin-bottom: 0 !important;
  }
`;

const MobileButton = styled.button`
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

const MobileButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5px;
  margin-right: 10px;
`;

const MobileResultArea = styled.div`
  width: calc(100% - 10px);
  min-height: calc(100vh - 194px);
  background-color: #f8f8f8;
  margin: auto;
  margin-top: 144px;
`;

const MobileResultDefault = styled.div`
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

const ChangeViewBtn = styled.button`
  border: none;
  outline: none;
  width: 50px;
  height: 50px;
  background-color: #73d13d;
  color: #fff;
  position: fixed;
  z-index: 1;
  bottom: 20px;
  right: 20px;
  font-size: 22px;
  box-shadow: 2px 2px 8px rgb(0 0 0 / 12%);
  border-radius: 4px;
`;

const TopBtn = styled.button`
  border: none;
  outline: none;
  background-color: #e1e5e9;
  color: #222;
  width: 100%;
  padding: 12px 0;

  & span {
    color: #73d13d;
    margin-right: 4px;
  }
`;

export const style = {
  Container,
  Header,
  ResetSearch,
  Form,
  InputContent,
  InputTitle,
  SelectAddress,
  CategoryWrap,
  RateWrap,
  FlexBox,
  RateContainer,
  Button,
  ButtonWrap,
  MobileFlexBox,
  MobileGrayBox,
  MobileForm,
  MobileInputContent,
  MobileSelectAddress,
  MobileRateContent,
  MobileResetSearch,
  MobileCategoryWrap,
  MobileButton,
  MobileButtonWrap,
  MobileResultArea,
  MobileResultDefault,
  ChangeViewBtn,
};
