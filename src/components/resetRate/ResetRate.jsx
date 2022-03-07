import React from 'react';
import styled from 'styled-components';

const ResetRate = ({ resetRateCount }) => {
  return <Reset onClick={resetRateCount}>별점 초기화</Reset>;
};

export default ResetRate;

const Reset = styled.span`
  font-size: 12px;
  color: #bdbdbd;
  transition: all 200ms ease;
  cursor: pointer;
  padding: 0 5px;

  &:hover {
    color: #757575;
  }
`;
