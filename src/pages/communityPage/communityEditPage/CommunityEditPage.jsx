import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { style } from './communityEditPage.style';
import * as api from '../../../service/api';
import ConfirmModal from '../../../components/modal/confirmModal/ConfirmModal';
import PostSetter from '../../../components/postSetter/PostSetter';

export default function CommunityEditPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postOption, setPostOption] = useState({
    postTitle: '',
    postContent: '',
    postImage: [],
    categoryType: '카테고리',
  });

  const navigate = useNavigate();

  const { state } = useLocation();

  useEffect(() => {
    setPostOption((postOption) => {
      return {
        ...postOption,
        postTitle: state.title,
        postContent: state.content,
        postImage: state.imgUrlList,
        categoryType: state.postType,
      };
    });
  }, [state]);

  const onChangeTitle = (event) => {
    const {
      target: { value },
    } = event;

    setPostOption((postOption) => {
      return { ...postOption, postTitle: value };
    });
  };

  const onChangeSelectedCategoryType = useCallback((value) => {
    switch (value) {
      case '캠퍼수다':
        setPostOption((postOption) => {
          return { ...postOption, categoryType: 'free' };
        });
        return;
      case '캠핑한장':
        setPostOption((postOption) => {
          return { ...postOption, categoryType: 'picture' };
        });
        return;
      case '궁금해요':
        setPostOption((postOption) => {
          return { ...postOption, categoryType: 'question' };
        });
        return;
      default:
        return;
    }
  }, []);

  const onChangePostContents = useCallback((value) => {
    setPostOption((postOption) => {
      return { ...postOption, postContent: value };
    });
  }, []);

  const onSubmitPost = useCallback(async () => {
    try {
      const response = await api.changeCommunityPost(postOption, state.postId);

      if (response.status === 200) {
        onFallback();
      }
    } catch (e) {
      throw new Error('Failed to post data');
    }
  }, [postOption]);

  const onFallback = () => {
    navigate(-1);
  };

  const setImageUpload = useCallback((image) => {
    setPostOption((postOption) => {
      return { ...postOption, postImage: [...postOption.postImage, image] };
    });
  }, []);

  const deleteImage = useCallback(
    (imgIndex) => {
      const imgarr = postOption.postImage.filter(
        (img) => img !== postOption.postImage[imgIndex],
      );
      setPostOption((postOption) => {
        return { ...postOption, postImage: imgarr };
      });
    },
    [postOption],
  );

  const onOpenModal = useCallback(() => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }, []);

  return (
    <Container>
      <PostSetter
        onSubmitPost={onSubmitPost}
        onOpenModal={onOpenModal}
        onChangePostContents={onChangePostContents}
        onChangeTitle={onChangeTitle}
        onChangeSelectedCategoryType={onChangeSelectedCategoryType}
        setImageUpload={setImageUpload}
        deleteImage={deleteImage}
        postOption={postOption}
      />
      {isModalOpen && (
        <ConfirmModal
          onClose={setIsModalOpen}
          onFallback={onFallback}
          role="fallback"
        />
      )}
    </Container>
  );
}

const { Container } = style;
