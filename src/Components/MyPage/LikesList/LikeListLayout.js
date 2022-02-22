import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../auth/AuthProvider';
import { auth } from '../../../Service/firebaseAuth';
import * as api from '../../../Service/camps';
import Pagination from '../../Pagination/Pagination';
import LikesList from './LikesList';

/* // AuthProvider.js
export const UserContext = React.createContext(null);  */

export default function LikeListLayout() {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  async function request() {
    const response = await api.getMyCampsLikes();
    /* auth.onAuthStateChanged(async (firebaseUser) => {
      const token = await firebaseUser.getIdToken();
      defaultHeaders.Authorization = `Bearer ${token}`;

      const res = await fetch('/campReview', {
        //const res = await fetch('/members/me/camps/likes', {
        method: 'GET',
        headers: defaultHeaders,
        checked: false,
      });
      const data = await res.json();
      
    }); */
    const sort = response.filter((r) => r.checked === true); // checked : true만 필터
    setData(sort);
  }

  useEffect(() => {
    // request();
  }, [user]);

  /*  async function getCampData() {
    const response = await campService.getCamp();
    auth.onAuthStateChanged(async (firebaseUser) => {
      const token = await firebaseUser.getIdToken();
      defaultHeaders.Authorization = `Bearer ${token}`;

      const res = await axios({
        method: 'GET',
        url: '/members/me/camps/likes',
        withCredentials: true,
        headers: defaultHeaders,
      });
      console.log('res = ', res);
    });

    setData(response);
  }

  useEffect(() => {
    getCampData();
  }, []); */

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
