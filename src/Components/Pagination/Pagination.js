import React, { useState } from 'react';
import { PageUl, PageLi, PageSpan } from './Pagination.style';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-con">
      <PageUl className="pagination">
        {pageNumbers.map((number) => (
          <PageLi
            key={number}
            onClick={(e) => paginate(e, number)}
            className={currentPage === number && 'active'}
          >
            <PageSpan>{number}</PageSpan>
          </PageLi>
        ))}
      </PageUl>
    </nav>
  );
};

export default Pagination;
