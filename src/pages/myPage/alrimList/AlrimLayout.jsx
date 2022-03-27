import React, { useState, useEffect } from 'react';
import * as api from '../../../service/api';
import AlrimList from './AlrimList';
import { AlrimNotification } from '../../../components/notice/Notice';
import styled from 'styled-components';
import { Pagination } from 'antd';

export default function AlrimLayout({ user }) {
  const [data, setData] = useState([]);
  const [totalElement, setTotalElement] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    MemberAlrimRequest(currentPage);
  }, [currentPage]);

  // 페이지 변경
  const changePage = (value) => {
    setCurrentPage(value - 1);
  };

  // 알림 조회
  async function MemberAlrimRequest(page) {
    const response = await api.getAlrimList(page);
    console.log('res', response);
    setData(response.content);
    setTotalElement(response.totalElements);
  }

  // 알림 전체 읽기
  const AlrimAllChecked = async (e) => {
    e.preventDefault();
    await api.readAllAlrim();
    const ChangeAllReadAlrim = data.map((obj) => {
      return { ...obj, checked: true };
    });
    setData(ChangeAllReadAlrim);
  };

  // 알림 전체 삭제
  const AlrimAllDelete = async (e) => {
    e.preventDefault();
    if (window.confirm('알림을 전체 삭제 하시겠습니까?')) {
      await api.deleteAllAlrim();
      setData([]);
    }
  };

  return (
    <>
      <AlrimButton>
        <button onClick={AlrimAllChecked}>모든 알림 읽기</button>
        <button onClick={AlrimAllDelete}>전체 삭제</button>
      </AlrimButton>
      {data.length === 0 ? (
        <AlrimNotification />
      ) : (
        <>
          <AlrimList alrimList={data} MemberAlrimRequest={MemberAlrimRequest} />
          <PaginationContent
            current={currentPage + 1}
            total={totalElement}
            pageSize={5}
            onChange={(value) => {
              changePage(value);
            }}
          />
        </>
      )}
    </>
  );
}

const AlrimButton = styled.div`
  display: flex;
  margin-bottom: 24px;

  & button {
    margin-right: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 2px 0px 0px 2px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #000000;

    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.027);
    }
  }
`;
const PaginationContent = styled(Pagination)`
  text-align: center;
  .ant-select-selector {
    display: none;
  }
`;
