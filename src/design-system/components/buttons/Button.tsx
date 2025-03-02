import { ReactNode } from 'react';
import { css } from 'styled-system/css';

/**
 * Button 속성 정의
 * @property {ReactNode} children - 버튼 내부 콘텐츠
 * @property {() => void} [onClick] - 클릭 이벤트 핸들러
 * @property {'primary' | 'secondary' | 'danger'} [variant='primary'] - 버튼 스타일 변형
 * @property {'md' | 'sm' | 'lg'} [size='md'] - 버튼 크기
 * @property {boolean} [disabled] - 버튼 비활성화 여부
 */
export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'md' | 'sm' | 'lg';
  disabled?: boolean;
}

/**
 * 버튼 컴포넌트
 * 기본적인 상호작용 요소로 사용됩니다.
 * 라이트/다크 모드 테마를 지원합니다.
 */
const Button = ({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'md',
  disabled = false
}: ButtonProps) => {
  const baseStyles = {
    border: 'none',
    outline: 'none',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'NEXON Lv2 Gothic',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s',
    opacity: disabled ? 0.6 : 1,
  };

  // 버튼 크기별 스타일 설정
  const sizeStyles = {
    sm: {
      height: '32px',
      fontSize: '14px',
      padding: '0 12px',
    },
    md: {
      height: '40px',
      fontSize: '16px',
      padding: '0 16px',
    },
    lg: {
      height: '48px',
      fontSize: '16px',
      padding: '0 24px',
    },
  };

  // 테마를 지원하는 버튼 스타일 설정
  const variantStyles = {
    primary: {
      // 테마별 다른 스타일 적용
      backgroundColor: { _light: '#0F5777', _dark: '#3387a8' },
      color: { _light: '#ffffff', _dark: '#ffffff' },
      boxShadow: { _light: 'md', _dark: 'md' },
      '&:hover, &:focus': {
        backgroundColor: { _light: '#0f4f77', _dark: '#66a5be' },
        boxShadow: { _light: 'lg', _dark: 'lg' },
      },
    },
    secondary: {
      backgroundColor: { _light: '#F9FAFB', _dark: '#374151' },
      color: { _light: '#4D5355', _dark: '#F9FAFB' },
      boxShadow: { _light: 'sm', _dark: 'sm' },
      '&:hover, &:focus': {
        backgroundColor: { _light: '#f5f6f7', _dark: '#4B5563' },
      },
    },
    danger: {
      backgroundColor: { _light: '#EF4444', _dark: '#EF4444' },
      color: { _light: '#ffffff', _dark: '#ffffff' },
      '&:hover, &:focus': {
        backgroundColor: { _light: '#dc2626', _dark: '#f87171' },
      },
    },
  };

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={css({
        ...baseStyles,
        ...sizeStyles[size],
        ...variantStyles[variant],
      })}
    >
      {children}
    </button>
  );
};

export default Button; 