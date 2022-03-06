import styled, { css } from 'styled-components';

const InfoTag = styled.div`
  font-family: Roboto;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3px 20px;
  margin: 0 7px 7px 0;
  background: #fafafa;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 100px;
  color: black;

  ${(props) =>
    props.role === 'category' &&
    css`
      cursor: pointer;
    `}

  ${(props) =>
    props.checked === true &&
    css`
      color: #73d13d;
      background: #ffffff;
      border: 1px solid #73d13d;
      box-sizing: border-box;
      & {
        font-weight: 600;
      }
    `}

    @media screen and (max-width: 960px) {
    margin: 0;
    margin-right: 7px;
    margin-bottom: 7px;
  }
`;

export const style = {
  InfoTag,
};
