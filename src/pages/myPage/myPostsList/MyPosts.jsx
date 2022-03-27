import React, { useState } from 'react';
import { style } from './MyPosts.styles';
import { MessageFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import parse from 'html-react-parser';
import Slider from '@ant-design/react-slick';
import useGetDate from '../../../hooks/useGetDate';
import ConfirmModal from '../../../components/modal/confirmModal/ConfirmModal';

const MyPosts = ({ postData, deletePost, editPost }) => {
  const navigate = useNavigate();
  const chargeTime = useGetDate(postData.createdDate);
  const [show, setShow] = useState(false);
  const [post, setPost] = useState({
    commentCnt: postData.commentCnt,
    content: postData.content,
    createdDate: postData.createdDate,
    imgUrlList: postData.imgUrlList,
    likeCnt: postData.likeCnt,
    memberId: postData.memberId,
    postId: postData.postId,
    postType: postData.postType,
    title: postData.title,
  });

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  const moveToCommunityEditPage = () => {
    navigate(`/community/edit`, {
      state: postData,
      clickedPage: 'myPage',
    });
  };

  const moveToCommunityDetailPage = () => {
    navigate(`/community/detail/?postId=${postData.postId}`);
  };

  // postType
  let postType = '';
  switch (post.postType) {
    case 'free':
      postType = '캠퍼수다';
      break;

    case 'picture':
      postType = '캠핑한장';
      break;

    case 'question':
      postType = '궁금해요';
      break;

    default:
      break;
  }

  return (
    <Post>
      <PostDivision>
        <PostType>{postType}</PostType>
        <HandleContent>
          <HandleReview onClick={moveToCommunityEditPage}>수정</HandleReview>
          <HandleReview onClick={() => setShow(true)}>삭제</HandleReview>
        </HandleContent>
        {show && (
          <ConfirmModal
            onClose={setShow}
            TaskId={post.postId}
            deleteTask={deletePost}
            role="delete"
          />
        )}
      </PostDivision>
      <PostDetail onClick={moveToCommunityDetailPage}>
        <PostTop>
          <PostTitle>{post.title}</PostTitle>
          <PostCreateTime>{chargeTime}</PostCreateTime>
        </PostTop>
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
      </PostDetail>
    </Post>
  );
};

export default MyPosts;
const {
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
} = style;
