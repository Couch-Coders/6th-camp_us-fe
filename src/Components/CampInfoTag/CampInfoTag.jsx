import React from 'react';
import styled from 'styled-components';

const CampInfoTag = ({ tag }) => {
  return (
    <InfoTag>
      <TagText>{tag}</TagText>
    </InfoTag>
  );
};

export default React.memo(CampInfoTag);

const InfoTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1px 20px;
  margin: 16px 7px 0px 0px;
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
