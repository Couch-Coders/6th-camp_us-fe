import React, { useCallback, useEffect, useState } from 'react';
import { Select } from 'antd';
import * as district from '../../Common/AddressData';
import { Tagcategory } from '../../Common/category';
import Tag from '../Tag/Tag';
import { style } from './SearchBar.style';
import SearchResult from './SearchResult/SearchResult';
import * as api from '../../Service/camps';
import useGetGeolocation from '../../Hooks/useGetGeolocation';

const SearchBar = ({ searchCategory, setSearchedCampData, campList }) => {
  const [campResult, setCampResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [isDetailSearch, setIsDetailSearch] = useState(true);
  const [address, setAddress] = useState({
    address1: null,
    address2: null,
    rate: null,
    keyword: null,
    category: [],
  });

  const category = Tagcategory;

  const { Option } = Select;

  const geoLocation = useGetGeolocation();

  useEffect(() => {
    searchCategory && setCampResult(campList);
    searchCategory && setIsResultOpen(true);
    searchCategory && setIsDetailSearch(false);
  }, []);

  useEffect(() => {
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
    const campName = value.target.value;

    setAddress((address) => {
      return { ...address, keyword: campName === '' ? null : campName };
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

  const getSearchResult = async (sort) => {
    console.log(sort);
    const myLocation = sort === undefined ? null : geoLocation;
    setIsLoading(false);
    const category = address.category.join('_');
    const response = await api.getSearchCamp(
      address,
      0,
      category,
      sort,
      myLocation,
    );
    const campData = response.content;
    setCampResult(campData);
    setSearchedCampData(campData);
    setIsLoading(true);
  };

  const handleSearchEvent = () => {
    setIsDetailSearch(false);
    setIsResultOpen(true);
    getSearchResult();
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
          {address.address1 &&
            sigungu[address.address1].map((address2, index) => (
              <Option key={index} value={address2}>
                {address2}
              </Option>
            ))}
        </SelectAddress>
        <InputTitle>최소 별점</InputTitle>
        {searchCategory !== null ? (
          <RateContent
            allowHalf
            onChange={handleRateChange}
            defaultValue={searchCategory.rate}
          />
        ) : (
          <RateContent allowHalf onChange={handleRateChange} />
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
      {isResultOpen && campResult.length > 0 && (
        <SearchResult
          address={address}
          isLoading={isLoading}
          campResult={campResult}
          getSearchResult={getSearchResult}
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
