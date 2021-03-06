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

  /* ?????? ?????? */
  const sido = district.sido;
  const sigungu = district.sigungu;

  // ?????? ??? ??????
  const changedoNm = (value) => {
    setAddress((address) => {
      return { ...address, doNm: value };
    });
    setAddress((address) => {
      return { ...address, sigunguNm: null };
    });
  };

  // ?????? ????????? ??????
  const changesigunguNm = (value) => {
    setAddress((address) => {
      return { ...address, sigunguNm: value };
    });
  };

  // ????????? ?????? ??????
  const changename = (value) => {
    const campName = value.target.value;

    setAddress((address) => {
      return { ...address, name: campName === '' ? null : campName };
    });
  };

  // ?????? ??????
  const handleRateChange = (value) => {
    setAddress((address) => {
      return { ...address, rate: value };
    });
  };

  // ???????????? ??????
  const addCategory = useCallback((tag) => {
    setAddress((address) => {
      return { ...address, category: [...address.category, tag] };
    });
  }, []);

  // ???????????? ??????
  const removeCategory = useCallback((tag) => {
    setAddress((address) => {
      const newArr = address.category.filter((item) => item !== tag);
      return { ...address, category: newArr };
    });
  }, []);

  // ????????? ??????
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
      throw new Error('??????');
    }
  };

  // ????????? ??????
  const changePage = (resultSort, value) => {
    if (resultSort === undefined) {
      setCurrentPage(value - 1);
      getSearchResult(resultSort, value - 1);
      return;
    }
    const sort = resultSort === '????????????' ? 'rate' : 'distance';
    setCurrentPage(value - 1);
    getSearchResult(sort, value - 1);
  };

  // ?????? ?????? handle
  const handleSearchEvent = () => {
    setIsDetailSearch(false);
    setIsResultOpen(true);
    setCurrentPage(0);
    getSearchResult();
  };


  // ???????????? ?????? ?????????
  const resetSearch = useCallback(() => {
    setAddress({
      name: null,
      doNm: null,
      sigunguNm: null,
      rate: null,
      category: [],
    });
  }, []);


  // ?????? ?????????
  const resetRateCount = useCallback(() => {
    setAddress((address) => {
      return { ...address, rate: null };
    });
  }, []);
  return (
    <>
      {isMobile && (
        // ?????????
        <>
          <MobileForm>
            <MobileFlexBox bg>
              <MobileSelectAddress
                placeholder="???/???"
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
                placeholder="???/???/???"
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
                placeholder="????????? ????????? ???????????????."
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
                ?????? ?????????
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
            // ??????????????? ????????? ???????????? ?????????
            <MobileResultArea>
              {isResultOpen && campResult.length > 0 ? (
                // ???????????? ?????? & ?????? ????????? ?????? ???
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
                // ?????? ????????? ?????? ???
                <MobileResultDefault>
                  <ExclamationCircleOutlined />
                  ??????????????? ????????????.
                </MobileResultDefault>
              )}
            </MobileResultArea>
          )}
        </>
      )}
      {!isMobile && (
        // ????????????
        <Container>
          <Header>
            ????????? ????????????{' '}
            <ResetSearch onClick={resetSearch}>
              <RedoOutlined />
              ?????? ?????????
            </ResetSearch>
          </Header>
          <Form>
            <FlexBox>
              <InputTitle>????????? ??????</InputTitle>
              <InputContent
                placeholder="????????? ????????? ???????????????."
                onChange={changename}
                value={address.name}
              />
            </FlexBox>
            <FlexBox>
              <InputTitle>??????</InputTitle>
              <div>
                <SelectAddress
                  placeholder="???/???"
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
                  placeholder="???/???/???"
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
              <InputTitle>?????? ??????</InputTitle>
              <RateWrap>
                <Rate onChange={handleRateChange} value={address.rate} />
                <ResetRate resetRateCount={resetRateCount} />
              </RateWrap>
            </RateContainer>

            {isDetailSearch && (
              // ???????????? ?????? ?????? ???
              <>
                <InputTitle>?????? ??????</InputTitle>
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
                ??????
              </Button>
              {!isDetailSearch && (
                // ???????????? ?????? ?????? ??? ?????? ???
                <Button
                  type="button"
                  onClick={() => {
                    setIsDetailSearch(true);
                  }}
                >
                  ????????????
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
