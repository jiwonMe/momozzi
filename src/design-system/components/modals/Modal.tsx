import React from 'react';
import { css } from 'styled-system/css';

/**
 * Modal 속성 정의
 * @property {React.ReactNode} children - 모달 내부에 표시될 콘텐츠
 * @property {boolean} isOpen - 모달이 열려 있는지 여부
 * @property {Function} [onClose] - 모달 닫기 버튼 클릭 시 실행될 함수
 * @property {'md' | 'sm' | 'lg' | 'full'} [size='md'] - 모달의 크기
 */
export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

/**
 * 모달 컴포넌트
 * 팝업 형태로 콘텐츠를 표시하는 컴포넌트입니다.
 * 라이트/다크 모드 테마를 지원합니다.
 */
const Modal = ({ 
  children, 
  isOpen, 
  onClose,
  size = 'md' 
}: ModalProps) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // 배경 클릭시에만 모달 닫기 (모달 내부 클릭시는 닫지 않음)
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  // 모달 크기별 스타일
  const sizeStyles = {
    sm: {
      maxWidth: '400px',
      width: '80%',
    },
    md: {
      maxWidth: '500px',
      width: '80%',
    },
    lg: {
      maxWidth: '800px',
      width: '90%',
    },
    full: {
      maxWidth: '100%',
      width: '100%',
      height: '100%',
      margin: '0',
      borderRadius: '0',
    },
  };

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
        zIndex: 1000,
        backdropFilter: 'blur(2px)',
      })}
      onClick={handleBackdropClick}
    >
      <div
        className={css({
          backgroundColor: { _light: '#fff', _dark: '#1F2937' },
          padding: '20px',
          borderRadius: '8px',
          boxShadow: { _light: '0 4px 6px rgba(0, 0, 0, 0.1)', _dark: '0 4px 6px rgba(0, 0, 0, 0.3)' },
          color: { _light: 'inherit', _dark: '#F9FAFB' },
          ...sizeStyles[size],
          transition: 'all 0.2s ease-in-out',
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal; 