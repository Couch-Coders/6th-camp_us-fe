import React, { useEffect, useState } from 'react';
import CampInformation from '../../Components/CampInformation/CampInformation';
import Tag from '../../Components/Tag/Tag';
import CampLocation from '../../Components/CampLocation/CampLocation';
import CampLike from '../../Components/CampLike/CampLike';
import { CampContext } from '../../context/CampContext';
import * as api from '../../Service/camps';
import { style } from './DetailPage.style';
import { useLocation } from 'react-router';
import defaultImg from '../../Assets/Images/default_image.png';
import Review from '../../Components/Review/Review';
import { Rate } from 'antd';

const DetailPage = () => {
  const [campData, setCampData] = useState();
  const [campInfo, setCampInfo] = useState([]);
  const [reviewImg, setReviewImg] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTabs, setSelectedTabs] = useState('information');

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const CampId = params.get('id');

  function setClickedTabs(e) {
    const role = e.target.dataset.role;
    setSelectedTabs(role);
  }

  async function getCampData() {
    setIsLoading(true);
    const response = await api.getCamp(CampId);
    console.log(response);
    console.log(response.sbrsCl);
    const info = response.sbrsCl !== null ? response.sbrsCl.split(',') : [];
    setCampData(response);
    setCampInfo(info);
    setIsLoading(false);
  }

  async function getCampReview() {
    const response = await api.getCampReview(CampId);
    console.log(response);
    for (const item of response.content) {
      if (item.imgUrl === '') continue;
      setReviewImg((prev) => [...prev, item.imgUrl]);
    }
  }

  useEffect(() => {
    getCampData();
    getCampReview();
  }, []);

  return (
    <Main>
      {!isLoading && (
        <Container>
          <Header>
            {campData && <Title>{campData.facltNm}</Title>}
            <CampLike
              likeCount={campData.likeCnt}
              campId={CampId}
              liked={campData.liked}
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
                  <a href={campData.resveUrl}>{campData.resveUrl}</a>
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
                {campData && (
                  <Th>
                    별점
                    {`${campData.avgRate.toFixed(1)}`}
                  </Th>
                )}
                <Td>
                  <Rate disabled value={campData.avgRate} />
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
  Devider,
  TabsContainer,
  TabsWrap,
  InfoTabs,
  LocationTabs,
  ReviewTabs,
  Footer,
} = style;
