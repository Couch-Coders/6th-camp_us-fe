import { Select } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import PostEditor from '../../../components/postEditor/PostEditor';

const { Option } = Select;

export default function CommunityWritePage() {
  const [selectesOption, setSelectedOption] = useState('전체');
  const categotyOption = ['전체', '캠퍼수다', '캠핑한장', '궁금해요'];

  const changeCategoryOption = (value) => {
    setSelectedOption(value);
  };

  return (
    <Container>
      <PostWrap>
        <SelectContent
          placeholder="카테고리"
          onChange={changeCategoryOption}
          value={selectesOption}
        >
          {categotyOption.map((option, index) => (
            <Option key={index} value={option}>
              {option}
            </Option>
          ))}
        </SelectContent>
        <Title placeholder="제목을 입력하세요" />
        <PostEditor />
      </PostWrap>
    </Container>
  );
}

const Container = styled.section`
  background-color: #fafafa;
  height: 100vh;
`;

const PostWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 740px;
  padding: 50px 20px;
  margin: auto;
  height: auto;
  background-color: white;
  height: 100vh;
`;

const SelectContent = styled(Select)`
  width: 150px;
`;

const Title = styled.input`
  font-size: 30px;
  padding: 30px 0 10px 0;
  border-bottom: 2px solid #bdbdbd;
  outline: none;

  &::placeholder {
    color: #bdbdbd;
  }
`;
