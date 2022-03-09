import { Select } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

const { Option } = Select;

export default function CommunityWritePage() {
  const [selectesOption, setSelectedOption] = useState('전체');
  const categotyOption = ['전체', '캠퍼수다', '캠핑한장', '궁금해요'];

  const changeCategoryOption = (value) => {
    setSelectedOption(value);
  };

  return (
    <div>
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
    </div>
  );
}

const SelectContent = styled(Select)`
  width: 150px;
`;
