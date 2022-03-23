import styled from 'styled-components';

const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  background-color: #fff;
  padding: 10px 20px;
  margin-bottom: 16px;

  @media screen and (max-width: 600px) {
    padding: 10px 5px;
  }
`;

const TitleLayout = styled.div`
  overflow: hidden;
  background-color: #eeeeee;
  width: 100px;
  height: 25px;
  text-align: center;
  margin-bottom: 16px;
`;

const SliderLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SliderListLayout = styled.div`
  overflow: hidden;
  background-color: #eeeeee;
  width: 30%;
  height: 100%;

  &:after {
    content: '';
    display: block;
    padding-bottom: 90%;
    background-color: #e0e0e0;
    box-shadow: 0 0 30px 30px #e0e0e0;
    animation: loading 2s infinite;

    @keyframes loading {
      0% {
        transform: translateX(-50%);
      }
      50% {
        transform: translateX(50%);
      }
      100% {
        transform: translate(100%);
      }
    }
  }
`;

export const style = {
  ContainerLayout,
  SliderLayout,
  TitleLayout,
  SliderListLayout,
};
