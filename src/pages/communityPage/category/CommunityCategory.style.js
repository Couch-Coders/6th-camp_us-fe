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

// 포스트 영역
const PostList = styled.div``;

const Post = styled.div`
  background-color: #fff;
  padding: 16px;
  padding-top: 24px;
  margin-bottom: 8px;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 5px;
`;

const PostType = styled.span`
  padding: 4px 6px;
  background-color: #efefef;
  border-radius: 3px;
  color: #919191;
  font-size: 14px;
`;

const PostTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
`;

const PostTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 0;
`;

const PostCreateTime = styled.div`
  color: #b5b5b5;
  font-size: 14px;
`;

const PostUserSet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AvatarImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: violet;
  overflow: hidden;
  margin-right: 8px;
`;

const Nickname = styled.div``;

const HandleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HandleReview = styled.div`
  margin-left: 8px;
  font-size: 14px;
  color: #919191;
  cursor: pointer;
`;

const PostContent = styled.div`
  margin: 8px 0;
  white-space: normal;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const PostImg = styled.div`
  height: 200px;
  background-color: aliceblue;
`;

const PostReact = styled.div`
  margin-top: 8px;
  display: flex;
`;

const LikeWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Like = styled.div`
  width: 22px;
  height: 20px;
  margin-right: 5px;
`;

const LikeIcon = styled.svg`
  cursor: pointer;
  width: 22px;
  height: 20px;
  transition: all 200ms ease;

  path {
    fill: ${({ isLikeState }) => (isLikeState ? '#ff7875' : '#e0e0e0')};
  }

  &:hover {
    transform: scale(1.2);
  }
`;

const LikeCount = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #262626;
`;

const CommentWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  & svg {
    color: #e0e0e0;
    font-size: 22px;
  }
`;

export const style = {
  PostWrap,
  Title,
  BestPost,
  BestPostTitle,
  BestPosts,
  BestPostContent,
  PostList,
  Post,
  PostType,
  PostTop,
  PostTitle,
  PostCreateTime,
  PostUserSet,
  PostUser,
  AvatarImg,
  Nickname,
  HandleContent,
  HandleReview,
  PostContent,
  PostImg,
  PostReact,
  LikeWrap,
  Like,
  LikeIcon,
  LikeCount,
  CommentWrap,
};
