// 오늘은 ___ 어때요? 를 보여주는 컴포넌트
import React from 'react';
import { css } from 'styled-system/css';

const RestaurantRecommendView: React.FC<{ restaurant: string }> = ({ restaurant }) => {
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
    })}
  >
    {children}
  </div>
);