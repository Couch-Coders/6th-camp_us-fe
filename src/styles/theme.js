import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  position: relative;
  padding: 35px 0;
  background-color: ${({ grayBg }) => (grayBg ? '#FAFAFA' : '#fff')};
  overflow: hidden;
`;

export const InnerWrapper = styled.div`
  width: 770px;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    width: calc(100% - 20px);
  }
`;

export const SectionTitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #000;
  margin-bottom: 28px;
`;
