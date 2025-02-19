/*
 * @Author:
 * @Date: 2025-02-13 09:45:57
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-19 15:35:34
 * @Description:
 * @FilePath: \react-project\src\Layout\index.tsx
 */
import { Outlet } from 'react-router-dom'
import TopMenu from './TopMenu/index'
import { ConfigProvider, theme } from 'antd'
import { useSelector } from 'react-redux'
import ThemeSwitch from './themeSwitch/index'
export default function Layout() {
  let themeType = useSelector((state: any) => state.config.themeType)
  return (
    <ConfigProvider
      theme={{
        algorithm:
          themeType === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <div className="layout">
        <div className="layout-header">
          <TopMenu />
          <ThemeSwitch />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </ConfigProvider>
  )
}
