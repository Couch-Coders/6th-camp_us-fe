import styled from 'styled-components';
import { Button } from 'antd';

const LikeWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Like = styled.div`
  width: 22px;
  height: 20px;
  margin-right: 5px;
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

export const style = {
  LikeWrap,
  Like,
  LikeIcon,
  LikeCount,
};
