import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import * as district from '../../../Common/AddressData';
import { Rate, Input, Space, Select } from 'antd';
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
    doNm: null,
    sigunguNm: null,
    rate: null,
    name: null,
  });
  const changeValue = (value) => {
    setAddress((address) => {
      return { ...address, doNm: value };
    });
    setAddress((address) => {
      return { ...address, sigunguNm: null };
    });
  };
  const changeValue2 = (value) => {
    setAddress((address) => {
      return { ...address, sigunguNm: value };
    });
  };
  /* 별점 검색 */
  const handleRateChange = (value) => {
    setAddress((address) => {
      return { ...address, rate: value };
    });
  };

  /* 캠핑장 이름 검색 */
  const [isSearch, setIsSearch] = useState(false);
  const onSearch = (value) => {
    setAddress((address) => {
      return { ...address, name: value === '' ? null : value };
    });
    setIsSearch(true);
  };

  useEffect(() => {
    if (isSearch === true) {
      navigate('/search', { state: address });
    }
    console.log('address =', address);
  }, [isSearch]);

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
              value={address.doNm}
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
              value={address.sigunguNm}
            >
              {address.doNm ? (
                sigungu[address.doNm].map((s) => (
                  <Option key={s} value={s}>
                    {s}
                  </Option>
                ))
              ) : (
                <></>
              )}
            </Select>
            <SelectName>별점</SelectName>
            <Rate onChange={handleRateChange} value={address.rate} />
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
