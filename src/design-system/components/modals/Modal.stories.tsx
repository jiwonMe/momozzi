import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { useState } from 'react';
import { css } from 'styled-system/css';
import Button from '../buttons/Button';

// 클릭 가능한 모달 예시 컴포넌트
const ModalExample = ({ size }: { size: 'sm' | 'md' | 'lg' | 'full' }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="primary">
        {size} 모달 열기
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size={size}>
        <div className={css({ textAlign: 'center' })}>
          <h2 className={css({ fontSize: '20px', marginBottom: '16px' })}>
            {size.toUpperCase()} 모달 제목
          </h2>
          <p className={css({ marginBottom: '20px' })}>
            모달 컴포넌트 예시입니다. 다양한 크기와 기능을 제공합니다.
          </p>
          <div className={css({ display: 'flex', justifyContent: 'center', gap: '10px' })}>
            <Button onClick={() => setIsOpen(false)} variant="secondary" size="sm">
              취소
            </Button>
            <Button onClick={() => setIsOpen(false)} variant="primary" size="sm">
              확인
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

const meta = {
  title: 'Design System/Components/Modals/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: '모달이 열려 있는지 여부'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'full'],
      description: '모달 크기'
    },
    onClose: {
      action: 'closed',
      description: '모달 닫기 시 호출될 함수'
    },
    children: {
      control: { type: 'text' },
      description: '모달 내부 콘텐츠'
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// 각 모달 크기별 스토리 컴포넌트로 정의
export const Small = () => <ModalExample size="sm" />;
export const Medium = () => <ModalExample size="md" />;
export const Large = () => <ModalExample size="lg" />;
export const FullScreen = () => <ModalExample size="full" />; 