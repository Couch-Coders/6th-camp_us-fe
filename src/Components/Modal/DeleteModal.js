import React, { useContext, useRef } from 'react';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { UserContext } from '../auth/AuthProvider';
import styled from 'styled-components';
import { signInGoogle } from '../../Service/firebaseAuth';
import RegisterForm from '../auth/RegisterForm';

export default function DeleteModal({ onClose, reviewId, deleteTask, role }) {
  const { setIsRegisterOpen } = useContext(UserContext);

  function hideModal(e) {
    e.preventDefault();
    onClose(false);
  }

  async function ConfirmModal(e) {
    e.preventDefault();
    deleteTask(reviewId);
    onClose(false);
  }

  return (
    <>
      {role === 'deleteReview' && (
        <Modal
          title="삭제"
          visible={true}
          icon={<ExclamationCircleOutlined />}
          onOk={ConfirmModal}
          onCancel={hideModal}
          okText="삭제"
          cancelText="취소"
        >
          <p>정말 삭제하시겠습니까?</p>
        </Modal>
      )}

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
              <div>
                <p>CampUs에 로그인하기</p>
              </div>
              <div>
                <p>각 도시의 캠핑장을 검색해서 찾아보세요!</p>
                <p>어디로 떠나시나요? </p>
              </div>
            </ContentText>
          </ContentWrap>
          <LoginWrap>
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
                  <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                  <path
                    clipPath="url(#b)"
                    fill="#EA4335"
                    d="M0 11l17 13 7-6.1L48 14V0H0z"
                  />
                  <path
                    clipPath="url(#b)"
                    fill="#34A853"
                    d="M0 37l30-23 7.9 1L48 0v48H0z"
                  />
                  <path
                    clipPath="url(#b)"
                    fill="#4285F4"
                    d="M48 48L17 24l-4-3 35-10z"
                  />
                </GoogleLogo>
              </LoginLeft>
              <LoginRight
                onClick={() => {
                  signInGoogle();
                  onClose();
                }}
              >
                Sign in with Google
              </LoginRight>
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
            {/* 회원가입 컴포넌트 */}
            <RegisterForm />
          </ContentWrap>
        </Modal>
      )}
    </>
  );
}

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
