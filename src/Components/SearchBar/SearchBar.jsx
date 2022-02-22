import React, { useCallback, useEffect, useState } from 'react';
import { Select } from 'antd';
import * as district from '../../Common/AddressData';
import { Tagcategory } from '../../Common/category';
import Tag from '../Tag/Tag';
import { style } from './SearchBar.style';
import {
  SearchOutlined,
  ExclamationCircleOutlined,
  ArrowUpOutlined,
  EnvironmentFilled,
} from '@ant-design/icons';
import SearchResult from './SearchResult/SearchResult';
import * as api from '../../Service/camps';

const SearchBar = ({
  searchCategory,
  setSearchedCampData,
  isViewLSearchList,
  setIsViewLSearchList,
}) => {
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
    const response = await api.getSearchCamp(address, 0);
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

  const ScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const PCver = () => {
    return (
      <Container>
        <Header>캠핑장 찾아보기</Header>
        <Form>
          <FlexBox>
            <InputTitle>캠핑장 이름</InputTitle>
            <InputContent
              placeholder="캠핑장 이름을 검색하세요."
              onChange={changeKeyword}
              value={address.keyword}
            />
          </FlexBox>
          <FlexBox>
            <InputTitle>지역</InputTitle>
            <div>
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
            </div>
          </FlexBox>
          <FlexBox>
            <InputTitle>최소 별점</InputTitle>
            {searchCategory !== null ? (
              <RateContent
                onChange={handleRateChange}
                defaultValue={searchCategory.rate}
              />
            ) : (
              <RateContent onChange={handleRateChange} />
            )}
          </FlexBox>
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
            <Button type="button" onClick={handleSearchEvent}>
              검색
            </Button>
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
  const Mobilever = ({ isViewLSearchList, setIsViewLSearchList }) => {
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
                onChange={handleRateChange}
                defaultValue={searchCategory.rate}
              />
            ) : (
              <MobileRateContent onChange={handleRateChange} />
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

        {isViewLSearchList && (
          <MobileResultArea>
            {isResultOpen ? (
              <>
                <SearchResult
                  address={address}
                  isLoading={isLoading}
                  campResult={campResult}
                />
                <ChangeViewBtn onClick={() => setIsViewLSearchList(false)}>
                  <EnvironmentFilled />
                </ChangeViewBtn>
                <TopBtn onClick={ScrollTop}>
                  <ArrowUpOutlined />
                  Top
                </TopBtn>
              </>
            ) : (
              <MobileResultDefault>
                <ExclamationCircleOutlined />
                검색결과가 없습니다.
              </MobileResultDefault>
            )}
          </MobileResultArea>
        )}
      </>
    );
  };

  return isMobile ? (
    <Mobilever
      isViewLSearchList={isViewLSearchList}
      setIsViewLSearchList={setIsViewLSearchList}
    />
  ) : (
    <PCver />
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
  FlexBox,
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
  ChangeViewBtn,
  TopBtn,
} = style;
