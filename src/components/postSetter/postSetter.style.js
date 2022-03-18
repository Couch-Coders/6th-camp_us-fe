import { Select } from 'antd';
import styled from 'styled-components';

const PostWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 740px;
  padding: 30px 20px;
  margin: auto;
  height: auto;
  background-color: white;
  min-height: calc(100vh - 65px);
  overflow: auto;

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 50px 10px 0 10px;
  }
`;

const SelectContent = styled(Select)`
  width: 150px;
`;

const Title = styled.input`
  font-size: 30px;
  font-weight: 600;
  padding: 30px 0 10px 0;
  border-bottom: 2px solid #bdbdbd;
  outline: none;

  &::placeholder {
    color: #bdbdbd;
  }
`;

const ImageWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`;

const PostImgClose = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  right: -10px;
  top: -10px;
  background-color: #bdbdbd;
  border-radius: 50%;
  cursor: pointer;
`;

const PostImgWrap = styled.div`
  position: relative;
  /* border: 0.2px dashed #bdbdbd; */
  margin-top: 22px;
  margin-right: 22px;
  margin-bottom: 15px;
`;

const PostImage = styled.img`
  width: 100px;
  height: 100px;
`;

const PostActionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const FallbackButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 15px;
  height: 40px;
  padding: 5px 20px;
  background-color: #ffffff;
  color: #8dd662;
  border: 1px solid #8dd662;
  border-radius: 3px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 15px;
  height: 40px;
  padding: 5px 20px;
  color: #ffffff;
  background-color: #73d13d;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #8dd662;
  }
`;

export const style = {
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
};
