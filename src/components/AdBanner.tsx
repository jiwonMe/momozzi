import { css } from 'styled-system/css';
import AdImage from '../assets/ad image.png';

const AdBanner = () => (
  <div
    className={css({
      alignSelf: 'stretch',
      height: '100px',
      background: '#F9FAFB',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    })}
  >
    <img
      src={AdImage}
      alt="ad"
      className={css({ width: '320px' })}
    />
  </div>
);

export default AdBanner;