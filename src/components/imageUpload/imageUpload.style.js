import { Button } from 'antd';
import styled from 'styled-components';

const Wrap = styled.div`
  margin-right: 20px;
`;

const ReviewInput = styled.input`
  display: none;
`;

const PostWrap = styled.div`
  width: 100%;
  margin-top: 22px;
  margin-bottom: 15px;
`;

const PostUpload = styled.div`
  width: 100px;
  height: 100px;
  border: 1px dashed #bdbdbd;
  transition: all 200ms ease;
  cursor: pointer;

  &:hover {
    border: 1px dashed #73d13d;
    color: #73d13d;
  }
`;

const UploadContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 20px;
`;

const PostInput = styled.input`
  display: none;
`;

const ButtonContent = styled(Button)`
  width: 148px;
`;

export const style = {
  Wrap,
  ReviewInput,
  PostWrap,
  PostUpload,
  UploadContent,
  PostInput,
  ButtonContent,
};
