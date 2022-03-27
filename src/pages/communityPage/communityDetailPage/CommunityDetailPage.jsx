import React, { useContext, useEffect, useState } from 'react';
import { style } from './communityDetailPage.style';
import PostComments from './postComments/PostComments';
import { MessageFilled } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router';
import parse from 'html-react-parser';
import * as api from '../../../service/api';
import { UserContext } from '../../../components/auth/AuthProvider';
import CommunityDetailSkeleton from '../../../components/skeleton/communityDetailSkeleton/CommunityDetailSkeleton';
import ConfirmModal from '../../../components/modal/confirmModal/ConfirmModal';
import LikeButton from '../../../components/likeButton/LikeButton';

const CommunityDetailPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postData, setPostData] = useState(null);
  const [postType, setPostType] = useState();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const postId = params.get('postId');

  const { user } = useContext(UserContext);
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getDetailPost();
  }, []);

  async function getDetailPost() {
    try {
      setIsLoading(true);
      const response = await api.getCommunityDetailPost(postId);
      setPostData(response);
      setReceivedPostType(response.postType);
      setIsLoading(false);
    } catch (e) {
      throw new Error(e);
    }
  }

  function setReceivedPostType(postType) {
    switch (postType) {
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
  }

  const handlePostDelete = async (postId) => {
    try {
      const response = await api.deleteCommunityPost(postId);
      if (response.status === 204) {
        navigate('/community');
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  const handleOpenDeleteModal = () => {
    setIsModalOpen(true);
  };

  const moveToCommunityEditPage = () => {
    navigate(`/community/edit`, {
      state: postData,
    });
  };

  return (
    <>
      {!isLoading && postData ? (
        <Container>
          <TitleWrap>
            <PostType>{postType}</PostType>
            <Title>{postData.title}</Title>
          </TitleWrap>
          <Wrap>
            <UserWrap>
              <AvatarImg src={postData.memberImgUrl} alt="userImage" />
              <UserName>{postData.nickname}</UserName>
              <Time>{state}</Time>
            </UserWrap>
            {user && postData.memberId === user.data.memberId && (
              <PostActionWrap>
                <HandlePost onClick={moveToCommunityEditPage}>수정</HandlePost>
                <HandlePost onClick={handleOpenDeleteModal}>삭제</HandlePost>
              </PostActionWrap>
            )}
          </Wrap>
          <ContentWrap>
            <Content>{parse(postData.content)}</Content>
            <ImageWrap>
              {postData.imgUrlList.map((img, index) => (
                <ImageContent
                  src={img}
                  alt="ImageContent"
                  key={index}
                ></ImageContent>
              ))}
            </ImageWrap>
          </ContentWrap>
          <PostReact>
            {user && postData.memberId === user.data.memberId ? (
              <LikeWrap>
                <PostLike
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  isLike={postData.liked ? true : false}
                >
                  <path d="M16.1817 0C13.923 0 11.964 1.32942 11 3.27142C10.036 1.32942 8.07697 0 5.81826 0C2.60477 0 0 2.69143 0 6.01173C0 12.5676 11 20 11 20C11 20 22 12.5676 22 6.01173C22 2.69143 19.3952 0 16.1817 0Z" />
                </PostLike>
                <LikeCount>{postData.likeCnt}</LikeCount>
              </LikeWrap>
            ) : (
              <LikeButton
                likeCount={postData.likeCnt}
                Id={postData.postId}
                liked={postData.liked}
                role="post"
              />
            )}

            <CommentWrap>
              <MessageFilled />
              <CommentCount>{postData.commentCnt}</CommentCount>
            </CommentWrap>
          </PostReact>
          <PostComments postId={postId} postData={postData} />
          {isModalOpen && (
            <ConfirmModal
              onClose={setIsModalOpen}
              TaskId={postData.postId}
              deleteTask={handlePostDelete}
              role="delete"
            />
          )}
        </Container>
      ) : (
        <CommunityDetailSkeleton />
      )}
    </>
  );
};

export default CommunityDetailPage;

const {
  Container,
  TitleWrap,
  Wrap,
  Title,
  PostType,
  UserWrap,
  AvatarImg,
  UserName,
  Time,
  PostActionWrap,
  HandlePost,
  ContentWrap,
  Content,
  ImageWrap,
  ImageContent,
  PostReact,
  LikeWrap,
  PostLike,
  LikeCount,
  CommentWrap,
  CommentCount,
} = style;
