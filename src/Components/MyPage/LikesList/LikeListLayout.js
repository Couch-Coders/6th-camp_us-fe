import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../auth/AuthProvider';
import * as api from '../../../Service/camps';
import LikesList from './LikesList';
import { PaginationContent } from './LikesList.styles';
import { NotMyLikeListNotification } from '../../../Components/Notice/Notice';

export default function LikeListLayout() {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [totalElement, setTotalElement] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  async function request() {
    const response = await api.getMyCampsLikes();
    console.log(response);
    setData(response.content);
    setTotalElement(response.totalElements);
  }

  useEffect(() => {
    request();
  }, [user]);

  const changePage = (value) => {
    console.log('changePage', value);
    setCurrentPage(value - 1);
  };

  async function MemberAlrimRequest(page) {
    const response = await api.getMyCampsLikes(page);
    console.log(response);
    setData(response.content);
    setTotalElement(response.totalElements);
  }

  useEffect(() => {
    MemberAlrimRequest(currentPage);
  }, [currentPage]);

  return (
    <>
      {data.length === 0 ? (
        <NotMyLikeListNotification />
      ) : (
        <>
          <LikesList camp={data} request={request} />
          <PaginationContent
            current={currentPage + 1}
            total={totalElement}
            pageSize={5}
            onChange={(value) => {
              changePage(value);
            }}
          />
        </>
      )}
    </>
  );
}
