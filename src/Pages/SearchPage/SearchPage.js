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

  const PCver = () => {
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

  const Mobilever = () => {
    return (
      <MobileContainer>
        <MobileSearchBar
          searchCategory={state}
          setSearchedCampData={setSearchedCampData}
        />
        {state ? (
          !isLoading && <SearchLocation campList={campList} />
        ) : (
          <SearchLocation campList={campList} />
        )}
      </MobileContainer>
    );
  };

  return isMobile ? <Mobilever /> : <PCver />;
};
export default SearchPage;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px 58px 22px 38px;
  width: 100%;
  height: calc(100vh - 65px);
`;

const MobileContainer = styled.div`
  background-color: #e9ecef;
  min-height: 100vh;
  overflow: hidden;
`;
