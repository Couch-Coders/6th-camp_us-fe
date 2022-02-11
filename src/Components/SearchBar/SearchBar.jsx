import React, { useCallback, useEffect, useState } from 'react';
import { Select } from 'antd';
import * as district from '../../Common/AddressData';
import { Tagcategory } from '../../Common/category';
import Tag from '../Tag/Tag';
import { style } from './SearchBar.style';
import SearchResult from './SearchResult/SearchResult';

const SearchBar = ({ searchCategory, setSearchedCampData }) => {
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [isDetailSearch, setIsDetailSearch] = useState(true);
  const [address, setAddress] = useState({
    address1: '서울특별시',
    address2: '강남구',
    rate: null,
    keyword: '',
    category: [],
  });

  const category = Tagcategory;

  const { Option } = Select;

  useEffect(() => {
    // console.log(searchCategory.rate);
    if (searchCategory !== null) {
      setAddress((address) => {
        return {
          ...address,
          address1: searchCategory.address1,
          address2: searchCategory.address2,
          keyword: searchCategory.keyword,
        };
      });
    }
  }, []);

  /* 지역 검색 */
  const sido = district.sido;
  const sigungu = district.sigungu;

  const changeAddress1 = (value) => {
    setAddress((address) => {
      return { ...address, address1: value };
    });
    setAddress((address) => {
      return { ...address, address2: null };
    });
  };

  const changeAddress2 = (value) => {
    setAddress((address) => {
      return { ...address, address2: value };
    });
  };

  const changeKeyword = (value) => {
    setAddress((address) => {
      return { ...address, keyword: value.target.value };
    });
  };

  const handleRateChange = (value) => {
    setAddress((address) => {
      return { ...address, rate: value };
    });
  };

  const addCategory = useCallback((tag) => {
    setAddress((address) => {
      return { ...address, category: [...address.category, tag] };
    });
  }, []);

  const removeCategory = useCallback((tag) => {
    setAddress((address) => {
      const newArr = address.category.filter((item) => item !== tag);
      return { ...address, category: newArr };
    });
  }, []);

  const handleSearchEvent = () => {
    setIsDetailSearch(false);
    setIsResultOpen(true);
  };

  return (
    <Container>
      <Header>캠핑장 찾아보기</Header>
      <Form>
        <InputTitle>캠핑장 이름</InputTitle>
        <InputContent
          placeholder="캠핑장 이름을 검색하세요."
          onChange={changeKeyword}
          value={address.keyword}
        />
        <InputTitle>지역</InputTitle>
        <SelectAddress
          placeholder="시/도"
          onChange={changeAddress1}
          value={address.address1}
        >
          {sido.map((address1, index) => (
            <Option key={index} value={address1}>
              {address1}
            </Option>
          ))}
        </SelectAddress>
        <SelectAddress
          placeholder="시/군/구"
          onChange={changeAddress2}
          value={address.address2}
        >
          {sigungu[address.address1].map((address2, index) => (
            <Option key={index} value={address2}>
              {address2}
            </Option>
          ))}
        </SelectAddress>
        <InputTitle>최소 별점</InputTitle>
        {searchCategory !== null ? (
          // <RateContent onChange={handleRateChange} defaultValue={searchCategory.rate} />
          <RateContent onChange={handleRateChange} />
        ) : (
          <RateContent onChange={handleRateChange} />
        )}
        {isDetailSearch && (
          <>
            <InputTitle>상세 검색</InputTitle>
            <CategoryWrap>
              {category.map((tag, index) => (
                <Tag
                  key={index}
                  tag={tag}
                  role="category"
                  addCategory={addCategory}
                  removeCategory={removeCategory}
                  category={address.category}
                />
              ))}
            </CategoryWrap>
          </>
        )}

        <ButtonWrap isResultOpen={isResultOpen}>
          {!isDetailSearch && (
            <Button
              type="button"
              onClick={() => {
                setIsDetailSearch(true);
              }}
            >
              상세검색
            </Button>
          )}
          <Button type="button" onClick={handleSearchEvent}>
            검색
          </Button>
        </ButtonWrap>
      </Form>
      {isResultOpen && (
        <SearchResult
          address={address}
          setSearchedCampData={setSearchedCampData}
        />
      )}
    </Container>
  );
};

export default SearchBar;

const {
  Container,
  Header,
  Form,
  InputContent,
  InputTitle,
  SelectAddress,
  RateContent,
  CategoryWrap,
  Button,
  ButtonWrap,
} = style;
