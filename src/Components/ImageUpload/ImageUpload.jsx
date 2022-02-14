import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button, Spin } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { imageUploader } from '../../Service/imageUploder';

const ImageUpload = () => {
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const onbuttonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    console.log(event.target.files[0]);
    setLoading(true);
    const uploaded = await imageUploader(event.target.files[0]);
    setLoading(false);

    console.log(uploaded);
    // onImageChange({
    //   name: uploaded.original_filename,
    //   url: uploaded.url,
    // });
  };
  return (
    <div>
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
    </div>
  );
};

export default ImageUpload;

const Input = styled.input`
  display: none;
`;

const ButtonContent = styled(Button)`
  width: 148px;
`;
