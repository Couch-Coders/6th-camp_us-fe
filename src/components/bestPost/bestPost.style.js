import styled from 'styled-components';

const Wrap = styled.div`
  margin-bottom: 16px;
`;

const BestPostTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  margin-bottom: 16px;
`;

const BestPosts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BestPostContent = styled.div`
  width: 100%;
  min-height: 200px;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fff;

  &:nth-child(2n) {
    margin: 0 8px;
  }
`;

export const style = {
  Wrap,
  BestPostTitle,
  BestPosts,
  BestPostContent,
};
