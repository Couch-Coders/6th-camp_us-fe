import React, { useState } from 'react';
import * as district from './AddressData';
import { Input, Space, Select } from 'antd';
import 'antd/dist/antd.css';
import { Section, InnerWrapper, SectionTitle } from '../../../Styles/theme';
import { SearchBox, SelectName, SearchContent } from './MainSearch.styles';

const { Option } = Select;

function MainSearch(props) {
  /* 지역 검색 */
  const sido = district.sido;
  const sigungu = district.sigungu;

  const [address1, setAddress1] = useState('서울특별시');
  const [address2, setAddress2] = useState('강남구');

  const changeValue = (value) => {
    setAddress1(value);
    setAddress2(null);
  };

  const changeValue2 = (value) => {
    setAddress2(value);
  };

  /* 별점 검색 */
  const rateSelectList = [
    '전체',
    '1점 이상',
    '2점 이상',
    '3점 이상',
    '4점 이상',
    '5점 이상',
  ];
  const [RateSelected, setRateSelected] = useState('전체');

  const changeValue3 = (value) => {
    setRateSelected(value);
  };

  /* 캠핑장 이름 검색 */
  const onSearch = (value) => console.log(value);
  const { Search } = Input;

  return (
    <Section grayBg>
      <InnerWrapper>
        <SectionTitle>캠핑장 찾아보기</SectionTitle>
        <SearchBox>
          <Space wrap>
            <SelectName>지역</SelectName>
            <Select placeholder="시/도" onChange={changeValue} value={address1}>
              {sido.map((s) => (
                <Option key={s} value={s}>
                  {s}
                </Option>
              ))}
            </Select>
            <Select
              placeholder="시/군/구"
              onChange={changeValue2}
              value={address2}
            >
              {address1 ? (
                sigungu[address1].map((s) => (
                  <Option key={s} value={s}>
                    {s}
                  </Option>
                ))
              ) : (
                <></>
              )}
            </Select>
            <SelectName>별점</SelectName>
            <Select
              placeholder="별점"
              onChange={changeValue3}
              value={RateSelected}
            >
              {rateSelectList.map((s) => (
                <Option key={s} value={s}>
                  {s}
                </Option>
              ))}
            </Select>
          </Space>
          <SearchContent>
            <Search
              placeholder="캠핑장 이름을 입력하세요."
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
          </SearchContent>
        </SearchBox>
      </InnerWrapper>
    </Section>
  );
}

export default MainSearch;
