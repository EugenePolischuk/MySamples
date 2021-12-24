import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Modal } from 'antd';

type ModalProps = {
  width?: string;
  visible: boolean;
  title: string;
  onCancel: () => void;
  onOk?: () => void;
  okText?: string;
  cancelText?: string;
  footer?: JSX.Element[];
}

const ModalContainer = styled.div`
  display: flex`;

const ModalBox: React.FC<ModalProps> = (props) => {
  const { width, visible, title, footer, onCancel, onOk, okText, cancelText, children } = props;
  return (
    <ModalContainer>
      <Modal
        onOk={onOk}
        width={width}
        title={title}
        centered
        visible={visible}
        onCancel={onCancel}
        footer={footer}
        okText={okText}
        cancelText={cancelText}
      >
        {children}
      </Modal>

    </ModalContainer>
  );
};

export default ModalBox;
