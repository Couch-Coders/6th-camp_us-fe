import styled from 'styled-components';

const SliderList = styled.div`
  position: relative;

  &:after {
    content: '';
    display: block;
    padding-bottom: 95%;
  }

  @media screen and (max-width: 600px) {
    width: 150px;
    height: 150px;
  }
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Best = styled.span`
  font-size: 20px;
  font-weight: 800;
`;

const PostType = styled.div`
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  background-color: #efefef;
  border-radius: 3px;
  color: #919191;
  font-size: 10px;

  @media screen and (max-width: 600px) {
    height: 60%;
    font-size: 6px;
  }
`;

const Title = styled.span`
  font-size: 15px;
  font-weight: 600;

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const PostWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 95%;
  padding: 10px;

  @media screen and (max-width: 600px) {
    padding: 4px;
    width: 150px;
    height: 150px;
  }
`;

const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 1px solid #e1e1e1;
  border-radius: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fff;
  transition: border 200ms ease;
  cursor: pointer;

  &:hover {
    border: 1px solid #73d13d;
  }

  @media screen and (max-width: 600px) {
    padding: 4px;
  }
`;

const PostFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const UserWrap = styled.div`
  display: flex;
  align-items: center;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 5px;

  @media screen and (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`;

const Nickname = styled.span`
  font-size: 13px;

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

const LikeWrap = styled.div`
  display: flex;
  align-items: center;
`;

const LikeIcon = styled.svg`
  margin-right: 5px;
  width: 14px;
  height: 14px;

  path {
    fill: ${({ isLiked }) => (isLiked ? '#ff7875' : '#e0e0e0')};
  }
`;

const LikeCount = styled.span`
  font-size: 12px;
`;

export const style = {
  SliderList,
  HeaderTop,
  Best,
  PostType,
  Title,
  PostWrap,
  PostHeader,
  PostContent,
  PostFooter,
  UserWrap,
  UserAvatar,
  Nickname,
  LikeWrap,
  LikeIcon,
  LikeCount,
};
