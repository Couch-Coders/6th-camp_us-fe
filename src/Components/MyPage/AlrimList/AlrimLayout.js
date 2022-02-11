//레이아웃

import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { UserContext } from '../../auth/AuthProvider';
import { auth } from '../../../Service/firebaseAuth';
import * as campService from '../../../Service/camps';
import Pagination from '../../Pagination/Pagination';
import AlrimList from './AlrimList';
import {
  AlrimButton,
  Notification,
  NotiTitle,
  NotiContent,
} from './AlrimList.styles';
import { BellFilled } from '@ant-design/icons';

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
    await axios
      .get('http://localhost:3001/alrimList')
      .then((res) => {
        let sortAlrim = res.data.sort(
          (a, b) => parseFloat(b.alrimId) - parseFloat(a.alrimId),
        );
        setData(sortAlrim);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }

  useEffect(() => {
    request();
    console.log(data);
  }, [user]);

  const AlrimAllChecked = async (e) => {
    e.preventDefault();
    console.log('모든 알림 읽기');
    const response = await axios({
      method: 'patch',
      url: `http://localhost:3001/alrimList`,
      data: {
        checked: true,
      },
    });
    console.log(response.data);
    /* setData(
      data.map((data) => (data.id === id ? { ...data, checked: true } : data)),
    ); */
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

  /* 선택한 알림 읽기 */
  const handleOnUpdate = async (e, id) => {
    e.preventDefault();
    console.log('선택한 알림 읽기', id);
    const response = await axios({
      method: 'patch',
      url: `http://localhost:3001/alrimList/${id}`,
      data: {
        checked: true,
      },
    });
    setData(
      data.map((data) => (data.id === id ? { ...data, checked: true } : data)),
    );
  };

  /* 선택한 알림 삭제 */
  const handleOnDelete = async (id) => {
    console.log('선택한 id =', id);
    const response = await axios({
      method: 'delete',
      url: `http://localhost:3001/alrimList/${id}`,
    });
    setData(data.filter((card) => card.id !== id));
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
      {data.length === 0 ? (
        <NotNotification />
      ) : (
        <AlrimList
          data={currentPosts}
          handleOnUpdate={handleOnUpdate}
          handleOnDelete={handleOnDelete}
        />
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

const NotNotification = () => {
  return (
    <Notification>
      <BellFilled />
      <NotiTitle>새로운 알림이 없습니다.</NotiTitle>
      <NotiContent>
        나의 활동소식과 친구들의 새소식을 한번에 받아보세요.
      </NotiContent>
    </Notification>
  );
};
