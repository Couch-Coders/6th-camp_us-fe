import styled from 'styled-components';

const SearchBox = styled.div`
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

const SelectName = styled.div`
  color: #595959;
  font-size: 14px;
  margin: 0 10px;

  &:first-child {
    margin-left: 0;
  }
`;

const SearchContent = styled.div`
  max-width: 100%;
  margin-top: 10px;
`;

export const style = {
  SearchBox,
  SelectName,
  SearchContent,
};
