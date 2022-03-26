import styled from 'styled-components';

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  align-self: stretch;
  flex-grow: 1;
  margin: 10px 0px;
`;

const ContentText = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  color: rgba(0, 0, 0, 0.85);
`;

const ContentTextHeader = styled.p`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 30px;
`;

const LoginWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Google = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 10px;
  box-shadow: 0 5px 25px rgb(0 0 0 / 15%);
  cursor: pointer;
`;

const Facebook = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  background-color: #1778f2;
  border-radius: 10px;
  box-shadow: 0 5px 25px rgb(0 0 0 / 15%);
  cursor: pointer;
`;

const Github = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  background-color: #000000;
  border-radius: 10px;
  box-shadow: 0 5px 25px rgb(0 0 0 / 15%);
  cursor: pointer;
`;

const LoginText = styled.div`
  font-size: 14px;
  font-weight: 800;
  margin-top: 10px;
  color: #616161;
`;

const Logo = styled.svg`
  width: 50px;
  height: 50px;
`;

const LoginButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const style = {
  ContentWrap,
  ContentText,
  ContentTextHeader,
  LoginWrap,
  Facebook,
  Github,
  Google,
  LoginText,
  Logo,
  LoginButton,
};
