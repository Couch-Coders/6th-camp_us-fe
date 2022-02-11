import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as campService from '../../../Service/camps';

const SearchResult = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [campResult, setCampResult] = useState([]);

  async function getSearchResult() {
    setIsLoading(false);
    const response = await campService.getCamp();
    setCampResult(response);
    setIsLoading(true);
  }

  isLoading && console.log(campResult);

  useEffect(() => {
    getSearchResult();
  }, []);

  return <ResultWrap></ResultWrap>;
};

export default SearchResult;

const ResultWrap = styled.section`
  width: 100%;
  border-top: 1px solid #d9d9d9;
  margin-top: 80px;
`;
