/*
 * @Author:
 * @Date: 2025-02-13 09:45:57
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-17 10:57:38
 * @Description:
 * @FilePath: \react-project\src\Layout\index.tsx
 */
// import { ButtonProps } from '../components/commonButton/interface';
import { Outlet } from 'react-router-dom'
import ThemeSwitch from './themeSwitch'
import TopMenu from './Menu'

export default function Layout() {
  return (
    <div className="layout">
      <div className="layout-header">
        <TopMenu/>
        {/* <ThemeSwitch defaultTheme="light" /> */}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
