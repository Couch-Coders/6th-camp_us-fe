import React, { useState } from 'react';
import { style } from './CommunityPage.style';
import CommunityCategory from './category/CommunityCategory';
import { EditFilled } from '@ant-design/icons';

const CommunityPage = (props) => {
  const [selectedTabs, setSelectedTabs] = useState('all');
  // 클릭한 탭 구별
  function setClickedTabs(e) {
    const role = e.target.dataset.role;
    setSelectedTabs(role);
  }

  return (
    <Container>
      <Wrap>
        <TabsContainer>
          <TabsWrap>
            <Tabs
              onClick={setClickedTabs}
              data-role="all"
              page="all"
              selectedTabs={selectedTabs}
            >
              👀 전체
            </Tabs>
            <Tabs
              onClick={setClickedTabs}
              data-role="free"
              page="free"
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
              data-role="question"
              page="question"
              selectedTabs={selectedTabs}
            >
              ⛺ 궁금해요
            </Tabs>
          </TabsWrap>
        </TabsContainer>
        <PostGroup>
          <CommunityCategory selectedTabs={selectedTabs} />
        </PostGroup>
      </Wrap>
      <CreatePostBtn to="/community/write">
        <EditFilled />
      </CreatePostBtn>
    </Container>
  );
};

export default CommunityPage;
const {
  Container,
  Wrap,
  TabsContainer,
  TabsWrap,
  Tabs,
  PostGroup,
  CreatePostBtn,
} = style;
