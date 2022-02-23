import React, { useState, useEffect } from 'react';
import * as api from '../../../Service/camps';
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
  PaginationContent,
} from './MainBestReview.styles';

function MainBestReview() {
  const [campData, setCampData] = useState([]);
  const [totalElement, setTotalElement] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  async function getCampData() {
    const response = await api.getBestReview();
    console.log(response);
    setCampData(response.content);
    setTotalElement(response.totalElements);
  }

  useEffect(() => {
    getCampData();
  }, []);

  // 페이지 변경
  const changePage = (value) => {
    console.log('changePage', value);
    setCurrentPage(value - 1);
  };

  useEffect(() => {
    getCampData(currentPage);
  }, [currentPage]);

  return (
    <Section>
      <InnerWrapper>
        <SectionTitle>BEST 리뷰</SectionTitle>
        <BestReviewList>
          {campData.map((camp) => (
            <BestReview to={`/detail?id=${camp.campId}`} key={camp.reviewId}>
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
                <CampName>{camp.detailAddress}</CampName>
                <ReviewInfo>
                  <Reviewer>{camp.createdBy}</Reviewer>
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
        </BestReviewList>
        <PaginationContent
          current={currentPage + 1}
          total={totalElement}
          pageSize={5}
          onChange={(value) => {
            changePage(value);
          }}
        />
      </InnerWrapper>
    </Section>
  );
}

export default MainBestReview;
