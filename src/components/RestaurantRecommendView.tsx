// 오늘은 ___ 어때요? 를 보여주는 컴포넌트
import React from 'react';
import styled from 'styled-components';

const RestaurantRecommendView: React.FC<{ restaurant: string }> = ({ restaurant }) => {
  return (
    <RecommendationText>
      <div>오늘은</div>
      <div className='restaurant'>{restaurant}</div>
      <div>어때요?</div>
    </RecommendationText>
  );
};

export default RestaurantRecommendView;

const RecommendationText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: 'NEXON Lv2 Gothic';
  font-size: 16px;
  text-align: center;
  margin: 10px 0;

  .restaurant {
    font-size: 48px;
    font-family: 'NEXON Lv1 Gothic';
    font-weight: bold;
  }
`;