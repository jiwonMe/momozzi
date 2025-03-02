import React from 'react';
import { css } from 'styled-system/css';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const Modal = ({ children, isOpen }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className={css({
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <div
        className={css({
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '500px',
          width: '80%',
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
