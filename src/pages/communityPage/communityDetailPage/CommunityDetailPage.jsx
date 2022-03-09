import { MessageFilled } from '@ant-design/icons';
import React from 'react';
import { style } from './communityDetailPage.style';
import default_Imgage from '../../../assets/images/default_image.png';

const CommunityDetailPage = () => {
  return (
    <Container>
      <Wrap>
        <Title>캠핑장 꿀팁</Title>
        <PostType>캠핑수다</PostType>
      </Wrap>
      <Wrap>
        <UserWrap>
          <AvatarImg />
          <UserName>Nickname</UserName>
          <Time>2022.03.09</Time>
        </UserWrap>
        <PostActionWrap>
          <HandlePost>수정</HandlePost>
          <HandlePost>삭제</HandlePost>
        </PostActionWrap>
      </Wrap>
      <ContentWrap>
        <Content>
          열심히 일한 당신, 떠나라! 캠핑하기 더없이 좋은 계절 여름. 언젠가부터
          전국적으로 사랑을 받으며 폭발적인 인기를 끈 덕에 가족과, 연인과 떠나는
          캠핑이 낯설지 않은 요즘이다. 그러나 부푼 꿈을 안고 도착한 캠핑장에는
          예기치 못한 복병이 기다리고 있다. 더러운 샤워시설, 불 피우기, 모기와의
          전쟁 등등. 온갖 골치 아픈 일들이 꼬리에 꼬리를 물고 이어지는 그때,
          집에 있는 물건 몇 개만 있으면 야생 서바이벌도 두렵지 않다! 아래의 캠핑
          꿀팁으로 다음번 캠핑은 오션뷰 딸린 고급 호텔 못지않은 안락함을
          즐겨보시길. 
        </Content>
        <ImageContent src={default_Imgage} alt="ImageContent"></ImageContent>
        <ImageContent src={default_Imgage} alt="ImageContent"></ImageContent>
      </ContentWrap>
      <PostReact>
        <LikeWrap>
          <Like>
            <LikeIcon
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1817 0C13.923 0 11.964 1.32942 11 3.27142C10.036 1.32942 8.07697 0 5.81826 0C2.60477 0 0 2.69143 0 6.01173C0 12.5676 11 20 11 20C11 20 22 12.5676 22 6.01173C22 2.69143 19.3952 0 16.1817 0Z" />
            </LikeIcon>
          </Like>
          <LikeCount>10</LikeCount>
        </LikeWrap>
        <CommentWrap>
          <MessageFilled />
          <CommentCount>10</CommentCount>
        </CommentWrap>
      </PostReact>
    </Container>
  );
};

export default CommunityDetailPage;

const {
  Container,
  Wrap,
  Title,
  PostType,
  UserWrap,
  AvatarImg,
  UserName,
  Time,
  PostActionWrap,
  HandlePost,
  ContentWrap,
  Content,
  ImageContent,
  PostReact,
  LikeWrap,
  Like,
  LikeIcon,
  LikeCount,
  CommentWrap,
  CommentCount,
} = style;
