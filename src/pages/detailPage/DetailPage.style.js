import { Rate } from 'antd';
import styled, { css } from 'styled-components';

const SectionTitle = styled.h2`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  letter-spacing: -0.02em;
  color: #000000;
`;

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 480px;
  width: 100%;
  padding-top: 50px;
  height: auto;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 50px 10px 0 10px;
  }
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
`;

const Title = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  letter-spacing: -0.02em;
  color: #000000;
`;

const CampInfoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 320px;
  margin-top: 25px;
  margin-bottom: 37px;
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 20px;
`;

const Th = styled.th`
  display: flex;
  justify-content: flex-start;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  padding-bottom: 18px;
`;

const Td = styled.td`
  width: 80%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  padding-bottom: 18px;
`;

const RateContant = styled(Rate)`
  margin-right: 10px;
`;

const Devider = styled.div`
  width: 100%;
  border: 1px solid #d9d9d9;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 25px;
`;

const TabsWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  width: 267px;
  height: 57px;
  background: rgba(255, 255, 255, 1e-5);
  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;
`;

const InfoTabs = styled.span`
  height: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;

  ${(props) =>
    props.selectedTabs === 'information'
      ? css`
          color: #389e0d;
          border-bottom: 2px solid #389e0d;
        `
      : css`
          color: #000000;
        `}
`;

const LocationTabs = styled.span`
  height: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;

  ${(props) =>
    props.selectedTabs === 'location'
      ? css`
          color: #389e0d;
          border-bottom: 2px solid #389e0d;
        `
      : css`
          color: #000000;
        `}
`;

const ReviewTabs = styled.span`
  height: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;

  ${(props) =>
    props.selectedTabs === 'review'
      ? css`
          color: #389e0d;
          border-bottom: 2px solid #389e0d;
        `
      : css`
          color: #000000;
        `}
`;

const Footer = styled.footer`
  width: 100%;
  height: 40px;
`;

const PageLink = styled.a`
  color: #006be5;

  &:hover {
    color: #039be5;
  }
`;

export const style = {
  SectionTitle,
  Main,
  Container,
  Header,
  Title,
  CampInfoWrap,
  Thumbnail,
  Table,
  Th,
  Td,
  RateContant,
  Devider,
  TabsContainer,
  TabsWrap,
  InfoTabs,
  LocationTabs,
  ReviewTabs,
  Footer,
  PageLink,
};
