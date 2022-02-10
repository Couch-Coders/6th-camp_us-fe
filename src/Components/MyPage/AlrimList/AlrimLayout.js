//레이아웃

import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { UserContext } from '../../auth/AuthProvider';
import { auth } from '../../../Service/firebaseAuth';
import * as campService from '../../../Service/camps';
import Pagination from '../../Pagination/Pagination';
import AlrimList from './AlrimList';
import { AlrimButton } from './AlrimList.styles';

/* // AuthProvider.js
export const UserContext = React.createContext(null);  */

export default function AlrimLayout() {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);

  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  async function request() {
    const response = await campService.getAlrimLikes();

    /* 알림 ID순 정렬 */
    let sortAlrim = response.sort(
      (a, b) => parseFloat(b.alrimId) - parseFloat(a.alrimId),
    );
    setData(sortAlrim);
  }

  useEffect(() => {
    request();
    console.log(data);
  }, [user]);

  const AlrimAllChecked = (e) => {
    e.preventDefault();
    console.log('모든 알림 읽기');
  };

  const AlrimAllDelete = (e) => {
    e.preventDefault();
    console.log('알림 전체 삭제');
  };

  /* 선택한 알림 읽기 */
  const handleOnUpdate = (e, cardId) => {
    e.preventDefault();
    console.log('선택한 알림 읽기', cardId);
    setData(
      data.map((data) =>
        data.alrimId === cardId ? { ...data, checked: true } : data,
      ),
    );
  };

  /* 선택한 알림 삭제 */
  const handleOnDelete = (cardId) => {
    console.log('선택한 알림 삭제', cardId);
    setData(data.filter((card) => card.alrimId !== cardId));
  };

  /* pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <AlrimButton>
        <button onClick={AlrimAllChecked}>모든 알림 읽기</button>
        <button onClick={AlrimAllDelete}>전체 삭제</button>
      </AlrimButton>
      <AlrimList
        data={currentPosts}
        handleOnUpdate={handleOnUpdate}
        handleOnDelete={handleOnDelete}
      />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
}
