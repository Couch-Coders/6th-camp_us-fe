import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button, Spin } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { imageUploader } from '../../service/imageUploder';

const ImageUpload = ({ setImageUpload }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  // 변경 버튼 클릭
  const onbuttonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
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

  return (
    <Wrap>
      <Input
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />

      {!loading ? (
        <ButtonContent onClick={onbuttonClick} icon={<UploadOutlined />}>
          Click to Upload
        </ButtonContent>
      ) : (
        <ButtonContent>
          <Spin />
        </ButtonContent>
      )}
    </Wrap>
  );
};

export default ImageUpload;

const Wrap = styled.div`
  margin-right: 20px;
`;

const Input = styled.input`
  display: none;
`;

const ButtonContent = styled(Button)`
  width: 148px;
`;
