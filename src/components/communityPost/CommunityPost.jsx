import React, { useContext, useEffect, useState } from 'react';
import { style } from './communityPost.style';
import { MessageFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import parse from 'html-react-parser';
import useGetDate from '../../hooks/useGetDate';
import ConfirmModal from '../modal/confirmModal/ConfirmModal';
import { UserContext } from '../auth/AuthProvider';
import Slider from '@ant-design/react-slick';
import LikeButton from '../likeButton/LikeButton';

const CommunityPost = ({ post, deletePost }) => {
  const [receivedPostType, setReceivedPostType] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const createdDate = useGetDate(post.createdDate);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    switch (post.postType) {
      case 'free':
        setReceivedPostType('캠퍼수다');
        return;
      case 'picture':
        setReceivedPostType('캠핑한장');
        return;
      case 'question':
        setReceivedPostType('궁금해요');
        return;
      default:
        return;
    }
  }, [post]);

  const moveToCommunityEditPage = () => {
    navigate(`/community/edit`, {
      state: post,
    });
  };

  const moveToCommunityDetailPage = () => {
    navigate(`/community/detail/?postId=${post.postId}`, {
      state: createdDate,
    });
  };

  const handleDeleteModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <Post>
      <PostHandleWrap>
        <PostType>{receivedPostType}</PostType>
        {user && post.memberId === user.data.memberId && (
          <HandleContent>
            <HandleReview onClick={moveToCommunityEditPage}>수정</HandleReview>
            <HandleReview onClick={handleDeleteModalOpen}>삭제</HandleReview>
          </HandleContent>
        )}
      </PostHandleWrap>
      <PostEventContainer onClick={moveToCommunityDetailPage}>
        <PostTop>
          <PostTitle>{post.title}</PostTitle>
          <PostCreateTime>{createdDate}</PostCreateTime>
        </PostTop>
        <PostUserSet>
          <PostUser>
            <AvatarImg src={post.memberImgUrl} alt="회원이미지" />
            <Nickname>{post.nickname}</Nickname>
          </PostUser>
        </PostUserSet>
        <PostContent>{parse(post.content)}</PostContent>
        <SlideWrap>
          <Slider {...settings}>
            {post.imgUrlList.map((img, index) => (
              <PostImgWrap key={index}>
                <PostImg src={img} alt="postImage" />
              </PostImgWrap>
            ))}
          </Slider>
        </SlideWrap>
        <PostReact>
          <LikeButton
            likeCount={post.likeCnt}
            Id={post.postId}
            liked={post.liked}
            role="post"
          />
          <CommentWrap>
            <MessageFilled />
            <CommentCount>{post.commentCnt}</CommentCount>
          </CommentWrap>
        </PostReact>
      </PostEventContainer>
      {isModalOpen && (
        <ConfirmModal
          onClose={setIsModalOpen}
          TaskId={post.postId}
          deleteTask={deletePost}
          role="delete"
        />
      )}
    </Post>
  );
};

export default React.memo(CommunityPost);
const {
  Post,
  SlideWrap,
  PostHandleWrap,
  PostEventContainer,
  PostType,
  PostTop,
  PostTitle,
  PostCreateTime,
  PostUserSet,
  PostUser,
  PostImgWrap,
  AvatarImg,
  Nickname,
  HandleContent,
  HandleReview,
  PostContent,
  PostImg,
  PostReact,
  CommentWrap,
  CommentCount,
} = style;
