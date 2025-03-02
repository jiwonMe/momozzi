import { css } from 'styled-system/css';

const VerticalSpace = ({ size }: { size: number }) => (
  <div
    className={css({
      width: '100%',
      height: `${size}px`,
    })}
  />
);

export default VerticalSpace;
