// 오늘은 ___ 어때요? 를 보여주는 컴포넌트
import React from 'react';
import { css } from 'styled-system/css';

/**
 * RestaurantRecommendView 속성 정의
 * @property {string} restaurant - 표시할 음식점 이름
 */
export interface RestaurantRecommendViewProps {
  restaurant: string;
}

/**
 * 음식점 추천 뷰 컴포넌트
 * 랜덤으로 선택된 음식점을 사용자에게 표시합니다.
 * 라이트/다크 모드 테마를 지원합니다.
 */
const RestaurantRecommendView: React.FC<RestaurantRecommendViewProps> = ({ restaurant }) => {
  return (
    <RecommendationText>
      <div>오늘은</div>
      <RestaurantName>{restaurant}</RestaurantName>
      <div>어때요?</div>
    </RecommendationText>
  );
};

export default RestaurantRecommendView;

const RecommendationText = ({ children }: { children: React.ReactNode }) => (
  <div
    className={css({
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontFamily: 'NEXON Lv2 Gothic',
      fontSize: '16px',
      textAlign: 'center',
      margin: '10px 0',
      color: { _light: '#4D5355', _dark: '#F9FAFB' },
      transition: 'color 0.2s ease-in-out',
    })}
  >
    {children}
  </div>
);

const RestaurantName = ({ children }: { children: React.ReactNode }) => (
  <div
    className={css({
      fontSize: '48px',
      fontFamily: 'NEXON Lv1 Gothic',
      fontWeight: 'bold',
      lineBreak: 'keep-all',
      color: { _light: '#1F2937', _dark: '#FFFFFF' },
      transition: 'color 0.2s ease-in-out',
    })}
  >
    {children}
  </div>
); 