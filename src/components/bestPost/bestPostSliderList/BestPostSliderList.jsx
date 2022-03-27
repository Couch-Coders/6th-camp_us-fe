import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { style } from './bestPostSliderList.style';
import parse from 'html-react-parser';

const BestPostSliderList = ({ post }) => {
  const [postType, setPostType] = useState();
  const navigate = useNavigate();

  const moveToDetailPage = (id) => {
    navigate(`/community/detail/?postId=${id}`);
  };

  useEffect(() => {
    switch (post.postType) {
      case 'free':
        setPostType('캠퍼수다');
        return;
      case 'picture':
        setPostType('캠핑한장');
        return;
      case 'question':
        setPostType('궁금해요');
        return;
      default:
        return;
    }
  }, []);

  return (
    <SliderList key={post.postId}>
      <PostWrap onClick={() => moveToDetailPage(post.postId)}>
        <PostContent>
          <PostHeader>
            <HeaderTop>
              <Best>Best</Best>
              <PostType>{postType}</PostType>
            </HeaderTop>
            <Title>{parse(post.title)}</Title>
          </PostHeader>
          <PostFooter>
            <UserWrap>
              <UserAvatar src={post.memberImgUrl} alt="UserAvatar" />
              <Nickname>{post.nickname}</Nickname>
            </UserWrap>
            <LikeWrap>
              <LikeIcon
                isLiked={post.liked}
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1817 0C13.923 0 11.964 1.32942 11 3.27142C10.036 1.32942 8.07697 0 5.81826 0C2.60477 0 0 2.69143 0 6.01173C0 12.5676 11 20 11 20C11 20 22 12.5676 22 6.01173C22 2.69143 19.3952 0 16.1817 0Z" />
              </LikeIcon>
              <LikeCount>{post.likeCnt}</LikeCount>
            </LikeWrap>
          </PostFooter>
        </PostContent>
      </PostWrap>
    </SliderList>
  );
};

export default BestPostSliderList;

const {
  SliderList,
  HeaderTop,
  Best,
  PostType,
  Title,
  PostWrap,
  PostHeader,
  PostContent,
  PostFooter,
  UserWrap,
  UserAvatar,
  Nickname,
  LikeWrap,
  LikeIcon,
  LikeCount,
} = style;
