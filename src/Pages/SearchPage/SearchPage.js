import React, { useEffect, useState } from 'react';
import * as campService from '../../Service/camps';
import { useLocation } from 'react-router';
import SearchLocation from '../../Components/SearchLocation/SearchLocation';

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [campList, setCampList] = useState([]);
  const { state } = useLocation();
  console.log(state);

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

  console.log(campList);

  return (
    <div>
      <SearchLocation />
    </div>
  );
};
export default SearchPage;
