import React from 'react';
import { useLocation } from 'react-router';

const SearchPage = () => {
  const { state } = useLocation();
  console.log(state);
  return <div>검색페이지</div>;
};
export default SearchPage;
