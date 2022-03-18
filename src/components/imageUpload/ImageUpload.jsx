import React, { useRef, useState } from 'react';
import { style } from './imageUpload.style';
import { Spin } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { imageUploader } from '../../service/imageUploder';

const ImageUpload = ({ setImageUpload, pageName }) => {
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const reviewInputRef = useRef();
  const postInputRef = useRef();

  // 변경 버튼 클릭
  const onbuttonClick = (event, role) => {
    event.preventDefault();
    role === 'review' && reviewInputRef.current.click();
    role === 'post' && postInputRef.current.click();
  };

  // 이미지 변경
  const onChange = async (event) => {
    setLoading(true);
    const uploaded = await imageUploader(event.target.files[0]);
    setLoading(false);
    setImageUpload(
      {
        name: `${uploaded.data.original_filename}.${uploaded.data.format}`,
        url: uploaded.data.url,
      },
      'add',
    );
  };

  const handleChange = async (event) => {
    setLoading(true);
    setFileList(event.target.files);
    const uploaded = await imageUploader(event.target.files[0]);
    console.log(uploaded);
    setLoading(false);
    setImageUpload(uploaded.data.url);
  };

  return (
    <Wrap>
      <ReviewInput
        ref={reviewInputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {pageName === 'review' ? (
        !loading ? (
          <ButtonContent
            onClick={(e) => {
              onbuttonClick(e, 'review');
            }}
            icon={<UploadOutlined />}
          >
            Click to Upload
          </ButtonContent>
        ) : (
          <ButtonContent>
            <Spin />
          </ButtonContent>
        )
      ) : !loading ? (
        <PostWrap>
          <PostInput
            ref={postInputRef}
            type="file"
            accept="image/*"
            name="file"
            onChange={handleChange}
          />
          <PostUpload
            onClick={(e) => {
              onbuttonClick(e, 'post');
            }}
          >
            {fileList.length >= 8 ? null : (
              <UploadContent>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </UploadContent>
            )}
          </PostUpload>
        </PostWrap>
      ) : (
        <PostWrap>
          <PostUpload>
            <UploadContent>
              <Spin />
            </UploadContent>
          </PostUpload>
        </PostWrap>
      )}
    </Wrap>
  );
};

export default ImageUpload;

const {
  Wrap,
  ReviewInput,
  PostWrap,
  PostUpload,
  UploadContent,
  PostInput,
  ButtonContent,
} = style;
