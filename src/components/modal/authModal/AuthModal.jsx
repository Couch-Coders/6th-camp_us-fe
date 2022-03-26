import React, { useContext } from 'react';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { UserContext } from '../../auth/AuthProvider';
import {
  signInGoogle,
  signInFacebook,
  signInGithub,
} from '../../../service/firebaseAuth';
import RegisterForm from '../../auth/RegisterForm';
import { style } from './AuthModal.style';

export default function AuthModal({ onClose, TaskId, deleteTask, role }) {
  const { setIsRegisterOpen } = useContext(UserContext);

  // 모달 닫기
  function hideModal(e) {
    e.preventDefault();
    onClose(false);
  }

  // 모달 컨펌
  async function ConfirmModal(e) {
    e.preventDefault();
    deleteTask(TaskId);
    onClose(false);
  }

  return (
    <>
      {role === 'login' && (
        <Modal
          title="로그인"
          visible={true}
          icon={<ExclamationCircleOutlined />}
          onOk={ConfirmModal}
          onCancel={hideModal}
          footer={null}
        >
          <ContentWrap>
            <ContentText>
              <ContentTextHeader>CampUs에 로그인하기</ContentTextHeader>
              <p>각 도시의 캠핑장을 검색해서 찾아보세요!</p>
              <p>어디로 떠나시나요? </p>
            </ContentText>
          </ContentWrap>
          <LoginWrap>
            <LoginButton>
              <Google
                onClick={() => {
                  signInGoogle();
                  onClose();
                }}
              >
                <Logo
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 48 48"
                  class="sc-jHwEXd fcgkBM"
                >
                  <defs>
                    <path
                      id="a"
                      d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                    ></path>
                  </defs>
                  <clipPath id="b">
                    <use href="#a" overflow="visible"></use>
                  </clipPath>
                  <path
                    clip-path="url(#b)"
                    fill="#FBBC05"
                    d="M0 37V11l17 13z"
                  ></path>
                  <path
                    clip-path="url(#b)"
                    fill="#EA4335"
                    d="M0 11l17 13 7-6.1L48 14V0H0z"
                  ></path>
                  <path
                    clip-path="url(#b)"
                    fill="#34A853"
                    d="M0 37l30-23 7.9 1L48 0v48H0z"
                  ></path>
                  <path
                    clip-path="url(#b)"
                    fill="#4285F4"
                    d="M48 48L17 24l-4-3 35-10z"
                  ></path>
                </Logo>
              </Google>
              <LoginText>Google 로그인</LoginText>
            </LoginButton>
            <LoginButton>
              <Facebook
                onClick={() => {
                  signInFacebook();
                  onClose();
                }}
              >
                <Logo
                  xmlns="http://www.w3.org/2000/svg"
                  width="1365.12"
                  height="1365.12"
                  viewBox="0 0 14222 14222"
                >
                  <circle cx="7111" cy="7112" r="7111" fill="#1977f3" />
                  <path
                    d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z"
                    fill="#fff"
                  />
                </Logo>
              </Facebook>
              <LoginText>Facebook 로그인</LoginText>
            </LoginButton>
            <LoginButton>
              <Github
                onClick={() => {
                  signInGithub();
                  onClose();
                }}
              >
                <Logo fill="#ffffff" viewBox="0 0 20 20">
                  <mask
                    id="github"
                    width="20"
                    height="20"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                  >
                    <path
                      fill="#ffffff"
                      fill-rule="evenodd"
                      d="M6.69 15.944c0 .08-.093.145-.21.145-.133.012-.226-.053-.226-.145 0-.081.093-.146.21-.146.12-.012.226.053.226.146zm-1.255-.182c-.028.08.053.173.174.198.105.04.226 0 .25-.081.024-.08-.053-.173-.174-.21-.104-.028-.221.012-.25.093zm1.783-.068c-.117.028-.198.104-.186.197.012.08.117.133.238.105.117-.028.198-.105.186-.186-.012-.076-.121-.129-.238-.116zM9.87.242C4.278.242 0 4.488 0 10.08c0 4.471 2.815 8.298 6.835 9.645.516.093.697-.226.697-.488 0-.25-.012-1.63-.012-2.476 0 0-2.822.605-3.415-1.202 0 0-.46-1.173-1.121-1.475 0 0-.924-.633.064-.621 0 0 1.004.08 1.557 1.04.883 1.557 2.363 1.109 2.94.843.092-.645.354-1.093.645-1.36-2.255-.25-4.529-.576-4.529-4.455 0-1.109.307-1.665.952-2.375-.105-.262-.448-1.342.105-2.738C5.56 4.157 7.5 5.51 7.5 5.51a9.474 9.474 0 0 1 2.532-.344c.86 0 1.726.117 2.533.343 0 0 1.939-1.355 2.782-1.089.552 1.4.21 2.476.105 2.738.645.714 1.04 1.27 1.04 2.375 0 3.891-2.375 4.202-4.63 4.456.372.319.686.923.686 1.87 0 1.36-.012 3.041-.012 3.372 0 .262.186.58.698.488C17.266 18.379 20 14.552 20 10.08 20 4.488 15.464.24 9.871.24zM3.919 14.149c-.052.04-.04.133.029.21.064.064.157.093.21.04.052-.04.04-.133-.029-.21-.064-.064-.157-.092-.21-.04zm-.435-.326c-.028.052.012.117.093.157.064.04.145.028.173-.028.028-.053-.012-.117-.093-.158-.08-.024-.145-.012-.173.029zm1.306 1.435c-.064.053-.04.174.053.25.092.093.21.105.262.04.052-.052.028-.173-.053-.25-.088-.092-.21-.104-.262-.04zm-.46-.593c-.064.04-.064.146 0 .238.065.093.174.133.226.093.065-.053.065-.157 0-.25-.056-.093-.16-.133-.225-.08z"
                      clip-rule="evenodd"
                    ></path>
                  </mask>
                  <g mask="url(#github)">
                    <path fill="#ffffff" d="M0 0h20v20H0z"></path>
                  </g>
                </Logo>
              </Github>
              <LoginText>Github 로그인</LoginText>
            </LoginButton>
          </LoginWrap>
        </Modal>
      )}

      {role === 'register' && (
        <Modal
          title="회원가입"
          visible={true}
          icon={<ExclamationCircleOutlined />}
          onCancel={() => {
            setIsRegisterOpen(false);
          }}
          footer={null}
        >
          <ContentWrap>
            <ContentText>
              <div>
                <p>회원가입 하기</p>
                <p>닉네임을 입력해주세요 !</p>
              </div>
            </ContentText>
            <RegisterForm />
          </ContentWrap>
        </Modal>
      )}
    </>
  );
}

const {
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
} = style;
