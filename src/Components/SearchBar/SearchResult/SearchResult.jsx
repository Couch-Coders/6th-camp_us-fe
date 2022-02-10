import React, { useEffect, useState } from 'react';

const SearchResult = (props) => {
  const [isLoading, setIsLoading] = useState();

  async function getSearchResult() {}

  useEffect(() => {
    getSearchResult();
  }, []);

  return <div>result</div>;
};

export default SearchResult;
