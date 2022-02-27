import styled from 'styled-components';

const Title = styled.title`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  margin-bottom: 21px;
`;

const Map = styled.div`
  width: 509.76px;
  height: 355.65px;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0 10px 0 10px;
  }
`;

export const style = {
  Title,
  Map,
};
