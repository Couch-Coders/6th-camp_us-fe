import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import * as district from './AddressData';
import { Form, Input, Space, Select } from 'antd';
import 'antd/dist/antd.css';
import { Section, InnerWrapper, SectionTitle } from '../../../Styles/theme';
import { SearchBox, SelectName, SearchContent } from './MainSearch.styles';
const { Option } = Select;
function MainSearch(props) {
  const navigate = useNavigate();
  /* 지역 검색 */
  const sido = district.sido;
  const sigungu = district.sigungu;
  const [address, setAddress] = useState({
    address1: '서울특별시',
    address2: '강남구',
    rate: '전체',
    keyword: '',
  });
  const changeValue = (value) => {
    setAddress((address) => {
      return { ...address, address1: value };
    });
    setAddress((address) => {
      return { ...address, address2: null };
    });
  };
  const changeValue2 = (value) => {
    setAddress((address) => {
      return { ...address, address2: value };
    });
  };
  /* 별점 검색 */
  const rateSelectList = ['전체', '1점', '2점', '3점', '4점', '5점'];
  const changeValue3 = (value) => {
    setAddress((address) => {
      return { ...address, rate: value };
    });
  };

  /* 캠핑장 이름 검색 */
  const onSearch = (value) => {
    //console.log(value);
    // setAddress((address) => {
    //   return { ...address, keyword: value };
    // });
    test(value);
    goSearchPage();
  };

  const test = (value) => {
    setAddress((address) => {
      return { ...address, keyword: value };
    });
  };

  const goSearchPage = () => {
    console.log(address);
    navigate('/search', { state: address });
  };
  // console.log(address);
  const { Search } = Input;

  return (
    <Section grayBg>
      <InnerWrapper>
        <SectionTitle>캠핑장 찾아보기</SectionTitle>
        <SearchBox>
          <Space wrap>
            <SelectName>지역</SelectName>
            <Select
              placeholder="시/도"
              onChange={changeValue}
              value={address.address1}
            >
              {sido.map((s) => (
                <Option key={s} value={s}>
                  {s}
                </Option>
              ))}
            </Select>
            <Select
              placeholder="시/군/구"
              onChange={changeValue2}
              value={address.address2}
            >
              {address.address1 ? (
                sigungu[address.address1].map((s) => (
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
              placeholder="최소별점"
              onChange={changeValue3}
              value={address.rate}
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
