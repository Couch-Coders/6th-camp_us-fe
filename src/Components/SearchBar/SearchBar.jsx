import React, { useCallback, useEffect, useState } from 'react';
import { Select } from 'antd';
import * as district from '../../Common/AddressData';
import { Tagcategory } from '../../Common/category';
import Tag from '../Tag/Tag';
import { style } from './SearchBar.style';
import { SearchOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import SearchResult from './SearchResult/SearchResult';
import * as api from '../../Service/camps';

const SearchBar = ({ searchCategory, setSearchedCampData }) => {
  /* 디스플레이 사이즈에 따라 보이는 컴포넌트 구분 */
  const [isMobile, setIsMobile] = useState(false);
  const ResizeDisplay = () => {
    if (window.innerWidth <= 960) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    ResizeDisplay();
  }, []);
  window.addEventListener('resize', ResizeDisplay);

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
    //const response = await api.getSearchCamp(address, 0);
    const response = await api.getSearchCampTemporary();
    const campData = response[0].content;
    setCampResult(campData);
    setSearchedCampData(campData);
    setIsLoading(true);
  };

  const handleSearchEvent = () => {
    setIsDetailSearch(false);
    setIsResultOpen(true);
    getSearchResult();
  };

  const PCver = () => {
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
        {isResultOpen && (
          <SearchResult
            address={address}
            isLoading={isLoading}
            campResult={campResult}
          />
        )}
      </Container>
    );
  };

  const Mobilever = () => {
    return (
      <>
        <MobileForm>
          <MobileFlexBox bg>
            <MobileSelectAddress
              placeholder="시/도"
              onChange={changeAddress1}
              value={address.address1}
            >
              {sido.map((address1, index) => (
                <Option key={index} value={address1}>
                  {address1}
                </Option>
              ))}
            </MobileSelectAddress>
            <MobileSelectAddress
              placeholder="시/군/구"
              onChange={changeAddress2}
              value={address.address2}
            >
              {sigungu[address.address1].map((address2, index) => (
                <Option key={index} value={address2}>
                  {address2}
                </Option>
              ))}
            </MobileSelectAddress>
            <MobileButtonWrap isResultOpen={isResultOpen}>
              <MobileButton type="button" onClick={handleSearchEvent}>
                <SearchOutlined />
              </MobileButton>
            </MobileButtonWrap>
          </MobileFlexBox>
          <MobileFlexBox bg>
            <MobileInputContent
              placeholder="캠핑장 이름을 검색하세요."
              onChange={changeKeyword}
              value={address.keyword}
            />
            {searchCategory !== null ? (
              <MobileRateContent
                allowHalf
                onChange={handleRateChange}
                defaultValue={searchCategory.rate}
              />
            ) : (
              <MobileRateContent allowHalf onChange={handleRateChange} />
            )}
          </MobileFlexBox>
          <MobileGrayBox>
            <MobileCategoryWrap>
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
            </MobileCategoryWrap>
          </MobileGrayBox>
        </MobileForm>
        <MobileResultArea>
          {isResultOpen ? ( // 이거 반대로 해야함!
            <SearchResult
              address={address}
              isLoading={isLoading}
              campResult={campResult}
            />
          ) : (
            <MobileResultDefault>
              <ExclamationCircleOutlined />
              검색결과가 없습니다.
            </MobileResultDefault>
          )}
        </MobileResultArea>
      </>
    );
  };

  return isMobile ? <Mobilever /> : <PCver />;
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
  MobileFlexBox,
  MobileGrayBox,
  MobileForm,
  MobileInputContent,
  MobileInputTitle,
  MobileSelectAddress,
  MobileRateContent,
  MobileCategoryWrap,
  MobileButton,
  MobileButtonWrap,
  MobileResultArea,
  MobileResultDefault,
} = style;
