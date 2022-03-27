import React, { useEffect, useState } from 'react';
import CampInformation from './campInformation/CampInformation';
import Tag from '../../components/tag/Tag';
import CampLocation from './campLocation/CampLocation';
import { CampContext } from '../../context/CampContext';
import * as api from '../../service/api';
import { style } from './DetailPage.style';
import { useLocation } from 'react-router';
import defaultImg from '../../assets/images/default_image.png';
import Review from '../../components/review/Review';
import LikeButton from '../../components/likeButton/LikeButton';

const DetailPage = () => {
  const [campData, setCampData] = useState();
  const [campInfo, setCampInfo] = useState([]);
  const [reviewImg, setReviewImg] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTabs, setSelectedTabs] = useState('information');

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const CampId = params.get('id');

  useEffect(() => {
    getCampData();
    getCampReviewImg();
  }, []);

  // 클릭한 탭 구별
  function setClickedTabs(e) {
    const role = e.target.dataset.role;
    setSelectedTabs(role);
  }

  // 캠핑장 조회
  async function getCampData() {
    setIsLoading(true);
    const response = await api.getCamp(CampId);
    const info = response.sbrsCl !== null ? response.sbrsCl.split(',') : [];
    setCampData(response);
    setCampInfo(info);
    setIsLoading(false);
  }

  // 리뷰 이미지 조회
  async function getCampReviewImg() {
    const response = await api.getReviewImage(CampId);
    setReviewImg(response);
  }

  return (
    <Main>
      {!isLoading && (
        <Container>
          <Header>
            {campData && <Title>{campData.facltNm}</Title>}
            <LikeButton
              likeCount={campData.likeCnt}
              Id={CampId}
              liked={campData.liked}
              role="camp"
            />
          </Header>
          <CampInfoWrap>
            {campInfo.map((item, index) => (
              <Tag tag={item} key={index} />
            ))}
          </CampInfoWrap>
          {campData.firstImageUrl !== null ? (
            <Thumbnail src={campData.firstImageUrl} alt="thumbnail" />
          ) : (
            <Thumbnail src={defaultImg} alt="thumbnail" />
          )}

          <Table>
            <tbody>
              <tr>
                <Th>주소</Th>
                <Td>{campData.addr1}</Td>
              </tr>
              <tr>
                <Th>문의처</Th>
                <Td>{campData.tel}</Td>
              </tr>
              <tr>
                <Th>운영일</Th>
                <Td>{campData.operDeCl}</Td>
              </tr>
              <tr>
                <Th>홈페이지</Th>
                <Td>
                  <PageLink href={campData.resveUrl}>
                    {campData.resveUrl}
                  </PageLink>
                </Td>
              </tr>
              <tr>
                <Th>태그</Th>
                <Td>{campData.posblFcltyCl}</Td>
              </tr>
              <tr>
                <Th>주요시설</Th>
                <Td>{campData.induty}</Td>
              </tr>
              <tr>
                {campData && <Th>별점</Th>}
                <Td>
                  <RateContant disabled value={campData.avgRate} />
                  {`${campData.avgRate.toFixed(1)}`}
                </Td>
              </tr>
            </tbody>
          </Table>
          <Devider />
          <TabsContainer>
            <TabsWrap>
              <InfoTabs
                onClick={setClickedTabs}
                data-role="information"
                selectedTabs={selectedTabs}
              >
                캠핑장 소개
              </InfoTabs>
              <LocationTabs
                onClick={setClickedTabs}
                data-role="location"
                selectedTabs={selectedTabs}
              >
                위치/주변 정보
              </LocationTabs>
              <ReviewTabs
                onClick={setClickedTabs}
                data-role="review"
                selectedTabs={selectedTabs}
              >
                후기
              </ReviewTabs>
            </TabsWrap>
          </TabsContainer>
          <CampContext.Provider value={campData}>
            {selectedTabs === 'information' && (
              <CampInformation reviewImg={reviewImg} campInfo={campInfo} />
            )}
            {selectedTabs === 'location' && <CampLocation />}
            {selectedTabs === 'review' && (
              <Review CampId={CampId} clickedPage="detail" />
            )}
          </CampContext.Provider>
          <Footer />
        </Container>
      )}
    </Main>
  );
};

export default DetailPage;

const {
  Main,
  Container,
  Header,
  Title,
  CampInfoWrap,
  Thumbnail,
  Table,
  Th,
  Td,
  RateContant,
  Devider,
  TabsContainer,
  TabsWrap,
  InfoTabs,
  LocationTabs,
  ReviewTabs,
  Footer,
  PageLink,
} = style;
