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
  padding: 0 30px;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

const Google = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0 5px 25px rgb(0 0 0 / 15%);
  cursor: pointer;

  @media screen and (max-width: 600px) {
    width: 90px;
    height: 90px;
  }
`;

const Facebook = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #1778f2;
  border-radius: 10px;
  box-shadow: 0 5px 25px rgb(0 0 0 / 15%);
  cursor: pointer;

  @media screen and (max-width: 600px) {
    width: 90px;
    height: 90px;
  }
`;

const Github = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #000000;
  border-radius: 10px;
  box-shadow: 0 5px 25px rgb(0 0 0 / 15%);
  cursor: pointer;

  @media screen and (max-width: 600px) {
    width: 90px;
    height: 90px;
  }
`;

const LoginText = styled.div`
  font-size: 13px;
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
