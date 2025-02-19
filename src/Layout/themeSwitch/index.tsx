/*
 * @Author:
 * @Date: 2025-02-14 16:23:28
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-19 15:33:44
 * @Description:
 * @FilePath: \react-project\src\Layout\themeSwitch\index.tsx
 */
import { Switch } from 'antd'
import { useSelector } from 'react-redux'
import { useConfig } from '../../hooks/config'
const ThemeSwitch: React.FC = () => {
let themeType = useSelector((state: any) => state.config.themeType)
const { setTheme } = useConfig()
const changeTheme = () => {
  const newTheme = themeType === 'light' ? 'dark' : 'light'
  setTheme(newTheme)
}
  return (
    <Switch
      checkedChildren="亮"
      unCheckedChildren="暗"
      onChange={changeTheme}
      defaultChecked={themeType === 'light'}
    />
  )
}

export default ThemeSwitch
