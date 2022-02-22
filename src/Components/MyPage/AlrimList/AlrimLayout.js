//레이아웃

import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { UserContext } from '../../auth/AuthProvider';
import { auth } from '../../../Service/firebaseAuth';
import * as api from '../../../Service/camps';
import Pagination from '../../Pagination/Pagination';
import AlrimList from './AlrimList';
import { AlrimButton } from './AlrimList.styles';
import { AlrimNotification } from '../../../Components/Notice/Notice';

/* // AuthProvider.js
export const UserContext = React.createContext(null);  */

export default function AlrimLayout({ user }) {
  const [data, setData] = useState([]);

  async function request() {
    const response = await api.getAlrimList();
    setData(response);
    console.log(response);
  }
  useEffect(() => {
    request();
  }, [user]);

  const AlrimAllChecked = async (e) => {
    e.preventDefault();
    console.log('모든 알림 읽기');

    const response = await api.readAllAlrim();
    console.log(response.data);
  };

  const AlrimAllDelete = (e) => {
    e.preventDefault();
    console.log('알림 전체 삭제');
    if (window.confirm('알림을 전체 삭제 하시겠습니까?')) {
      axios
        .delete(`http://localhost:3001/alrimList`)
        .then(function (response) {
          console.log(response);
          //setData([]);
        })
        .catch(function (ex) {
          throw new Error(ex);
        });
    }
  };

  /* pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

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
      {data.length === 0 ? (
        <AlrimNotification />
      ) : (
        <AlrimList alrimList={data} />
      )}

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
}
