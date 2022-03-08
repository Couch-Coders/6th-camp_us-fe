import styled from 'styled-components';

const Wrap = styled.div`
  margin-bottom: 16px;
  padding: 10px 20px;
  border: 1px solid #e1e1e1;
  background-color: #ffffff;
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
  width: 80%;
  min-height: 200px;
  border: 1px solid #e1e1e1;
  border-radius: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fff;
  transition: border 200ms ease;
  cursor: pointer;

  &:hover {
    border: 1px solid #73d13d;
  }

  &:nth-child(2n) {
    margin: 0 20px;
  }
`;

export const style = {
  Wrap,
  BestPostTitle,
  BestPosts,
  BestPostContent,
};
