import styled from 'styled-components'
import MomozziLogo from '../assets/momozzi-logo.svg';
import DiceIcon from '../assets/dice-icon.svg';
import VerticalSpace from '../components/VerticalSpace';
import Modal from '../components/Modal';
import { useEffect, useState } from 'react';
import RestaurantRecommendView from '../components/RestaurantRecommendView';
import LoadSpinner from '../components/LoadSpinner';
import { track } from '@vercel/analytics';

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
  "미쿠마라탕", 
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
  "띵똥와플"
];


const MainPage = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<string>('')
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  // loading state
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleRandomClickWithLoading = () => {
    track('random-click');
    setIsLoading(true)
    setIsOpenModal(true)
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * restaurants.length)
      setSelectedRestaurant(restaurants[randomIndex])
      setIsLoading(false)
    }, 300)
  }

  // esc 키를 누르면 모달을 닫는다.
  const handleKeyDown = (e: any) => {
    if (e.key === 'Escape') {
      setIsOpenModal(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  });

  return (
    <Layout>
      <VerticalSpace size={128} />
      <img src={MomozziLogo} alt="Momozzi Logo" />
      <VerticalSpace size={32} />
      <RandomButton
        onClick={handleRandomClickWithLoading}
      >
        <img src={DiceIcon} alt="Dice Icon" />
        <span>랜덤돌리기</span>
      </RandomButton>
      <VerticalSpace size={32} />
      <a href="https://www.instagram.com/jiwon.me/">
        @jiwon.me
      </a>
      <Modal isOpen={isOpenModal}>
        <ModalInner>
          {
            isLoading
              ? <LoadSpinner />
              : <>
                <RestaurantRecommendView restaurant={selectedRestaurant} />
                <VerticalSpace size={16} />
                <ModalButton onClick={() => setIsOpenModal(false)}>닫기</ModalButton>
              </>
          }
        </ModalInner>
      </Modal>
    </Layout>
  )
}

export default MainPage

const Layout = styled.div`
  /* center  */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #4D5355;
  font-family: NEXON Lv2 Gothic;
  font-size: 14px;

  a {
    color: #8c9294;
    font-family: NEXON Lv2 Gothic;
    font-size: 14px;
    font-style: normal;
    line-height: 20.619px; /* 185.119% */
  }
`

const RandomButton = styled.button`
  /* remove button style */
  border: none;
  outline: none;
  background: none;

  width: 200px;
  height: 200px;

  background: #F9FAFB;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;

  span {
    color: #4D5355;
    font-family: NEXON Lv2 Gothic;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 29.619px; /* 185.119% */
  }

  &:hover, &:focus {
    cursor: pointer;
    background: #f5f6f7;
  }
`

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalButton = styled.button`
  /* remove button style */
  border: none;
  outline: none;
  background: none;

  width: 200px;
  height: 40px;

  background: #0F5777;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;

  color: #ffffff;
  font-family: NEXON Lv2 Gothic OTF;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 29.619px; /* 185.119% */

  &:hover, &:focus {
    cursor: pointer;
    background: #0f4f77;
  }
`