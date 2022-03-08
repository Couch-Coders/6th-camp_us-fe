import styled from 'styled-components';

const PostWrap = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
`;

// 베스트 게시글 영역
const BestPost = styled.div`
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
  PostWrap,
  Title,
  BestPost,
  BestPostTitle,
  BestPosts,
  BestPostContent,
};
