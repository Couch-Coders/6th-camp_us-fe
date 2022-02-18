import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../auth/AuthProvider';
import { auth } from '../../../Service/firebaseAuth';
import * as api from '../../../Service/camps';
import Pagination from '../../Pagination/Pagination';
import MyReviews from './MyReviews';

/* // AuthProvider.js
export const UserContext = React.createContext(null);  */

export default function MyReviewsLayout() {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  async function request() {
    const response = await api.getUserReview();
    console.log(response);
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

    setData(response.content);
  }
  useEffect(() => {
    request();
  }, [user]);

  /* 리뷰 리스트 */
  function deleteTask(id) {
    const remainingTasks = data.filter((data) => id !== data.id);
    setData(remainingTasks);
  }

  function editTask(review) {
    console.log('review =', review);
    const editedTaskList = data.map((data) => {
      if (review.id === data.id) {
        return {
          ...data,
          ...review,
        };
      }
      return data;
    });
    setData(editedTaskList);

    /* const res = await axiosInstance.patch(`/members/me/reviews/${id}`, {
      rate : newRate,
      imgUrl : newImg.url,
      content : newContent
    });
    const data = await res.json(); */
  }

  const reviewList =
    data &&
    data.map((data) => (
      <MyReviews
        reviewData={data}
        key={data.reviewId}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

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
