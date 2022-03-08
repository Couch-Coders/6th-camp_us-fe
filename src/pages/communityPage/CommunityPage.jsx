import React, { useState } from 'react';
import { style } from './CommunityPage.style';
import CommunityAllPost from './category/CommunityAllPost';
import CommunityTalk from './category/CommunityTalk';
import CommunityPicture from './category/CommunityPicture';
import CommunityQnA from './category/CommunityQnA';
import { EditFilled } from '@ant-design/icons';

const CommunityPage = (props) => {
  const [selectedTabs, setSelectedTabs] = useState('allPost');
  // 클릭한 탭 구별
  function setClickedTabs(e) {
    const role = e.target.dataset.role;
    setSelectedTabs(role);
  }

  return (
    <Test>
      <Container>
        <TabsContainer>
          <TabsWrap>
            <Tabs
              onClick={setClickedTabs}
              data-role="allPost"
              page="allPost"
              selectedTabs={selectedTabs}
            >
              👀 전체
            </Tabs>
            <Tabs
              onClick={setClickedTabs}
              data-role="talk"
              page="talk"
              selectedTabs={selectedTabs}
            >
              👄 캠퍼수다
            </Tabs>
            <Tabs
              onClick={setClickedTabs}
              data-role="picture"
              page="picture"
              selectedTabs={selectedTabs}
            >
              🎞️ 캠핑한장
            </Tabs>
            <Tabs
              onClick={setClickedTabs}
              data-role="QnA"
              page="QnA"
              selectedTabs={selectedTabs}
            >
              ⛺ 궁금해요
            </Tabs>
          </TabsWrap>
        </TabsContainer>
        <PostGroup>
          {selectedTabs === 'allPost' && (
            <CommunityAllPost selectedTabs={selectedTabs} />
          )}
          {selectedTabs === 'talk' && (
            <CommunityTalk selectedTabs={selectedTabs} />
          )}
          {selectedTabs === 'picture' && (
            <CommunityPicture selectedTabs={selectedTabs} />
          )}
          {selectedTabs === 'QnA' && (
            <CommunityQnA selectedTabs={selectedTabs} />
          )}
        </PostGroup>
      </Container>
      <CreatePostBtn to="/community/write">
        <EditFilled />
      </CreatePostBtn>
    </Test>
  );
};

export default CommunityPage;
const {
  Test,
  Container,
  TabsContainer,
  TabsWrap,
  Tabs,
  PostGroup,
  CreatePostBtn,
} = style;
