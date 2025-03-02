import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeType = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

/**
 * Theme Provider 속성 정의
 * @property {React.ReactNode} children - Provider 내부에 표시될 컴포넌트
 * @property {ThemeType} [initialTheme] - 초기 테마 설정, 기본값은 'light'
 */
export interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: ThemeType;
}

/**
 * 테마 제공자 컴포넌트
 * 애플리케이션 전체에 테마 컨텍스트를 제공합니다.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme = 'light',
}) => {
  const [theme, setTheme] = useState<ThemeType>(initialTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * 테마 사용 훅
 * 현재 테마 정보와 테마 전환 함수를 제공합니다.
 */
export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext);
};

export default ThemeProvider; 