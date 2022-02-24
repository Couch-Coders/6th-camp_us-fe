import React from 'react';
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const CommunityPage = (props) => {
  const navigate = useNavigate();

  const moveToMainPage = () => {
    navigate('/');
  };

  return (
    <Container>
      <Result
        icon={<SmileOutlined style={{ color: '#73d13d' }} />}
        title="커뮤니티는 개발중입니다 조금만 기다려 주세요 !"
        extra={
          <Button
            onClick={moveToMainPage}
            type="primary"
            style={{ backgroundColor: '#73d13d', border: '#73d13d' }}
          >
            메인페이지 이동
          </Button>
        }
      />
    </Container>
  );
};

export default CommunityPage;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
