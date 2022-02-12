import React, { useState, useEffect } from 'react';
import * as campService from '../../../Service/camps';
import Pagination from '../../Pagination/Pagination';
import LikesList from './LikesList';

/* // AuthProvider.js
export const UserContext = React.createContext(null);  */

export default function LikeListLayout() {
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1);

  async function getCampData() {
    const response = await campService.getCamp();
    setData(response);
  }

  useEffect(() => {
    getCampData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <LikesList data={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
}
