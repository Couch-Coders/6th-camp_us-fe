import styled from 'styled-components';

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

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
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

const AvatarImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: black;
  overflow: hidden;
  margin-right: 15px;
`;

const UserName = styled.span`
  font-size: 16px;
  margin-right: 15px;
`;

const Time = styled.span`
  font-size: 16px;
  color: #9e9e9e;
`;

const PostActionWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HandlePost = styled.span`
  font-size: 16px;
  color: #9e9e9e;
  margin-left: 15px;
  cursor: pointer;
`;

const ContentWrap = styled.div`
  margin-top: 50px;
`;

const Content = styled.span`
  font-size: 16px;
`;

const ImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContent = styled.img`
  width: 80%;
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

const PostLike = styled.svg`
  width: 22px;
  height: 20px;
  margin-right: 5px;
  fill: ${({ isLike }) => (isLike ? '#ff7875' : '#e0e0e0')};
`;

const LikeCount = styled.span`
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

export const style = {
  Container,
  TitleWrap,
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
  ImageWrap,
  ImageContent,
  PostReact,
  LikeWrap,
  PostLike,
  LikeCount,
  CommentWrap,
  CommentCount,
};
