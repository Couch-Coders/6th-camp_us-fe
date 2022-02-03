import React, { useState, useEffect } from 'react';
import LikesList from '../../Components/MyPage/LikesList';
import MyReviews from '../../Components/MyPage/MyReviews';
import AlrimList from '../../Components/MyPage/AlrimList';
import { Avatar } from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import { Section, InnerWrapper } from '../../Styles/theme';
import {
  SectionTitle,
  MyInfo,
  MyProfile,
  UserName,
  MyActivity,
  TabsContainer,
  TabsWrap,
  InfoTabs,
  LocationTabs,
  ReviewTabs,
} from './MyPage.styles';

function MyPage(props) {
  const [selectedTabs, setSelectedTabs] = useState('likesList');

  function setClickedTabs(e) {
    const role = e.target.dataset.role;
    setSelectedTabs(role);
  }

  return (
    <Section>
      <InnerWrapper>
        <SectionTitle>마이페이지</SectionTitle>
        <MyInfo>
          <MyProfile>
            <Avatar
              style={{ backgroundColor: '#87d068' }}
              icon={<UserOutlined />}
            />
            <UserName>sunheekim</UserName>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.02681 10.7502C3.05806 10.7502 3.08931 10.7471 3.12056 10.7424L5.74868 10.2815C5.77993 10.2752 5.80962 10.2612 5.83149 10.2377L12.4549 3.61431C12.4694 3.59985 12.4809 3.58268 12.4888 3.56378C12.4966 3.54488 12.5006 3.52461 12.5006 3.50415C12.5006 3.48369 12.4966 3.46342 12.4888 3.44452C12.4809 3.42562 12.4694 3.40845 12.4549 3.39399L9.85806 0.795557C9.82837 0.765869 9.78931 0.750244 9.74712 0.750244C9.70493 0.750244 9.66587 0.765869 9.63618 0.795557L3.01274 7.41899C2.98931 7.44243 2.97524 7.47056 2.96899 7.50181L2.50806 10.1299C2.49286 10.2136 2.49829 10.2998 2.52388 10.3809C2.54947 10.4621 2.59445 10.5357 2.65493 10.5956C2.75806 10.6956 2.88774 10.7502 3.02681 10.7502ZM4.07993 8.02524L9.74712 2.35962L10.8924 3.50493L5.22524 9.17056L3.83618 9.41587L4.07993 8.02524ZM12.7502 12.0627H1.25024C0.973682 12.0627 0.750244 12.2862 0.750244 12.5627V13.1252C0.750244 13.194 0.806494 13.2502 0.875244 13.2502H13.1252C13.194 13.2502 13.2502 13.194 13.2502 13.1252V12.5627C13.2502 12.2862 13.0268 12.0627 12.7502 12.0627Z"
                fill="black"
              />
            </svg>
          </MyProfile>
          <MyActivity>
            <li>방문 : 12</li>
            <li>작성글 : 12</li>
            <li>리뷰 : 12</li>
          </MyActivity>
        </MyInfo>
        <TabsContainer>
          <TabsWrap>
            <InfoTabs
              onClick={setClickedTabs}
              data-role="likesList"
              selectedTabs={selectedTabs}
            >
              좋아요 리스트
            </InfoTabs>
            <LocationTabs
              onClick={setClickedTabs}
              data-role="myReviews"
              selectedTabs={selectedTabs}
            >
              작성한 리뷰
            </LocationTabs>
            <ReviewTabs
              onClick={setClickedTabs}
              data-role="alrimList"
              selectedTabs={selectedTabs}
            >
              알림
            </ReviewTabs>
          </TabsWrap>
        </TabsContainer>
        {selectedTabs === 'likesList' && <LikesList />}
        {selectedTabs === 'myReviews' && <MyReviews />}
        {selectedTabs === 'alrimList' && <AlrimList />}
      </InnerWrapper>
    </Section>
  );
}
export default MyPage;
