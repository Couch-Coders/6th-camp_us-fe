import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import React from 'react';

const ConfirmModal = ({ onClose, TaskId, deleteTask, onFallback, role }) => {
  // 모달 닫기
  function hideModal(e) {
    e.preventDefault();
    onClose(false);
  }

  // 모달 컨펌
  async function ConfirmModal(e) {
    e.preventDefault();
    role === 'delete' ? deleteTask(TaskId) : onFallback();
    onClose(false);
  }

  return (
    <Modal
      title={role === 'delete' ? '삭제' : '뒤로가기'}
      visible={true}
      icon={<ExclamationCircleOutlined />}
      onOk={ConfirmModal}
      onCancel={hideModal}
      okText={role === 'delete' ? '삭제' : '뒤로가기'}
      cancelText="취소"
    >
      {role === 'delete' ? (
        <p>정말 삭제하시겠습니까?</p>
      ) : (
        <p>정말 뒤로가시겠습니까?</p>
      )}
    </Modal>
  );
};

export default ConfirmModal;
