import { css } from 'styled-system/css';
import { useEffect, useRef, useState } from 'react';

// ★ (1) react-router-dom 훅 불러오기
import { useLocation } from 'react-router-dom';

import MomozziLogo from '../assets/momozzi-logo.svg';
import DiceIcon from '../assets/dice-icon.svg';
import VerticalSpace from '../components/VerticalSpace';
import Modal from '../components/Modal';
import RestaurantRecommendView from '../components/RestaurantRecommendView';
import LoadSpinner from '../components/LoadSpinner';
import { track } from '@vercel/analytics';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase';
import AdBanner from '../components/AdBanner';

const restaurants = [
  "스시로지", 
  "스시존", 
  "스시도쿠", 
  "하쿠나마타타", 
  "우동가조쿠", 
  "백소정", 
  "히토리 우동", 
  "카모메", 
  "엘루이 피자", 
  "낙원 스낵", 
  "샐피", 
  "롤링 파스타", 
  "행운돈까스", 
  "베네토", 
  "핏제리아 달 포르노", 
  "봄의정원", 
  "김부삼", 
  "구이마을", 
  "니캉내캉", 
  "짱고기", 
  "이모네 생고기", 
  "구공탄", 
  "끄트머리", 
  "철남", 
  "정통집", 
  "꼬꼬아찌", 
  "계맛집", 
  "김종용누룽지통닭", 
  "내가찜한닭", 
  "서울의 닭", 
  "치폴레옹", 
  "생활맥주", 
  "칠칠켄터키", 
  "마쿠마라탕", 
  "금룡", 
  "용용선생", 
  "이돈", 
  "장어구이", 
  "비바 부대찌개", 
  "의정부 부대찌개", 
  "부대스토리", 
  "더진국", 
  "유태", 
  "성일순댓국", 
  "남도해장국", 
  "청년감자탕순대국", 
  "장모네 족발", 
  "완미 족발", 
  "더 맛있는 족발", 
  "악어떡볶이", 
  "동대문엽기 떡볶이", 
  "두끼 떡볶이", 
  "태리로제 떡볶이", 
  "알촌", 
  "깡우동", 
  "띵똥와플",
  "쉘",
];

const miridihRestraunts = [
  "CU편의점",
  "KFC 구로디지털2점",
  "解 한우해장",
  "가스파스",
  "강남교자",
  "고마워케이크",
  "고씨네 구로디지털단지점",
  "김밥공감",
  "누리한방삼계탕",
  "능이랑",
  "뚜레쥬르 구로IT점",
  "라멘에반하다",
  "로그커피",
  "맥도날드 구로디지털점",
  "맷돌로만 구로점",
  "멘무샤",
  "명품들깨칼국수",
  "버거리 구로디지털단지점",
  "벳남미식",
  "본건강한상",
  "봉추찜닭 구로지밸리몰점",
  "부대찌개대사관 구로디지털본점",
  "북촌손만두 구로대륭포스트타워1차점",
  "브라운테이블",
  "샐러디 구로디지털단지점",
  "서울미나리 구로디지털점",
  "서호돈가스",
  "소공동식당",
  "스무디앤핫도그",
  "슬로우캘리 구로디지털단지점",
];

const MainPage = () => {
  // (2) useLocation 훅으로 쿼리 문자열 가져오기
  const { search } = useLocation();

  const [selectedRestaurant, setSelectedRestaurant] = useState<string>('');
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const clickCountRef = useRef<number>(0);

  // (3) 클릭 시 사용할 배열 결정
  const handleRandomClickWithLoading = () => {
    // 클릭 수 증가
    clickCountRef.current += 1;

    // 클릭 수가 20을 초과하면 alert를 띄우고 함수를 종료 (현재는 5로 테스트)
    if (clickCountRef.current > 5) {
      alert('1초 동안의 클릭 수가 너무 많습니다. 잠시 후 다시 시도해주세요.');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      return;
    }

    track('random-click');
    setIsLoading(true);
    setIsOpenModal(true);

    // ?place=miridih 쿼리가 있으면 miridihRestraunts, 없으면 restaurants 배열 사용
    const isMiridih = search.includes('place=miridih');
    const targetRestaurants = isMiridih ? miridihRestraunts : restaurants;

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * targetRestaurants.length);
      const chosenRestaurant = targetRestaurants[randomIndex];

      logEvent(analytics, 'random-click', { restaurant: chosenRestaurant });
      setSelectedRestaurant(chosenRestaurant);
      setIsLoading(false);
    }, 300);
  }

  // 클릭 수를 1초마다 초기화
  useEffect(() => {
    const intervalId = setInterval(() => {
      clickCountRef.current = 0;
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  // esc 키를 누르면 모달을 닫는다.
  const handleKeyDown = (e: any) => {
    if (e.key === 'Escape') {
      setIsOpenModal(false);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  return (
    <div className={css({
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#4D5355',
      fontFamily: 'NEXON Lv2 Gothic',
      fontSize: '14px',

      '& a': {
        color: '#8c9294',
        fontFamily: 'NEXON Lv2 Gothic',
        fontSize: '14px',
        fontStyle: 'normal',
        lineHeight: '20.619px',
      }
    })}>
      <AdBanner />
      <VerticalSpace size={36} />
      <img src={MomozziLogo} alt="Momozzi Logo" />
      <VerticalSpace size={32} />
      <button 
        onClick={handleRandomClickWithLoading}
        className={css({
          border: 'none',
          outline: 'none',
          width: '200px',
          height: '200px',
          background: '#F9FAFB',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',

          '& span': {
            color: '#4D5355',
            fontFamily: 'NEXON Lv2 Gothic',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '29.619px',
          },

          '&:hover, &:focus': {
            cursor: 'pointer',
            background: '#f5f6f7',
          }
        })}
      >
        <img src={DiceIcon} alt="Dice Icon" />
        <span>랜덤돌리기</span>
      </button>
      <VerticalSpace size={32} />
      <a href="https://www.instagram.com/jiwon.me/">@jiwon.me</a>

      <Modal isOpen={isOpenModal}>
        <div className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        })}>
          {
            isLoading
              ? <LoadSpinner />
              : <>
                  <RestaurantRecommendView restaurant={selectedRestaurant} />
                  <VerticalSpace size={16} />
                  <button 
                    onClick={() => setIsOpenModal(false)}
                    className={css({
                      border: 'none',
                      outline: 'none',
                      width: '200px',
                      height: '40px',
                      background: '#0F5777',
                      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                      borderRadius: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '16px',
                      color: '#ffffff',
                      fontFamily: 'NEXON Lv2 Gothic OTF',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      lineHeight: '29.619px',

                      '&:hover, &:focus': {
                        cursor: 'pointer',
                        background: '#0f4f77',
                      }
                    })}
                  >
                    닫기
                  </button>
                </>
          }
        </div>
      </Modal>
    </div>
  )
}

export default MainPage