import { css } from 'styled-system/css';

interface ViewportProps {
  children: React.ReactNode;
  className?: string;
}

const MobileViewport = ({ children, className }: ViewportProps) => (
  <div
    className={css({
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
      alignItems: 'center',
    })}
  >
    <div
      className={`${className} ${css({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '500px',
        height: '100%',
        borderLeft: '1px solid #ddd',
        borderRight: '1px solid #ddd',
      })}`}
    >
      {children}
    </div>
  </div>
);

export default MobileViewport;
