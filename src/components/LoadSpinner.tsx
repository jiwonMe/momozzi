import { css } from 'styled-system/css';
import { useEffect } from 'react';

const LoadSpinner = () => {
  useEffect(() => {
    // 애니메이션을 동적으로 추가
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
      @keyframes animloader {
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
  }, []);

  return (
    <div
      className={css({
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        display: 'block',
        margin: '15px auto',
        position: 'relative',
        color: '#b3b3b3',
        boxSizing: 'border-box',
      })}
      style={{
        animation: 'animloader 1s linear infinite alternate',
      }}
    />
  );
};

export default LoadSpinner;