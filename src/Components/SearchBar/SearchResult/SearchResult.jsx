import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ResultList from '../ResultList/ResultList';
import { Pagination, Select } from 'antd';
import { throttle } from 'lodash';
import { PageContext } from '../../../context/SearchPaginationContext';
import { CampSearchResultNotification } from '../../../Components/Notice/Notice';
import SearchSkeleton from '../../Skeleton/SearchSkeleton';

const SearchResult = ({
  isLoading,
  campResult,
  getSearchResult,
  changePage,
}) => {
  const [resultSort, setResultSort] = useState();
  const [listHeight, setListHeight] = useState();

  const { totalElement, currentPage, setCurrentPage } = useContext(PageContext);

  const sortList = ['좋아요순', '가까운순'];
  const { Option } = Select;

  const listRef = useRef();

  window.addEventListener(
    'resize',
    throttle(() => {
      const elementHeight = listRef.current?.getBoundingClientRect();
      const brouserHeight = window.innerHeight;
      setListHeight(brouserHeight - elementHeight?.y - 70);
    }, 500),
  );

  useEffect(() => {
    const elementHeight = listRef.current?.getBoundingClientRect();
    const brouserHeight = window.innerHeight;
    setListHeight(brouserHeight - elementHeight?.y - 70);
  }, []);

  const onResultSort = (value) => {
    setResultSort(value);
    setCurrentPage(0);
    const sort = value === '좋아요순' ? 'rate' : 'distance';

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
            }}
          />
        </>
      )}
    </ResultWrap>
  );
};

export default SearchResult;

const ResultWrap = styled.section`
  width: 100%;
  border-top: 1px solid #d9d9d9;
`;

const Header = styled.header`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-size: 14px;
`;

const SelectContent = styled(Select)`
  width: 100px;
  position: relative;
  z-index: 0;
`;

const ListWrap = styled.ul`
  width: 100%;
  overflow: auto;
  height: ${(props) => `${props.listHeight}px`};
  overflow-y: auto;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  background-color: #e9ecef;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #aeaeae;
  }
  &::-webkit-scrollbar-track {
    background-color: #eeeeee;
  }
  @media screen and (max-width: 991px) {
    &::-webkit-scrollbar,
    ::-webkit-scrollbar-thumb,
    ::-webkit-scrollbar-track {
      display: none;
    }
  }
`;

const PaginationContent = styled(Pagination)`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  .ant-select-selector {
    display: none;
  }
`;
