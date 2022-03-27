import styled from 'styled-components';

const Post = styled.li`
  background-color: #fff;
  padding: 16px;
  padding-top: 24px;
  margin-bottom: 8px;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 5px;
`;

const PostHandleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostEventContainer = styled.div`
  cursor: pointer;
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
  white-space: normal;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const PostCreateTime = styled.div`
  width: 70px;
  color: #b5b5b5;
  font-size: 14px;
  text-align: right;

  @media screen and (max-width: 600px) {
    width: 110px;
  }
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

const AvatarImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
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

const PostImgWrap = styled.div`
  width: 80%;
  height: 400px;
  overflow: hidden;
  position: relative;
`;

const PostImg = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SlideWrap = styled.div`
  .slick-dots {
    position: static;
  }
`;

const PostReact = styled.div`
  margin-top: 8px;
  display: flex;
`;

const LikeWrap = styled.div`
  display: flex;
  align-items: center;
`;

const PostLike = styled.svg`
  width: 22px;
  height: 20px;
  margin-right: 5px;
  fill: ${({ isLike }) => (isLike ? '#ff7875' : '#e0e0e0')};
`;

const LikeCount = styled.span`
  font-size: 14px;
  line-height: 19px;
  color: #262626;
`;

const CommentWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  & svg {
    color: #e0e0e0;
    font-size: 22px;
  }
`;

const CommentCount = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  margin-left: 10px;
  color: #262626;
`;

export const style = {
  Post,
  PostHandleWrap,
  PostEventContainer,
  PostType,
  PostTop,
  PostTitle,
  PostCreateTime,
  PostUserSet,
  PostImgWrap,
  PostUser,
  AvatarImg,
  Nickname,
  SlideWrap,
  HandleContent,
  HandleReview,
  PostContent,
  PostImg,
  PostReact,
  LikeWrap,
  PostLike,
  LikeCount,
  CommentWrap,
  CommentCount,
};
