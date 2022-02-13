import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../auth/AuthProvider';
import { auth } from '../../../Service/firebaseAuth';
import * as campService from '../../../Service/camps';
import Pagination from '../../Pagination/Pagination';
import MyReviews from './MyReviews';

/* // AuthProvider.js
export const UserContext = React.createContext(null);  */

export default function MyReviewsLayout() {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  async function request() {
    const response = await campService.getReview();
    /* auth.onAuthStateChanged(async (firebaseUser) => {
      const token = await firebaseUser.getIdToken();
      defaultHeaders.Authorization = `Bearer ${token}`;

      const res = await fetch('/campReview', {
        //const res = await fetch('/members/me/reviews', {
        method: 'GET',
        headers: defaultHeaders,
      });
      const data = await res.json();
      
    }); */

    setData(response[0].contents);
  }
  useEffect(() => {
    request();
  }, [user]);

  /* 리뷰 리스트 */
  function deleteTask(id) {
    const remainingTasks = data.filter((data) => id !== data.id);
    setData(remainingTasks);
  }

  function editTask(id, newRate, newImg, newContent) {
    const editedTaskList = data.map((data) => {
      // if this task has the same ID as the edited task
      if (id === data.id) {
        //
        return { ...data, rate: newRate, imgUrl: newImg, content: newContent };
      }
      return data;
    });
    setData(editedTaskList);
  }
  const reviewList = data.map((data) => (
    <MyReviews
      id={data.id}
      camp_id={data.camp_id}
      camp_name={data.camp_name}
      author={data.author}
      content={data.content}
      createdDate={data.createdDate}
      lastModifiedDate={data.lastModifiedDate}
      likes={data.likes}
      rate={data.rate}
      imgUrl={data.imgUrl}
      /* createdBy={data.createdBy}
      lastModifedBy={data.lastModifedBy} */
      key={data.id}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

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
      {reviewList}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
}
