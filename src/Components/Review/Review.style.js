import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditForm = styled.form`
  width: 100%;
  display: block;
  background: #ffffff;
  border-radius: 2px;
  padding: 18px;
  margin-bottom: 20px;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;

  @media screen and (max-width: 760px) {
    position: relative;
  }
`;

const EditTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 760px) {
    display: block;
  }
`;

const EditLeft = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const EditRight = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  & > * {
    margin-left: 8px;
    padding: 4px 15px;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
    box-sizing: border-box;
    cursor: pointer;
  }
`;

const RateSelect = styled.div`
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  & ul {
    margin-left: 5px;
  }
`;

const EditButton = styled.div`
  color: #fff;
  background: #73d13d;
  border: 1px solid #73d13d;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  @media screen and (max-width: 760px) {
    display: block;

    & > div:last-child {
      margin: 12px 0;
    }
  }
`;

export const style = {
  Container,
  EditForm,
  EditTop,
  EditLeft,
  EditRight,
  RateSelect,
  EditButton,
  Wrap,
};
