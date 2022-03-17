import React from 'react';
import { style } from './communityPost.style';
import { MessageFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import parse from 'html-react-parser';
import useGetDate from '../../hooks/useGetDate';

const CommunityPost = ({ categoryType, post }) => {
  const navigate = useNavigate();

  const createdDate = useGetDate(post.createdDate);

  const moveToCommunityDetailPage = () => {
    navigate('/community/detail');
  };

  return (
    <Post>
      <PostHandleWrap>
        <PostType>{categoryType}</PostType>
        <HandleContent>
          <HandleReview>수정</HandleReview>
          <HandleReview>삭제</HandleReview>
        </HandleContent>
      </PostHandleWrap>
      <PostEventContainer onClick={moveToCommunityDetailPage}>
        <PostTop>
          <PostTitle>Title</PostTitle>
          <PostCreateTime>{createdDate}</PostCreateTime>
        </PostTop>
        <PostUserSet>
          <PostUser>
            <AvatarImg src={post.memberImgUrl} alt="회원이미지" />
            <Nickname>닉네임</Nickname>
          </PostUser>
        </PostUserSet>
        <PostContent>{parse(post.content)}</PostContent>
        {post.imgUrlList.map((img) => (
          <PostImg src={img} alt="postImage" />
        ))}
        <PostReact>
          <LikeWrap>
            <Like>
              <LikeIcon
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1817 0C13.923 0 11.964 1.32942 11 3.27142C10.036 1.32942 8.07697 0 5.81826 0C2.60477 0 0 2.69143 0 6.01173C0 12.5676 11 20 11 20C11 20 22 12.5676 22 6.01173C22 2.69143 19.3952 0 16.1817 0Z" />
              </LikeIcon>
            </Like>
            <LikeCount>{post.likeCnt}</LikeCount>
          </LikeWrap>
          <CommentWrap>
            <MessageFilled />
            <CommentCount>{post.commentCnt}</CommentCount>
          </CommentWrap>
        </PostReact>
      </PostEventContainer>
    </Post>
  );
};

export default React.memo(CommunityPost);
const {
  Post,
  PostHandleWrap,
  PostEventContainer,
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
  CommentCount,
} = style;
