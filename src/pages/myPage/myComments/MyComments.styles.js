import styled from 'styled-components';

/* editingTemplete */
const EditForm = styled.form`
  width: 100%;
  display: block;
  background: #ffffff;
  border-radius: 2px;
  padding: 18px;
  margin-bottom: 20px;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;

  @media screen and (max-width: 760px) {
    position: relative;
  }
`;

const EditTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  @media screen and (max-width: 760px) {
    display: block;
  }
`;

const EditRight = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  & > * {
    margin-left: 8px;
    padding: 4px 15px;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
    box-sizing: border-box;
    cursor: pointer;
  }

  @media screen and (max-width: 760px) {
    position: absolute;
    top: 18px;
    right: 18px;
  }
`;

const EditButton = styled.div`
  color: #fff;
  background: #73d13d;
  border: 1px solid #73d13d;
`;

const CancleButton = styled.button`
  color: #b9b9b9;
  background: #fff;
  border: 1px solid #b9b9b9;
`;

/* viewTemplete */
const Post = styled.li`
  background-color: #fff;
  padding: 16px;
  padding-top: 24px;
  margin-bottom: 8px;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 5px;
`;

const PostDivision = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostType = styled.span`
  padding: 4px 6px;
  background-color: #efefef;
  border-radius: 3px;
  color: #919191;
  font-size: 14px;
`;

const HandleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 200ms ease;

  & > div:hover {
    color: #cbcbcb;
  }
`;

const PostDetail = styled.div`
  height: auto;
  cursor: pointer;
`;

const PostTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
`;

const PostTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 0;
`;

const PostCreateTime = styled.div`
  color: #b5b5b5;
  font-size: 14px;
`;

const HandleReview = styled.div`
  margin-left: 8px;
  font-size: 14px;
  color: #919191;
`;

const PostContent = styled.div`
  margin: 8px 0;
`;

const ReadMore = styled.span`
  cursor: pointer;
  color: #9d9d9d;
  font-size: 12px;
`;

const PostReact = styled.div`
  margin-top: 8px;
  display: flex;
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
    fill: #e0e0e0;
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

export const style = {
  EditForm,
  EditTop,
  EditRight,
  EditButton,
  CancleButton,
  PostDivision,
  Post,
  PostType,
  PostDetail,
  PostTop,
  PostTitle,
  PostCreateTime,
  HandleContent,
  HandleReview,
  PostContent,
  ReadMore,
  PostReact,
  LikeWrap,
  Like,
  LikeIcon,
  LikeCount,
};
