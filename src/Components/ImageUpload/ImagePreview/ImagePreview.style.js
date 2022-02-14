import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const ImageName = styled.span`
  font-size: 14px;
  width: 120px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-right: 10px;
`;

const CloseBtn = styled.div`
  cursor: pointer;
`;

export const style = {
  Wrap,
  Image,
  ImageName,
  CloseBtn,
};
