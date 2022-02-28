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
`;

const Image = styled.img`
  width: 130px;
  height: 100%;
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
  height: 75px;
  font-size: 13px;
  color: #161616;
  padding: 16px 24px;
  white-space: normal;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-height: 10px;

  & p:last-child {
    color: #adadad;
  }
`;

export const style = {
  Result,
  Image,
  Content,
  ContentHeader,
  CampTitle,
  LikeWrap,
  LikeCount,
  ContentDescription,
};
