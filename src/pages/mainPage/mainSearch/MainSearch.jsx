import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router';
import * as district from '../../../common/addressData';
import { Rate, Input, Space, Select } from 'antd';
import 'antd/dist/antd.css';
import { Section, InnerWrapper, SectionTitle } from '../../../styles/theme';
import { style } from './mainSearch.styles';
import ResetRate from '../../../components/resetRate/ResetRate';
const { Option } = Select;

function MainSearch() {
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

  // 지역 도 변경
  const changedoNm = (value) => {
    setAddress((address) => {
      return { ...address, doNm: value };
    });

    setAddress((address) => {
      return { ...address, sigunguNm: null };
    });
  };

  // 지역 시군구 변경
  const changesigunguNm = (value) => {
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

  //  캠핑장 검색
  const onSearch = (value) => {
    setAddress((address) => {
      return { ...address, name: value === '' ? null : value };
    });
    setIsSearch(true);
  };

  const resetRateCount = useCallback(() => {
    setAddress((address) => {
      return { ...address, rate: null };
    });
  }, []);

  const { Search } = Input;

  useEffect(() => {
    if (isSearch === true) {
      navigate('/search', { state: address });
    }
  }, [isSearch]);

  return (
    <Section grayBg>
      <InnerWrapper>
        <SectionTitle>캠핑장 찾아보기</SectionTitle>
        <SearchBox>
          <Space wrap>
            <SelectName>지역</SelectName>
            <Select
              placeholder="시/도"
              onChange={changedoNm}
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
              onChange={changesigunguNm}
              value={address.sigunguNm}
            >
              {address.doNm ? (
                sigungu[address.doNm].map((sigunguNm, index) => (
                  <Option key={index} value={sigunguNm}>
                    {sigunguNm}
                  </Option>
                ))
              ) : (
                <></>
              )}
            </Select>
            <SelectName>별점</SelectName>
            <Rate onChange={handleRateChange} value={address.rate} />
            <ResetRate resetRateCount={resetRateCount} />
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

const { SearchBox, SelectName, SearchContent } = style;
