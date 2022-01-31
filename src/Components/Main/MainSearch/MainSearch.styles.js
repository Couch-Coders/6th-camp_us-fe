import styled from 'styled-components';

export const SearchBox = styled.div`
  position: relative;

  @media screen and (max-width: 400px) {
    & > * {
      display: block;
    }
    & div {
      display: block;
      margin-top: 10px;
    }
  }
`;

export const SelectName = styled.div`
  color: #595959;
  font-size: 14px;
  margin: 0 10px;

  &:first-child {
    margin-left: 0;
  }
`;

export const SearchContent = styled.div`
  max-width: 100%;
  margin-top: 10px;
`;
