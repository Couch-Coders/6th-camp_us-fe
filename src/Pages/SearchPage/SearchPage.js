import React, { useEffect, useState } from 'react';
import * as campService from '../../Service/camps';
import { useLocation } from 'react-router';
import SearchLocation from '../../Components/SearchLocation/SearchLocation';

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [campList, setCampList] = useState([]);
  const { state } = useLocation();

  async function getCampList() {
    // 백엔드 api 완성되면 Search api 사용 예정
    setIsLoading(true);
    const response = await campService.getCamp();
    setCampList(response);
    setIsLoading(false);
  }

  useEffect(() => {
    getCampList();
  }, []);

  return <div>{!isLoading && <SearchLocation campList={campList} />}</div>;
};
export default SearchPage;
