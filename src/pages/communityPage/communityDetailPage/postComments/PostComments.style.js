import styled from 'styled-components';
import { Pagination } from 'antd';

const Container = styled.div`
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
`;

const EditForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const EditButton = styled.div`
  color: #fff;
  background: #73d13d;
  border: 1px solid #73d13d;
  cursor: pointer;
  width: 80px;
  height: 30px;
  text-align: center;
  margin-left: 8px;
  line-height: 30px;
`;

const PaginationContent = styled(Pagination)`
  text-align: center;
  .ant-select-selector {
    display: none;
  }
`;

export const style = {
  Container,
  EditForm,
  EditButton,
  PaginationContent,
};
