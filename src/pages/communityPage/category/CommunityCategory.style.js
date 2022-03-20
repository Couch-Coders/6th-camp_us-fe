import { Pagination } from 'antd';
import styled from 'styled-components';

const PostWrap = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const PaginationContent = styled(Pagination)`
  margin-bottom: 20px;
  text-align: center;
  .ant-select-selector {
    display: none;
  }
`;

export const style = {
  PostWrap,
  Title,
  PaginationContent,
};
