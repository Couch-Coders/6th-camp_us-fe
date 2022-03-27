import { message, Select } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import ImageUpload from '../imageUpload/ImageUpload';
import PostEditor from '../postEditor/PostEditor';
import { style } from './postSetter.style';

const { Option } = Select;

const PostSetter = ({
  onSubmitPost,
  onOpenModal,
  onChangePostContents,
  onChangeTitle,
  onChangeSelectedCategoryType,
  setImageUpload,
  deleteImage,
  postOption,
}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const categotyOption = ['캠퍼수다', '캠핑한장', '궁금해요'];

  const confirmBeforeSubmit = () => {
    if (selectedOption === '카테고리') {
      message.warning('카테고리를 선택하면 게시글 등록이 가능합니다.');
      return;
    }

    if (postOption.postTitle === '') {
      message.warning('제목을 입력하면 게시글 등록이 가능합니다.');
      return;
    }

    if (postOption.postTitle.length > 25) {
      message.warning('제목은 25자 이하만 입력 가능합니다.');
      return;
    }

    onSubmitPost();
  };

  useEffect(() => {
    switch (postOption.categoryType) {
      case 'free':
        setSelectedOption('캠퍼수다');
        return;
      case 'picture':
        setSelectedOption('캠핑한장');
        return;
      case 'question':
        setSelectedOption('궁금해요');
        return;
      default:
        setSelectedOption('카테고리');
    }
  }, [postOption]);

  const onChangeCategoryOption = (value) => {
    setSelectedOption(value);
    onChangeSelectedCategoryType(value);
  };

  return (
    <PostWrap>
      <SelectContent
        placeholder="카테고리"
        onChange={onChangeCategoryOption}
        value={selectedOption}
      >
        {categotyOption.map((option, index) => (
          <Option key={index} value={option}>
            {option}
          </Option>
        ))}
      </SelectContent>
      <Title
        placeholder="제목을 입력하세요"
        onChange={onChangeTitle}
        value={postOption.postTitle}
      />
      <PostEditor
        postContent={postOption.postContent}
        onChangePostContents={onChangePostContents}
      />
      <ImageWrap>
        {postOption.postImage.length < 6 && (
          <ImageUpload setImageUpload={setImageUpload} pageName="community" />
        )}
        {postOption.postImage.length > 0 &&
          postOption.postImage.map((img, index) => (
            <PostImgWrap key={index}>
              <PostImgClose
                onClick={() => {
                  deleteImage(index);
                }}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.92473 5.99916L11.6122 0.411663C11.6908 0.318806 11.6247 0.177734 11.5033 0.177734H10.0783C9.99437 0.177734 9.91401 0.215234 9.85865 0.27952L5.99258 4.88845L2.12651 0.27952C2.07294 0.215234 1.99258 0.177734 1.90687 0.177734H0.481867C0.360439 0.177734 0.294367 0.318806 0.372939 0.411663L5.06044 5.99916L0.372939 11.5867C0.355338 11.6074 0.344047 11.6327 0.340404 11.6596C0.336762 11.6865 0.340922 11.7139 0.352391 11.7386C0.36386 11.7632 0.382156 11.784 0.405107 11.7985C0.428057 11.8131 0.454698 11.8207 0.481867 11.8206H1.90687C1.9908 11.8206 2.07115 11.7831 2.12651 11.7188L5.99258 7.10988L9.85865 11.7188C9.91222 11.7831 9.99258 11.8206 10.0783 11.8206H11.5033C11.6247 11.8206 11.6908 11.6795 11.6122 11.5867L6.92473 5.99916Z"
                    fill="white"
                  />
                </svg>
              </PostImgClose>
              <PostImage src={img} />
            </PostImgWrap>
          ))}
      </ImageWrap>
      <PostActionWrap>
        <FallbackButton type="button" onClick={onOpenModal}>
          나가기
        </FallbackButton>
        <SubmitButton type="button" onClick={confirmBeforeSubmit}>
          작성완료
        </SubmitButton>
      </PostActionWrap>
    </PostWrap>
  );
};

export default React.memo(PostSetter);

const {
  PostWrap,
  SelectContent,
  Title,
  ImageWrap,
  PostImgClose,
  PostImgWrap,
  PostImage,
  PostActionWrap,
  FallbackButton,
  SubmitButton,
} = style;
