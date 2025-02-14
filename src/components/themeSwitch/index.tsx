/*
 * @Author: 
 * @Date: 2025-02-14 16:23:28
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-14 16:27:40
 * @Description: 
 * @FilePath: \react-project\src\components\themeSwitch\index.tsx
 */
import { Switch } from 'antd'
import { useState, useEffect } from 'react'

interface ThemeSwitchProps {
  defaultTheme: 'light' | 'dark';
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ defaultTheme }) => {
  const [theme, setTheme] = useState(defaultTheme)

  const changeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  // 组件加载时设置初始主题
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [])
  return (
    <Switch
      checkedChildren="亮"
      unCheckedChildren="暗"
      onChange={changeTheme}
      defaultChecked={theme === defaultTheme}
    />
  )
}

export default ThemeSwitch
