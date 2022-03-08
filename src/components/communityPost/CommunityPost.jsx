import React from 'react';
import { style } from './communityPost.style';
import { MessageFilled } from '@ant-design/icons';

const CommunityPost = () => {
  return (
    <PostList>
      <Post>
        <PostType>캠퍼수다</PostType>
        <PostTop>
          <PostTitle>캠핑장 꿀팁</PostTitle>
          <PostCreateTime>3시간전</PostCreateTime>
        </PostTop>
        <PostUserSet>
          <PostUser>
            <AvatarImg>
              <img src="" alt="회원이미지" />
            </AvatarImg>
            <Nickname>닉네임</Nickname>
          </PostUser>
          <HandleContent>
            <HandleReview>수정</HandleReview>
            <HandleReview>삭제</HandleReview>
          </HandleContent>
        </PostUserSet>
        <PostContent>
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </PostContent>
        <PostImg>이미지 슬라이드 영역</PostImg>
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
            <LikeCount>10</LikeCount>
          </LikeWrap>
          <CommentWrap>
            <MessageFilled />
            10
          </CommentWrap>
        </PostReact>
      </Post>
    </PostList>
  );
};

export default CommunityPost;
const {
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
} = style;
