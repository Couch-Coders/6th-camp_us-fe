import styled from 'styled-components';

const InfoTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1px 20px;
  margin: 0 7px 7px 0;
  height: 22px;
  background: #fafafa;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 100px;
`;

const TagText = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.85);
`;

export const style = {
  InfoTag,
  TagText,
};
