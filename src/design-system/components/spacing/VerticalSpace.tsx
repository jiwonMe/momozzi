import { css } from 'styled-system/css';

/**
 * VerticalSpace 속성 정의
 * @property {number} size - 수직 여백의 높이(px)
 */
export interface VerticalSpaceProps {
  size: number;
}

/**
 * 수직 여백 컴포넌트
 * 요소들 사이의 수직 간격을 제공합니다.
 */
const VerticalSpace = ({ size }: VerticalSpaceProps) => (
  <div
    className={css({
      width: '100%',
      height: `${size}px`,
    })}
  />
);

export default VerticalSpace; 