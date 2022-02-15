import React, { useState } from 'react';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

export default function DeleteModal({ onClose, contentId }) {
  function hideModal(e) {
    e.preventDefault();
    onClose(false);
  }

  async function ConfirmModal(e) {
    e.preventDefault();
    //const res = await axiosInstance.delete(`/members/me/reviews/${contentId}`);
    onClose(false);
  }

  return (
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
  );
}
