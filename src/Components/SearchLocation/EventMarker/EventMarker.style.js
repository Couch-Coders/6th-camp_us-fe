import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.div`
  background-color: #73d13d;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

const CloseBtn = styled.div`
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  padding: 5px;
`;

const Thumbnail = styled.img`
  width: 73px;
  height: 70px;
  padding-right: 5px;
`;

const Address1 = styled.div`
  font-size: 12px;
`;

const Address2 = styled.div`
  font-size: 10px;
`;

const ToDetail = styled(Link)`
  font-size: 12px;
  color: #006be5;

  &:hover {
    color: #039be5;
  }
`;

export const style = {
  Title,
  CloseBtn,
  Content,
  Thumbnail,
  Address1,
  Address2,
  ToDetail,
};
