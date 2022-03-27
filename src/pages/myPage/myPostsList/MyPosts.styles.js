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

const PostDivision = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostType = styled.span`
  padding: 4px 6px;
  background-color: #efefef;
  border-radius: 3px;
  color: #919191;
  font-size: 14px;
`;

const HandleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 200ms ease;

  & > div:hover {
    color: #cbcbcb;
  }
`;

const PostDetail = styled.div`
  height: auto;
  cursor: pointer;
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

const HandleReview = styled.div`
  margin-left: 8px;
  font-size: 14px;
  color: #919191;
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

const Like = styled.div`
  width: 22px;
  height: 20px;
  margin-right: 8px;
`;

const LikeIcon = styled.svg`
  cursor: pointer;
  width: 22px;
  height: 20px;
  transition: all 200ms ease;

  path {
    fill: #e0e0e0;
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
  PostDivision,
  Post,
  PostType,
  PostDetail,
  PostTop,
  PostTitle,
  PostCreateTime,
  HandleContent,
  HandleReview,
  PostContent,
  SlideWrap,
  PostImgWrap,
  PostImg,
  PostReact,
  LikeWrap,
  Like,
  LikeIcon,
  LikeCount,
  CommentWrap,
  CommentCount,
};
