import { css } from 'styled-system/css';
import { useEffect } from 'react';

/**
 * LoadSpinner 속성 정의
 * @property {string} [color] - 스피너의 색상. 기본값은 테마에 따라 자동으로 설정됩니다.
 * @property {number} [size] - 스피너의 크기(px). 기본값은 12px 입니다.
 */
export interface LoadSpinnerProps {
  color?: string;
  size?: number;
}

/**
 * 로딩 스피너 컴포넌트
 * 데이터 로딩 중이거나 작업 처리 중임을 사용자에게 시각적으로 알려줍니다.
 * 라이트/다크 모드 테마를 지원합니다.
 */
const LoadSpinner = ({ 
  color,
  size = 12
}: LoadSpinnerProps = {}) => {
  // 애니메이션 키 생성 (다수의 스피너가 동일한 스타일 시트를 공유할 수 있도록)
  const animationKey = `animloader-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    // 애니메이션을 동적으로 추가
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
      @keyframes ${animationKey} {
        0% { box-shadow: -38px -6px, -14px 6px, 14px -6px; }
        33% { box-shadow: -38px 6px, -14px -6px, 14px 6px; }
        66% { box-shadow: -38px -6px, -14px 6px, 14px -6px; }
        100% { box-shadow: -38px 6px, -14px -6px, 14px 6px; }
      }
    `;
    document.head.appendChild(styleSheet);

    // 컴포넌트 언마운트 시 스타일 제거
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [animationKey]);

  // 사용자가 직접 색상을 지정하지 않은 경우, 테마에 따라 기본값 설정
  const defaultColor = { _light: '#b3b3b3', _dark: '#d1d5db' };

  return (
    <div
      className={css({
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        display: 'block',
        margin: '15px auto',
        position: 'relative',
        color: color || defaultColor,
        boxSizing: 'border-box',
        transition: 'color 0.2s ease-in-out',
      })}
      style={{
        animation: `${animationKey} 1s linear infinite alternate`,
      }}
    />
  );
};

export default LoadSpinner; 