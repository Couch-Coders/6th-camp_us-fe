import React, { useState, useEffect } from 'react';
import * as api from '../../../service/api';
import { Section, InnerWrapper, SectionTitle } from '../../../styles/theme';
import { Rate } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import { style } from './mainBestReview.styles';
import Image from '../../../assets/images/default_image.png';
import ReviewSkeleton from '../../../components/skeleton/reviewSkeleton/ReviewSkeleton';

function MainBestReview() {
  const [campData, setCampData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCampData();
  }, []);

  async function getCampData(page) {
    setIsLoading(true);
    const response = await api.getBestReview(page);
    const sortResult = response.content.slice(0, 5);
    setCampData(sortResult);
    setIsLoading(false);
  }

  return (
    <Section>
      <InnerWrapper>
        <SectionTitle>BEST 리뷰</SectionTitle>
        <BestReviewList>
          {isLoading ? (
            <>
              <ReviewSkeleton />
              <ReviewSkeleton />
              <ReviewSkeleton />
              <ReviewSkeleton />
              <ReviewSkeleton />
            </>
          ) : (
            <>
              {campData.map((camp) => (
                <BestReview
                  to={`/detail?id=${camp.campId}`}
                  key={camp.reviewId}
                >
                  <ReviewThumbnail>
                    <ReviewImg
                      src={
                        camp.imgUrl === '' || camp.imgUrl === null
                          ? Image
                          : camp.imgUrl
                      }
                    ></ReviewImg>
                  </ReviewThumbnail>
                  <ReviewContent>
                    <CampName>{camp.facltNm}</CampName>
                    <ReviewInfo>
                      <Reviewer>{camp.nickname}</Reviewer>
                      <Rate disabled defaultValue={camp.rate} />
                    </ReviewInfo>
                    <Content>{camp.content}</Content>
                  </ReviewContent>
                  <ReviewLike>
                    <LikeOutlined />
                    {camp.likeCnt}
                  </ReviewLike>
                </BestReview>
              ))}
            </>
          )}
        </BestReviewList>
      </InnerWrapper>
    </Section>
  );
}

export default MainBestReview;

const {
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
} = style;
