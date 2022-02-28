import styled from 'styled-components';
import { Pagination, Select } from 'antd';

const ResultWrap = styled.section`
  width: 100%;
  border-top: 1px solid #d9d9d9;
`;

const Header = styled.header`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-size: 14px;
`;

const SelectContent = styled(Select)`
  width: 100px;
  position: relative;
  z-index: 0;
`;

const ListWrap = styled.ul`
  width: 100%;
  overflow: auto;
  height: ${(props) => `${props.listHeight}px`};
  overflow-y: auto;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  background-color: #e9ecef;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #aeaeae;
  }
  &::-webkit-scrollbar-track {
    background-color: #eeeeee;
  }
  @media screen and (max-width: 991px) {
    &::-webkit-scrollbar,
    ::-webkit-scrollbar-thumb,
    ::-webkit-scrollbar-track {
      display: none;
    }
  }
`;

const PaginationContent = styled(Pagination)`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;

  .ant-select-selector {
    display: none;
  }

  .ant-pagination-options {
    display: none;
  }
`;

export const style = {
  ResultWrap,
  Header,
  Title,
  SelectContent,
  ListWrap,
  PaginationContent,
};
