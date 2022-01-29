import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CampInfoTag from '../../Components/CampInfoTag/CampInfoTag';
import * as campService from '../../Service/camps';

const MainPage = () => {
  const [campData, setCampData] = useState();
  const [campInfo, setCampInfo] = useState([]);
  const [campReview, setCampReview] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
              {campReview && <Th>별점 {campReview[0].contents[0].rate}</Th>}
              <Td></Td>
            </tr>
          </Table>
        </Container>
      )}
    </Main>
  );
};

export default MainPage;

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
