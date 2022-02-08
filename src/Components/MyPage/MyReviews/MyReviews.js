import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../auth/AuthProvider';
import { auth } from '../../../Service/firebaseAuth';
import { Rate } from 'antd';
import Image from '../../../Assets/Images/default.png';
import {
  List,
  LikeReview,
  ReviewThumbnail,
  ReviewThumb,
  ReviewInfo,
  TopArea,
  HandleContent,
  HandleReview,
  CampName,
  Date,
  BottomArea,
} from './MyReviews.styles';

export default function MyReviews({ data }) {
  const { user } = useContext(UserContext);
  // console.log('data = ', data);
  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  return (
    <List>
      {data.map((Review) => (
        <LikeReview key={Review.review_id}>
          <ReviewThumbnail>
            <ReviewThumb
              src={Review.imgUrl === '' ? Image : Review.imgUrl}
            ></ReviewThumb>
          </ReviewThumbnail>
          <ReviewInfo>
            <TopArea>
              <div>
                <CampName to={`/detail/${Review.camp_id}`}>
                  aaaaaa
                  <Rate allowHalf disabled defaultValue={Review.rate} />
                </CampName>
              </div>
              <HandleContent>
                <HandleReview>수정</HandleReview>
                <HandleReview>삭제</HandleReview>
              </HandleContent>
            </TopArea>
            <Date>{Review.lastModifiedDate}</Date>
            <BottomArea to={`/detail/${Review.camp_id}`}>
              {Review.content}
            </BottomArea>
          </ReviewInfo>
        </LikeReview>
      ))}
    </List>
  );
}
