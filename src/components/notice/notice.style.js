import styled from 'styled-components';

const Notification = styled.div`
  text-align: center;
  background: #fdfdfd;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px;
  margin: 10px 0;

  & svg {
    font-size: 20px;
    color: #c2c2c2;
  }
`;

const NotiTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 5px;
`;

const NotiContent = styled.div`
  font-size: 14px;
  color: #616161;
`;

export const style = {
  Notification,
  NotiTitle,
  NotiContent,
};
