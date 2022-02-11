import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as campService from '../../../Service/camps';
import ResultList from '../ResultList/ResultList';
import { Select } from 'antd';
import { throttle } from 'lodash';

const SearchResult = ({ address }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [campResult, setCampResult] = useState([]);
  const [resultSort, setResultSort] = useState();
  const [listHeight, setListHeight] = useState();
  const sortList = ['좋아요순', '거리순'];
  const { Option } = Select;

  const listRef = useRef();

  async function getSearchResult() {
    setIsLoading(false);
    const response = await campService.getCamp();
    setCampResult(response);
    setIsLoading(true);
  }

  isLoading && console.log(campResult);

  window.addEventListener(
    'resize',
    throttle(() => {
      const elementHeight = listRef.current.getBoundingClientRect();
      const brouserHeight = window.innerHeight;
      setListHeight(brouserHeight - elementHeight.y - 20);
    }, 500),
  );

  useEffect(() => {
    getSearchResult();

    const elementHeight = listRef.current.getBoundingClientRect();
    const brouserHeight = window.innerHeight;
    setListHeight(brouserHeight - elementHeight.y - 20);
  }, []);

  const onResultSort = (value) => {
    setResultSort(value);
  };

  return (
    <ResultWrap>
      <Header>
        <Title>검색결과 리스트</Title>
        <SelectContent
          placeholder="시/도"
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
      <ListWrap ref={listRef} listHeight={listHeight}>
        {campResult.map((result) => (
          <ResultList camp={result} />
        ))}
      </ListWrap>
    </ResultWrap>
  );
};

export default SearchResult;

const ResultWrap = styled.section`
  width: 100%;
  border-top: 1px solid #d9d9d9;
  margin-top: 80px;
  padding-bottom: 20px;
`;

const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-size: 14px;
`;

const SelectContent = styled(Select)`
  width: 100px;
`;

const ListWrap = styled.ul`
  width: 100%;
  overflow: auto;
  height: ${(props) => `${props.listHeight}px`};

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #aeaeae;
  }
  &::-webkit-scrollbar-track {
    background-color: #eeeeee;
  }
`;
