import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import CampInformation from '../../Components/CampInformation/CampInformation';
import CampInfoTag from '../../Components/CampInfoTag/CampInfoTag';
import CampLocation from '../../Components/CampLocation/CampLocation';
import CampReview from '../../Components/CampReview/CampReview';
import { CampContext } from '../../context/CampContext';
import * as campService from '../../Service/camps';

const DetailPage = () => {
  const [campData, setCampData] = useState();
  const [campInfo, setCampInfo] = useState([]);
  const [campReview, setCampReview] = useState();
  const [reviewImg, setReviewImg] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTabs, setSelectedTabs] = useState('information');

  function setClickedTabs(e) {
    const role = e.target.dataset.role;
    setSelectedTabs(role);
  }

  async function getCampData() {
    setIsLoading(true);
    const response = await campService.getCamp();
    const info = response.sbrsCl.split(',');
    setCampData(response);
    setCampInfo(info);
    setIsLoading(false);
  }

  async function getCampReview() {
    const response = await campService.getReview();
    setCampReview(response);
    response[0].contents.forEach((item) => {
      setReviewImg((prev) => [...prev, item.imgUrl]);
    });
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
            <LikeWrap>
              <Like>
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1817 0C13.923 0 11.964 1.32942 11 3.27142C10.036 1.32942 8.07697 0 5.81826 0C2.60477 0 0 2.69143 0 6.01173C0 12.5676 11 20 11 20C11 20 22 12.5676 22 6.01173C22 2.69143 19.3952 0 16.1817 0Z"
                    fill="#FF7875"
                  />
                </svg>
              </Like>
              {campData && <LikeCount>{campData.like_cnt}</LikeCount>}
            </LikeWrap>
          </Header>
          <CampInfoWrap>
            {campInfo.map((item, index) => (
              <CampInfoTag tag={item} key={index} />
            ))}
          </CampInfoWrap>
          <Thumbnail src={campData.firstImageUrl} alt="thumbnail"></Thumbnail>
          <Table>
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
              {campData && <Th>별점 {campData.rate}</Th>}
              <Td>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.04426 1.10489C6.33393 0.163822 7.66607 0.163825 7.95574 1.1049L8.80337 3.85854C8.93251 4.27807 9.32015 4.56434 9.75911 4.56434H12.6123C13.5679 4.56434 13.9791 5.77633 13.2209 6.35785L10.8212 8.19818C10.4895 8.45255 10.351 8.88639 10.474 9.28589L11.3684 12.1914C11.6549 13.1224 10.577 13.8719 9.8041 13.2792L7.60855 11.5954C7.24956 11.3201 6.75044 11.3201 6.39145 11.5954L4.19591 13.2792C3.42301 13.8719 2.34506 13.1224 2.63161 12.1914L3.52599 9.28588C3.64897 8.88639 3.51049 8.45255 3.1788 8.19818L0.779129 6.35785C0.0208566 5.77633 0.432093 4.56434 1.38768 4.56434H4.24089C4.67985 4.56434 5.06749 4.27807 5.19663 3.85853L6.04426 1.10489Z"
                    fill="#FAAD14"
                  />
                </svg>
              </Td>
            </tr>
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
            {selectedTabs === 'review' && <CampReview />}
          </CampContext.Provider>
        </Container>
      )}
    </Main>
  );
};

export default DetailPage;

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 480px;
  width: 480px;
  padding-top: 50px;
  height: auto;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
`;

const Title = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  letter-spacing: -0.02em;
  color: #000000;
`;

const LikeWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Like = styled.div`
  width: 22px;
  height: 20px;
  margin-right: 5px;
`;

const LikeCount = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #262626;
`;

const CampInfoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Thumbnail = styled.img`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 37px;
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 20px;
`;

const Th = styled.th`
  display: flex;
  justify-content: flex-start;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
`;

const Td = styled.td`
  width: 80%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  padding-bottom: 18px;
`;

const Devider = styled.div`
  width: 100%;
  border: 1px solid #d9d9d9;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 25px;
`;

const TabsWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  width: 267px;
  height: 57px;
  background: rgba(255, 255, 255, 1e-5);
  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;
`;

const InfoTabs = styled.span`
  height: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;

  ${(props) =>
    props.selectedTabs === 'information'
      ? css`
          color: #389e0d;
          border-bottom: 2px solid #389e0d;
        `
      : css`
          color: #000000;
        `}
`;

const LocationTabs = styled.span`
  height: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;

  ${(props) =>
    props.selectedTabs === 'location'
      ? css`
          color: #389e0d;
          border-bottom: 2px solid #389e0d;
        `
      : css`
          color: #000000;
        `}
`;

const ReviewTabs = styled.span`
  height: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;

  ${(props) =>
    props.selectedTabs === 'review'
      ? css`
          color: #389e0d;
          border-bottom: 2px solid #389e0d;
        `
      : css`
          color: #000000;
        `}
`;
