import React, { useCallback, useEffect, useState } from 'react';
import * as api from '../../Service/camps';
import { useLocation } from 'react-router';
import SearchLocation from '../../Components/SearchLocation/SearchLocation';
import styled from 'styled-components';
import SearchBar from '../../Components/SearchBar/SearchBar';
import MobileSearchBar from '../../Components/SearchBar/MobileSearchBar';

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [campList, setCampList] = useState([]);
  const { state } = useLocation();

  async function getCampList() {
    // 백엔드 api 완성되면 Search api 사용 예정
    setIsLoading(true);
    //const response = await api.getMainSearch(state, 0);
    const response = await api.getSearchTemporary();
    setCampList(response);
    setIsLoading(false);
  }

  useEffect(() => {
    state && getCampList();
  }, []);

  const setSearchedCampData = useCallback((data) => {
    setCampList(data);
  }, []);

  return (
    <Container>
      <SearchBar
        searchCategory={state}
        setSearchedCampData={setSearchedCampData}
      />
      {state ? (
        !isLoading && <SearchLocation campList={campList} />
      ) : (
        <SearchLocation campList={campList} />
      )}
    </Container>
  );
};
export default SearchPage;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px 58px 22px 38px;
  width: 100%;
  height: calc(100vh - 65px);

  @media screen and (max-width: 960px) {
    display: block;
    padding: 0;
    background-color: #e9ecef;
    height: auto;
    min-height: 100vh;
    overflow: hidden;
  }
`;
