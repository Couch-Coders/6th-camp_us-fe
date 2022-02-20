import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { signInGoogle } from '../../Service/firebaseAuth';
import { UserContext } from '../auth/AuthProvider';
import RegisterForm from '../auth/RegisterForm';

const Modal = ({ role, closeLoginModal }) => {
  const { setIsRegisterOpen } = useContext(UserContext);
  const modalRef = useRef();

  const handleClickOutside = (e) => {
    if (e.target.tagName === 'SPAN' || e.target.tagName === 'BUTTON') return;

    if (!modalRef.current?.contains(e.target)) closeLoginModal();
  };

  return (
    <Container onClick={handleClickOutside}>
      {role === 'login' && (
        <LoginModal ref={modalRef}>
          <ModalHeader>
            <ModalTitle>Login</ModalTitle>
            <CloseButton onClick={closeLoginModal}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.92473 5.99916L11.6122 0.411663C11.6908 0.318806 11.6247 0.177734 11.5033 0.177734H10.0783C9.99437 0.177734 9.91401 0.215234 9.85865 0.27952L5.99258 4.88845L2.12651 0.27952C2.07294 0.215234 1.99258 0.177734 1.90687 0.177734H0.481867C0.360439 0.177734 0.294367 0.318806 0.372939 0.411663L5.06044 5.99916L0.372939 11.5867C0.355338 11.6074 0.344047 11.6327 0.340404 11.6596C0.336762 11.6865 0.340922 11.7139 0.352391 11.7386C0.36386 11.7632 0.382156 11.784 0.405107 11.7985C0.428057 11.8131 0.454698 11.8207 0.481867 11.8206H1.90687C1.9908 11.8206 2.07115 11.7831 2.12651 11.7188L5.99258 7.10988L9.85865 11.7188C9.91222 11.7831 9.99258 11.8206 10.0783 11.8206H11.5033C11.6247 11.8206 11.6908 11.6795 11.6122 11.5867L6.92473 5.99916Z"
                  fill="black"
                  fill-opacity="0.45"
                />
              </svg>
            </CloseButton>
          </ModalHeader>
          <Content>
            <ContentWrap>
              <ContentText>
                <div>
                  <p>CampUs에 로그인하기</p>
                </div>
                <div>
                  <p>각 도시의 캠핑장을 검색해서 찾아보세요!</p>
                  <p>어디로 떠나시나요? </p>
                </div>
              </ContentText>
            </ContentWrap>
            <LoginButton>
              <LoginLeft>
                <GoogleLogo
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 48 48"
                >
                  <defs>
                    <path
                      id="a"
                      d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                    />
                  </defs>
                  <clipPath id="b">
                    <use href="#a" overflow="visible" />
                  </clipPath>
                  <path
                    clip-path="url(#b)"
                    fill="#FBBC05"
                    d="M0 37V11l17 13z"
                  />
                  <path
                    clip-path="url(#b)"
                    fill="#EA4335"
                    d="M0 11l17 13 7-6.1L48 14V0H0z"
                  />
                  <path
                    clip-path="url(#b)"
                    fill="#34A853"
                    d="M0 37l30-23 7.9 1L48 0v48H0z"
                  />
                  <path
                    clip-path="url(#b)"
                    fill="#4285F4"
                    d="M48 48L17 24l-4-3 35-10z"
                  />
                </GoogleLogo>
              </LoginLeft>
              <LoginRight
                onClick={() => {
                  signInGoogle();
                  closeLoginModal();
                }}
              >
                Sign in with Google
              </LoginRight>
            </LoginButton>
          </Content>
          <LoginFooter />
        </LoginModal>
      )}

      {role === 'register' && (
        <LoginModal ref={modalRef}>
          <ModalHeader>
            <ModalTitle>Sign Up</ModalTitle>
            <CloseButton
              onClick={() => {
                setIsRegisterOpen(false);
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.92473 5.99916L11.6122 0.411663C11.6908 0.318806 11.6247 0.177734 11.5033 0.177734H10.0783C9.99437 0.177734 9.91401 0.215234 9.85865 0.27952L5.99258 4.88845L2.12651 0.27952C2.07294 0.215234 1.99258 0.177734 1.90687 0.177734H0.481867C0.360439 0.177734 0.294367 0.318806 0.372939 0.411663L5.06044 5.99916L0.372939 11.5867C0.355338 11.6074 0.344047 11.6327 0.340404 11.6596C0.336762 11.6865 0.340922 11.7139 0.352391 11.7386C0.36386 11.7632 0.382156 11.784 0.405107 11.7985C0.428057 11.8131 0.454698 11.8207 0.481867 11.8206H1.90687C1.9908 11.8206 2.07115 11.7831 2.12651 11.7188L5.99258 7.10988L9.85865 11.7188C9.91222 11.7831 9.99258 11.8206 10.0783 11.8206H11.5033C11.6247 11.8206 11.6908 11.6795 11.6122 11.5867L6.92473 5.99916Z"
                  fill="black"
                  fill-opacity="0.45"
                />
              </svg>
            </CloseButton>
          </ModalHeader>
          <Content>
            <ContentWrap>
              <ContentText>
                <div>
                  <p>회원가입 하기</p>
                  <p>닉네임을 입력해주세요 !</p>
                </div>
              </ContentText>
              {/* 회원가입 컴포넌트 */}
              <RegisterForm />
            </ContentWrap>
          </Content>
          <LoginFooter />
        </LoginModal>
      )}
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0px;
  top: 0px;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
`;

const LoginModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 572px;
  height: 388px;
  background: #ffffff;
  box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12),
    0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05);
  border-radius: 2px;
`;

const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  background: #ffffff;
  box-shadow: inset 0px -1px 0px #f0f0f0;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
`;

const ModalTitle = styled.title`
  position: static;
  width: 60px;
  height: 24px;
  left: 24px;
  top: calc(50% - 24px / 2);
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.85);
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 36px;
`;

const CloseButton = styled.button`
  padding-right: 22px;
  display: flex;
  cursor: pointer;
  outline: none;
  border: 0;
  background-color: transparent;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: static;
  width: 572px;
  height: 280px;
  left: 0px;
  top: 56px;
  flex: none;
  align-self: stretch;
  flex-grow: 1;
  margin: 0px 0px;
`;

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
  position: static;
  width: 271px;
  height: 96px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.85);
`;

const LoginButton = styled.div`
  width: 163px;
  height: 40px;
  display: flex;
  border: 1px solid #4285f4;
  cursor: pointer;
  position: absolute;
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

const LoginFooter = styled.div`
  width: 100%;
  height: 52px;
  background: #ffffff;
  box-shadow: inset 0px 1px 0px #f0f0f0;
`;
