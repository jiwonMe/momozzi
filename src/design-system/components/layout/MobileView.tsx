import React from 'react';
import { css } from 'styled-system/css';

/**
 * MobileViewport 속성 정의
 * @property {React.ReactNode} children - 모바일 뷰포트 내부에 표시될 콘텐츠
 * @property {string} [className] - 추가적인 CSS 클래스
 */
export interface MobileViewportProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * 모바일 뷰포트 컴포넌트
 * 모바일 화면 크기에 맞는 레이아웃을 제공합니다.
 * 라이트/다크 모드 테마를 지원합니다.
 */
const MobileViewport = ({ children, className = '' }: MobileViewportProps) => (
  <div
    className={css({
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: { _light: '#FFFFFF', _dark: '#111827' },
      transition: 'background-color 0.2s ease-in-out',
    })}
  >
    <div
      className={`${className} ${css({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '500px',
        height: '100%',
        borderLeft: { _light: '1px solid #ddd', _dark: '1px solid #4B5563' },
        borderRight: { _light: '1px solid #ddd', _dark: '1px solid #4B5563' },
        backgroundColor: { _light: '#FFFFFF', _dark: '#1F2937' },
        transition: 'all 0.2s ease-in-out',
      })}`}
    >
      {children}
    </div>
  </div>
);

export default MobileViewport; 