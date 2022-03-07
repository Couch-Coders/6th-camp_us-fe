import React, { useContext, useEffect, useRef, useState } from 'react';
import ResultList from '../../resultList/ResultList';
import { throttle } from 'lodash';
import { Select } from 'antd';
import { PageContext } from '../../../../../context/SearchPaginationContext';
import { CampSearchResultNotification } from '../../../../../components/notice/Notice';
import { style } from './searchResult.style';
import SearchSkeleton from '../../../../../components/skeleton/searchSkeleton/SearchSkeleton';
import { CoordinateContext } from '../../../../../context/CoordinateContext';

const SearchResult = ({
  isLoading,
  campResult,
  getSearchResult,
  changePage,
}) => {
  const [resultSort, setResultSort] = useState();
  const [listHeight, setListHeight] = useState();

  const { totalElement, currentPage, setCurrentPage } = useContext(PageContext);
  const { resetCampCoordinate } = useContext(CoordinateContext);

  const sortList = ['별점순', '가까운순'];
  const { Option } = Select;

  const listRef = useRef();

  useEffect(() => {
    const elementHeight = listRef.current?.getBoundingClientRect();
    const brouserHeight = window.innerHeight;
    setListHeight(brouserHeight - elementHeight?.y - 70);
  }, [isLoading]);

  // 화면 크기에 따라 검색 결과 height 지정
  window.addEventListener(
    'resize',
    throttle(() => {
      const elementHeight = listRef.current?.getBoundingClientRect();
      const brouserHeight = window.innerHeight;
      setListHeight(brouserHeight - elementHeight?.y - 70);
    }, 500),
  );

  // 검색 결과 정렬
  const onResultSort = (value) => {
    setResultSort(value);
    setCurrentPage(0);
    const sort = value === '별점순' ? 'rate' : 'distance';

    getSearchResult(sort);
  };

  return (
    <ResultWrap>
      <Header>
        <Title>검색결과 리스트</Title>
        <SelectContent
          placeholder="정렬"
          onChange={onResultSort}
          value={resultSort}
        >
          {sortList.map((list, index) => (
            <Option key={index} value={list}>
              {list}
            </Option>
          ))}
        </SelectContent>
      </Header>
      {!isLoading && campResult.length === 0 ? (
        <CampSearchResultNotification />
      ) : isLoading ? (
        <>
          <SearchSkeleton />
          <SearchSkeleton />
          <SearchSkeleton />
        </>
      ) : (
        <>
          <ListWrap ref={listRef} listHeight={listHeight}>
            {campResult.map((result) => (
              <ResultList camp={result} key={result.campId} />
            ))}
          </ListWrap>
          <PaginationContent
            current={currentPage + 1}
            total={totalElement}
            pageSize={10}
            onChange={(value) => {
              changePage(resultSort, value);
              resetCampCoordinate();
            }}
          />
        </>
      )}
    </ResultWrap>
  );
};

export default SearchResult;

const {
  ResultWrap,
  Header,
  Title,
  SelectContent,
  ListWrap,
  PaginationContent,
} = style;
