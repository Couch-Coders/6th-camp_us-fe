import React, { useState, useEffect } from 'react';
import * as campService from '../../../Service/camps';
import Image from '../../../Assets/Images/default_image.png';
import { Rate } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import { Section, InnerWrapper, SectionTitle } from '../../../Styles/theme';
import {
  BestReviewList,
  BestReview,
  ReviewThumbnail,
  ReviewImg,
  ReviewContent,
  CampName,
  ReviewInfo,
  Reviewer,
  Content,
  ReviewLike,
} from './MainBestReview.styles';

function MainBestReview() {
  const [campData, setCampData] = useState([]);

  async function getCampData() {
    const response = await campService.getBestReview();
    setCampData(response);
  }

  useEffect(() => {
    getCampData();
  }, []);

  /* 리뷰 추천수 내림차순 정렬 */
  let sortReview = campData
    .sort((a, b) => parseFloat(b.likes) - parseFloat(a.likes))
    .slice(0, 3);

  return (
    <Section>
      <InnerWrapper>
        <SectionTitle>BEST 리뷰</SectionTitle>
        <BestReviewList>
          {sortReview.map((camp) => (
            <BestReview
              to={`/detail/${camp.camp_id}`} /* 캠핑장 상세페이지로 */
              key={camp.review_id}
            >
              <ReviewThumbnail>
                <ReviewImg
                  src={camp.imgUrl === '' ? Image : camp.imgUrl}
                ></ReviewImg>
              </ReviewThumbnail>
              <ReviewContent>
                <CampName>{camp.detailAddress}</CampName>
                <ReviewInfo>
                  <Reviewer>{camp.createdBy}</Reviewer>
                  <Rate allowHalf disabled defaultValue={camp.rate} />
                </ReviewInfo>
                <Content>{camp.content}</Content>
              </ReviewContent>
              <ReviewLike>
                <LikeOutlined />
                {camp.likes}
              </ReviewLike>
            </BestReview>
          ))}
        </BestReviewList>
      </InnerWrapper>
    </Section>
  );
}

export default MainBestReview;
