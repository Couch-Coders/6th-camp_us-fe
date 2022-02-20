import React, { useCallback, useEffect, useState } from 'react';
import { Select } from 'antd';
import * as district from '../../Common/AddressData';
import { Tagcategory } from '../../Common/category';
import Tag from '../Tag/Tag';
import { SearchOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { style } from './MobileSearchBar.style';
import SearchResult from './SearchResult/SearchResult';
import * as api from '../../Service/camps';
const MobileSearchBar = ({ searchCategory, setSearchedCampData }) => {
  const [campResult, setCampResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
  const getSearchResult = async () => {
    setIsLoading(false);
    const response = await api.getSearchCamp(address, 0);
    const campData = response.content;
    console.log(campData);
    setCampResult(campData);
    setSearchedCampData(campData);
    setIsLoading(true);
  };
  const handleSearchEvent = () => {
    console.log('ss');
    setIsDetailSearch(false);
    setIsResultOpen(true);
    getSearchResult();
  };

  return (
    <>
      <Form>
        <FlexBox bg>
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
          <ButtonWrap isResultOpen={isResultOpen}>
            <Button type="button" onClick={handleSearchEvent}>
              <SearchOutlined />
            </Button>
          </ButtonWrap>
        </FlexBox>
        <FlexBox bg>
          <InputContent
            placeholder="캠핑장 이름을 검색하세요."
            onChange={changeKeyword}
            value={address.keyword}
          />
          {searchCategory !== null ? (
            <RateContent
              allowHalf
              onChange={handleRateChange}
              defaultValue={searchCategory.rate}
            />
          ) : (
            <RateContent allowHalf onChange={handleRateChange} />
          )}
        </FlexBox>
        {isDetailSearch && (
          <GrayBox>
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
          </GrayBox>
        )}

        {/* <ButtonWrap isResultOpen={isResultOpen}>
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
        </ButtonWrap> */}
      </Form>
      <ResultArea>
        {isResultOpen ? ( // 이거 반대로 해야함!
          <SearchResult
            address={address}
            isLoading={isLoading}
            campResult={campResult}
          />
        ) : (
          <ResultDefault>
            <ExclamationCircleOutlined />
            검색결과가 없습니다.
          </ResultDefault>
        )}
      </ResultArea>
    </>
  );
};

export default MobileSearchBar;

const {
  FlexBox,
  GrayBox,
  Form,
  InputContent,
  InputTitle,
  SelectAddress,
  RateContent,
  CategoryWrap,
  Button,
  ButtonWrap,
  ResultArea,
  ResultDefault,
} = style;
