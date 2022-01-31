import React, { useState, useEffect } from 'react';
import * as campService from '../../../Service/camps';
import { Rate } from 'antd';
import { Section, InnerWrapper, SectionTitle } from '../../../Styles/theme';
import {
  BestReviewList,
  BestReview,
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
    .sort((a, b) => parseFloat(b.rate) - parseFloat(a.rate))
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
              <ReviewImg src={camp.imgUrl}></ReviewImg>
              <ReviewContent>
                <CampName>{camp.detailAddress}</CampName>
                <ReviewInfo>
                  <Reviewer>{camp.createdBy}</Reviewer>
                  <Rate allowHalf disabled defaultValue={camp.rate} />
                </ReviewInfo>
                <Content>{camp.content}</Content>
              </ReviewContent>
              <ReviewLike>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0078 6.2903C11.2328 5.99298 11.3574 5.62869 11.3574 5.24968C11.3574 4.64834 11.0212 4.07914 10.4801 3.76173C10.3408 3.68003 10.1822 3.63703 10.0207 3.63718H6.80914L6.88949 1.99119C6.90825 1.59343 6.76762 1.21575 6.49441 0.9278C6.36032 0.785873 6.19856 0.672951 6.01911 0.596012C5.83967 0.519073 5.64635 0.479752 5.4511 0.480479C4.75467 0.480479 4.1386 0.949229 3.95378 1.62021L2.80333 5.78539H1.07164C0.834584 5.78539 0.643066 5.97691 0.643066 6.21396V11.089C0.643066 11.326 0.834584 11.5175 1.07164 11.5175H9.12476C9.24798 11.5175 9.36851 11.4934 9.47967 11.4452C10.1172 11.1733 10.5283 10.5506 10.5283 9.8595C10.5283 9.69075 10.5042 9.52468 10.456 9.36396C10.681 9.06664 10.8056 8.70235 10.8056 8.32334C10.8056 8.15459 10.7815 7.98851 10.7332 7.8278C10.9582 7.53048 11.0828 7.16619 11.0828 6.78718C11.0801 6.61843 11.056 6.45102 11.0078 6.2903ZM1.60735 10.5532V6.74968H2.69217V10.5532H1.60735ZM10.1306 5.82557L9.83726 6.08003L10.0234 6.42021C10.0848 6.53227 10.1166 6.65809 10.1158 6.78584C10.1158 7.00682 10.0194 7.21709 9.85333 7.36173L9.56003 7.61619L9.74619 7.95637C9.80752 8.06843 9.83932 8.19426 9.8386 8.322C9.8386 8.54298 9.74217 8.75325 9.5761 8.89789L9.2828 9.15236L9.46896 9.49253C9.53029 9.60459 9.56209 9.73042 9.56137 9.85816C9.56137 10.1582 9.38458 10.4287 9.11137 10.5519H3.54932V6.70682L4.88191 1.87869C4.91627 1.75494 4.99003 1.64577 5.09202 1.56771C5.194 1.48965 5.31866 1.44695 5.44708 1.4461C5.54887 1.4461 5.64932 1.47557 5.72967 1.53584C5.86226 1.63494 5.93324 1.78494 5.92521 1.94432L5.79664 4.60146H10.0074C10.2457 4.74744 10.3931 4.99387 10.3931 5.24968C10.3931 5.47066 10.2966 5.67959 10.1306 5.82557Z"
                    fill="black"
                    ity="0.45"
                  />
                </svg>
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
