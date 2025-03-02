import { css } from 'styled-system/css';
import AdImage from '../../../assets/ad image.png';

/**
 * AdBanner 속성 정의
 * @property {string} [imageSrc] - 광고 이미지 경로. 기본값은 내장된 AdImage입니다.
 * @property {string} [altText] - 광고 이미지 대체 텍스트. 기본값은 'advertisement'입니다.
 * @property {string} [width] - 이미지 너비. 기본값은 '320px'입니다.
 */
export interface AdBannerProps {
  imageSrc?: string;
  altText?: string;
  width?: string;
}

/**
 * 광고 배너 컴포넌트
 * 광고 콘텐츠를 표시하는 배너입니다.
 * 라이트/다크 모드 테마를 지원합니다.
 */
const AdBanner = ({ 
  imageSrc = AdImage, 
  altText = 'advertisement',
  width = '320px'
}: AdBannerProps = {}) => (
  <div
    className={css({
      alignSelf: 'stretch',
      height: '100px',
      backgroundColor: { _light: '#F9FAFB', _dark: '#2D3748' },
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: { _light: 'none', _dark: '0 1px 3px rgba(0, 0, 0, 0.3)' },
      border: { _light: '1px solid #E5E7EB', _dark: '1px solid #4B5563' },
      transition: 'all 0.2s ease-in-out',
    })}
  >
    <img
      src={imageSrc}
      alt={altText}
      className={css({ 
        width: width,
        filter: { _dark: 'brightness(0.9)' },
        transition: 'filter 0.2s ease-in-out',
      })}
    />
  </div>
);

export default AdBanner; 