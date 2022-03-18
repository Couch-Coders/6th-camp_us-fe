import React, { useCallback, useContext, useEffect, useState } from 'react';
import * as district from '../../../common/addressData';
import { Tagcategory } from '../../../common/category';
import Tag from '../../../components/tag/Tag';
import SearchResult from './searchResult/searchResult/SearchResult';
import useGetGeolocation from '../../../hooks/useGetGeolocation';
import { style } from './searchBar.style';
import * as api from '../../../service/api';
import { PageContext } from '../../../context/SearchPaginationContext';
import { Rate, Select } from 'antd';
import {
  SearchOutlined,
  ExclamationCircleOutlined,
  RedoOutlined,
  EnvironmentFilled,
} from '@ant-design/icons';
import ResetRate from '../../../components/resetRate/ResetRate';

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
  const [isMobile, setIsMobile] = useState(false);

  const { setTotalElement, setCurrentPage } = useContext(PageContext);

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
          doNm: searchCategory.doNm && searchCategory.doNm,
          sigunguNm: searchCategory.sigunguNm && searchCategory.sigunguNm,
          name: searchCategory.name && searchCategory.name,
          rate: searchCategory.rate && searchCategory.rate,
        };
      });
    }
  }, []);

  useEffect(() => {
    ResizeDisplay();
  }, []);

  const ResizeDisplay = () => {
    if (window.innerWidth <= 960) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  window.addEventListener('resize', ResizeDisplay);

  /* 지역 검색 */
  const sido = district.sido;
  const sigungu = district.sigungu;

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

  // 캠핑장 이름 변경
  const changename = (value) => {
    const campName = value.target.value;

    setAddress((address) => {
      return { ...address, name: campName === '' ? null : campName };
    });
  };

  // 별점 변경
  const handleRateChange = (value) => {
    setAddress((address) => {
      return { ...address, rate: value };
    });
  };

  // 카테고리 추가
  const addCategory = useCallback((tag) => {
    setAddress((address) => {
      return { ...address, category: [...address.category, tag] };
    });
  }, []);

  // 카테고리 삭제
  const removeCategory = useCallback((tag) => {
    setAddress((address) => {
      const newArr = address.category.filter((item) => item !== tag);
      return { ...address, category: newArr };
    });
  }, []);

  // 캠핑장 검색
  const getSearchResult = async (sort, page) => {
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

  // 페이지 변경
  const changePage = (resultSort, value) => {
    if (resultSort === undefined) {
      setCurrentPage(value - 1);
      getSearchResult(resultSort, value - 1);
      return;
    }
    const sort = resultSort === '좋아요순' ? 'rate' : 'distance';
    setCurrentPage(value - 1);
    getSearchResult(sort, value - 1);
  };

  // 검색 버튼 handle
  const handleSearchEvent = () => {
    setIsDetailSearch(false);
    setIsResultOpen(true);
    setCurrentPage(0);
    getSearchResult();
  };


  // 검색조건 전체 초기화
  const resetSearch = useCallback(() => {
    setAddress({
      name: null,
      doNm: null,
      sigunguNm: null,
      rate: null,
      category: [],
    });
  }, []);


  // 별점 초기화
  const resetRateCount = useCallback(() => {
    setAddress((address) => {
      return { ...address, rate: null };
    });
  }, []);
  return (
    <>
      {isMobile && (
        // 모바일
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
              <MobileRateContent
                onChange={handleRateChange}
                value={address.rate}
              />
            </MobileFlexBox>
            <MobileGrayBox>
              <MobileResetSearch onClick={resetSearch}>
                <RedoOutlined />
                전체 초기화
              </MobileResetSearch>
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
            // 모바일에서 리스트 컴포넌트 렌더링
            <MobileResultArea>
              {isResultOpen && campResult.length > 0 ? (
                // 검색버튼 클릭 & 검색 결과가 있을 떄
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
                </>
              ) : (
                // 검색 결과가 없을 떄
                <MobileResultDefault>
                  <ExclamationCircleOutlined />
                  검색결과가 없습니다.
                </MobileResultDefault>
              )}
            </MobileResultArea>
          )}
        </>
      )}
      {!isMobile && (
        // 데스크탑
        <Container>
          <Header>
            캠핑장 찾아보기{' '}
            <ResetSearch onClick={resetSearch}>
              <RedoOutlined />
              전체 초기화
            </ResetSearch>
          </Header>
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
            <RateContainer>
              <InputTitle>최소 별점</InputTitle>
              <RateWrap>
                <Rate onChange={handleRateChange} value={address.rate} />
                <ResetRate resetRateCount={resetRateCount} />
              </RateWrap>
            </RateContainer>

            {isDetailSearch && (
              // 상세검색 버튼 클릭 시
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
                // 상세검색 버튼 클릭 안 했을 시
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
  ResetSearch,
  Form,
  InputContent,
  InputTitle,
  SelectAddress,
  RateWrap,
  FlexBox,
  RateContainer,
  CategoryWrap,
  Button,
  ButtonWrap,
  MobileFlexBox,
  MobileGrayBox,
  MobileForm,
  MobileInputContent,
  MobileSelectAddress,
  MobileRateContent,
  MobileResetSearch,
  MobileCategoryWrap,
  MobileButton,
  MobileButtonWrap,
  MobileResultArea,
  MobileResultDefault,
  ChangeViewBtn,
} = style;
