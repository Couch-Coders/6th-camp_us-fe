import React, { useCallback, useEffect, useState } from 'react';
import * as api from '../../service/api';
import { PageContext } from '../../context/SearchPaginationContext';
import { useLocation } from 'react-router';
import SearchBar from './searchBar/SearchBar';
import SearchLocation from './searchLocation/SearchLocation';
import styled from 'styled-components';

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [campList, setCampList] = useState([]);
  const [totalElement, setTotalElement] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [isViewLSearchList, setIsViewLSearchList] = useState(false);

  const { state } = useLocation();

  useEffect(() => {
    state && getCampList();
  }, []);

  async function getCampList() {
    setIsLoading(true);
    const response = await api.getMainSearch(state, currentPage);
    setTotalElement(response.totalElements);
    setCampList(response.content);
    setIsLoading(false);
  }

  const setSearchedCampData = useCallback((data) => {
    setCampList(data);
  }, []);

  return (
    <Container>
      <PageContext.Provider
        value={{ totalElement, currentPage, setCurrentPage, setTotalElement }}
      >
        {state ? (
          !isLoading && (
            <SearchBar
              searchCategory={state}
              setSearchedCampData={setSearchedCampData}
              isViewLSearchList={isViewLSearchList}
              setIsViewLSearchList={setIsViewLSearchList}
              campList={campList}
            />
          )
        ) : (
          <SearchBar
            searchCategory={state}
            setSearchedCampData={setSearchedCampData}
            isViewLSearchList={isViewLSearchList}
            setIsViewLSearchList={setIsViewLSearchList}
          />
        )}
      </PageContext.Provider>

      {state ? (
        !isLoading && (
          <SearchLocation
            campList={campList}
            isViewLSearchList={isViewLSearchList}
            setIsViewLSearchList={setIsViewLSearchList}
          />
        )
      ) : (
        <SearchLocation
          campList={campList}
          isViewLSearchList={isViewLSearchList}
          setIsViewLSearchList={setIsViewLSearchList}
        />
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
    min-height: calc(100vh - 50px);
    overflow: hidden;
  }
`;
