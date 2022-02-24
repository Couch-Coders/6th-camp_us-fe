import React, { useCallback, useContext, useEffect, useState } from 'react';
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
import useGetGeolocation from '../../Hooks/useGetGeolocation';
import { PageContext } from '../../context/SearchPaginationContext';

const SearchBar = ({
  searchCategory,
  setSearchedCampData,
  isViewLSearchList,
  setIsViewLSearchList,
  campList,
}) => {
  const [campResult, setCampResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [isDetailSearch, setIsDetailSearch] = useState(true);
  const [address, setAddress] = useState({
    category: [],
  });
  const { setTotalElement, setCurrentPage } = useContext(PageContext);

  const category = Tagcategory;

  const { Option } = Select;

  const geoLocation = useGetGeolocation();

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
          doNm: searchCategory.doNm && searchCategory.doNm,
          sigunguNm: searchCategory.sigunguNm && searchCategory.sigunguNm,
          name: searchCategory.name && searchCategory.name,
          rate: searchCategory.rate && searchCategory.rate,
        };
      });
    }
  }, []);

  /* 지역 검색 */
  const sido = district.sido;
  const sigungu = district.sigungu;

  const changedoNm = (value) => {
    setAddress((address) => {
      return { ...address, doNm: value };
    });
    setAddress((address) => {
      return { ...address, sigunguNm: null };
    });
  };

  const changesigunguNm = (value) => {
    setAddress((address) => {
      return { ...address, sigunguNm: value };
    });
  };

  const changename = (value) => {
    const campName = value.target.value;

    setAddress((address) => {
      return { ...address, name: campName === '' ? null : campName };
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

  const getSearchResult = async (sort, page) => {
    console.log(sort);
    try {
      setIsLoading(true);
      let paramAddress = { ...address };
      if (sort === 'distance')
        paramAddress = {
          ...paramAddress,
          mapX: geoLocation.long,
          mapY: geoLocation.lat,
        };
      if (address.category.length > 0) {
        paramAddress = {
          ...paramAddress,
          tag: address.category.join('_'),
        };
      }
      delete paramAddress.category;

      const response = await api.getSearchCamp(paramAddress, page, sort);
      setTotalElement(response.totalElements);
      const campData = response.content;
      setCampResult(campData);
      setSearchedCampData(campData);
      sort === 'distance' &&
        setAddress((address) => {
          return { ...address, doNm: null, sigunguNm: null, rate: null };
        });

      setIsLoading(false);
    } catch (e) {
      throw new Error('에러');
    }
  };

  const changePage = (resultSort, value) => {
    console.log(value);
    console.log(resultSort);
    if (resultSort === undefined) {
      setCurrentPage(value - 1);
      getSearchResult(resultSort, value - 1);
      return;
    }

    const sort = resultSort === '좋아요순' ? 'rate' : 'distance';
    setCurrentPage(value - 1);
    getSearchResult(sort, value - 1);
  };

  const handleSearchEvent = () => {
    setIsDetailSearch(false);
    setIsResultOpen(true);
    setCurrentPage(0);
    getSearchResult();
  };

  const ScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isMobile ? (
        <>
          <MobileForm>
            <MobileFlexBox bg>
              <MobileSelectAddress
                placeholder="시/도"
                onChange={changedoNm}
                value={address.doNm}
              >
                {sido.map((doNm, index) => (
                  <Option key={index} value={doNm}>
                    {doNm}
                  </Option>
                ))}
              </MobileSelectAddress>
              <MobileSelectAddress
                placeholder="시/군/구"
                onChange={changesigunguNm}
                value={address.sigunguNm}
              >
                {address.doNm &&
                  sigungu[address.doNm].map((sigunguNm, index) => (
                    <Option key={index} value={sigunguNm}>
                      {sigunguNm}
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
                onChange={changename}
                value={address.name}
              />
              {searchCategory !== null ? (
                <MobileRateContent
                  onChange={handleRateChange}
                  value={address.rate}
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
              {isResultOpen && campResult.length > 0 ? (
                <>
                  <SearchResult
                    isLoading={isLoading}
                    campResult={campResult}
                    getSearchResult={getSearchResult}
                    changePage={changePage}
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
      ) : (
        <Container>
          <Header>캠핑장 찾아보기</Header>
          <Form>
            <FlexBox>
              <InputTitle>캠핑장 이름</InputTitle>
              <InputContent
                placeholder="캠핑장 이름을 검색하세요."
                onChange={changename}
                value={address.name}
              />
            </FlexBox>
            <FlexBox>
              <InputTitle>지역</InputTitle>
              <div>
                <SelectAddress
                  placeholder="시/도"
                  onChange={changedoNm}
                  value={address.doNm}
                >
                  {sido.map((doNm, index) => (
                    <Option key={index} value={doNm}>
                      {doNm}
                    </Option>
                  ))}
                </SelectAddress>
                <SelectAddress
                  placeholder="시/군/구"
                  onChange={changesigunguNm}
                  value={address.sigunguNm}
                >
                  {address.doNm &&
                    sigungu[address.doNm].map((sigunguNm, index) => (
                      <Option key={index} value={sigunguNm}>
                        {sigunguNm}
                      </Option>
                    ))}
                </SelectAddress>
              </div>
            </FlexBox>
            <FlexBox>
              <InputTitle>최소 별점</InputTitle>
              {searchCategory !== null ? (
                <RateContent onChange={handleRateChange} value={address.rate} />
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
              isLoading={isLoading}
              campResult={campResult}
              getSearchResult={getSearchResult}
              changePage={changePage}
            />
          )}
        </Container>
      )}
    </>
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
