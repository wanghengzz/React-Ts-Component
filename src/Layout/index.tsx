/*
 * @Author:
 * @Date: 2025-02-13 09:45:57
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-19 16:58:13
 * @Description:
 * @FilePath: \react-project\src\Layout\index.tsx
 */
import { Outlet } from 'react-router-dom'
import TopMenu from './TopMenu/index'
import { ConfigProvider, theme } from 'antd'
import { useSelector } from 'react-redux'
import ThemeSwitch from './themeSwitch/index'
import DropdownList from './DropdownList/index'
import { getLocalStorage } from '../utils/localStorage'
export default function Layout() {
  let themeType = useSelector((state: any) => state.config.themeType)
  let storeUserInfo = useSelector((state: any) => state.userInfo)
  let localStorageUserInfo = getLocalStorage('userInfo')
  let userInfo = Object.assign({}, storeUserInfo, localStorageUserInfo)

  return (
    <ConfigProvider
      theme={{
        algorithm:
          themeType === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <div className="layout">
        <div className="layout-header">
          <div>
            <TopMenu />
          </div>
          <div>
            <ThemeSwitch />
            <DropdownList />
            {userInfo.username ? <span>{userInfo.username}</span> : null}
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </ConfigProvider>
  )
}
