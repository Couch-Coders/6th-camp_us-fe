import styled from 'styled-components';

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 24px;
  align-self: stretch;
  flex-grow: 1;
  margin: 10px 0px;
`;

const ContentText = styled.div`
  width: 271px;
  height: 96px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
  color: rgba(0, 0, 0, 0.85);
`;

const LoginWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LoginButton = styled.div`
  width: 163px;
  height: 40px;
  display: flex;
  border: 1px solid #4285f4;
  align-self: center;
  cursor: pointer;
  left: 205px;
  top: 272px;
`;

const GoogleLogo = styled.svg`
  width: 20px;
  height: 20px;
`;

const LoginLeft = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginRight = styled.div`
  width: 75%;
  height: 100%;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  background-color: #4285f4;
`;

export const style = {
  ContentWrap,
  ContentText,
  LoginWrap,
  LoginButton,
  GoogleLogo,
  LoginLeft,
  LoginRight,
};
