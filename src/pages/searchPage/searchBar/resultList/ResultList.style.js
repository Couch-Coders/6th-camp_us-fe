import styled from 'styled-components';

const Result = styled.li`
  display: flex;
  width: 100%;
  height: 170px;
  list-style: none;
  margin-bottom: 8px;
  cursor: pointer;
  border: 1px solid #e9e9e9;
  box-sizing: border-box;
  background-color: #fff;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover img {
    width: 105%;
    height: 105%;
    transition: all 0.5s ease;
  }
`;

const ImageWrap = styled.div`
  width: 130px;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Content = styled.div`
  width: calc(100% - 130px);
  display: flex;
  flex-direction: column;
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 16px 24px;
  border-bottom: 1px solid #f0f0f0;
  box-sizing: border-box;
  box-shadow: inset 0px -1px 0px #f0f0f0;
`;

const CampTitle = styled.div`
  display: inline-block;
  width: calc(100% - 23px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LikeWrap = styled.div`
  display: flex;
  align-items: center;
`;

const LikeCount = styled.div`
  padding-top: 3px;
  margin-left: 5px;
  font-size: 14px;
`;

const ContentDescription = styled.div`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 90px;
  font-size: 13px;
  color: #161616;
  padding: 16px 24px;
  white-space: normal;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-height: 15px;

  & p:first-child {
    line-height: 1.4;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  & p:last-child {
    color: #adadad;
  }
`;

export const style = {
  Result,
  ImageWrap,
  Image,
  Content,
  ContentHeader,
  CampTitle,
  LikeWrap,
  LikeCount,
  ContentDescription,
};
