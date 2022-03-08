import { MessageFilled } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';
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

const Container = styled.section`
  position: relative;
  width: 740px;
  padding-top: 50px;
  margin: auto;
  height: auto;

  @media screen and (max-width: 960px) {
    display: block;
    width: 100%;
    padding: 50px 10px 0 10px;
    overflow: visible;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin: 0;
`;

const PostType = styled.div`
  padding: 4px 6px;
  height: 30px;
  background-color: #efefef;
  border-radius: 5px;
  color: #919191;
  font-size: 14px;
`;

const UserWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AvatarImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: black;
  overflow: hidden;
  margin-right: 15px;
`;

const UserName = styled.span`
  font-size: 20px;
  margin-right: 15px;
`;

const Time = styled.span`
  font-size: 15px;
  color: #9e9e9e;
`;

const PostActionWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HandlePost = styled.span`
  font-size: 15px;
  color: #9e9e9e;
  margin-left: 15px;
`;

const ContentWrap = styled.div`
  margin-top: 50px;
`;

const Content = styled.span`
  font-size: 18px;
`;

const ImageContent = styled.img`
  width: 100%;
  height: 400px;
  margin-top: 20px;
`;

const PostReact = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

const LikeWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Like = styled.div`
  width: 22px;
  height: 20px;
  margin-right: 8px;
`;

const LikeIcon = styled.svg`
  cursor: pointer;
  width: 22px;
  height: 20px;
  transition: all 200ms ease;

  path {
    fill: ${({ isLikeState }) => (isLikeState ? '#ff7875' : '#e0e0e0')};
  }

  &:hover {
    transform: scale(1.2);
  }
`;

const LikeCount = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #262626;
`;

const CommentWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  & svg {
    color: #e0e0e0;
    font-size: 22px;
  }
`;

const CommentCount = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  margin-left: 10px;
  color: #262626;
`;
