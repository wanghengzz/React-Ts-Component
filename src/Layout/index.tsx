/*
 * @Author: 
 * @Date: 2025-02-13 09:45:57
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-14 16:29:48
 * @Description: 
 * @FilePath: \react-project\src\Layout\index.tsx
 */
// import { ButtonProps } from '../components/commonButton/interface';
import { Outlet } from 'react-router-dom';
import ThemeSwitch from '../components/themeSwitch';
export default function Layout() {

  // const btnList: ButtonProps[] = [
  //   {
  //     type: 'primary',
  //     text: 'Search',
  //     icon: 'SearchOutlined',
  //     loading: false,
  //     onClick: async (e) => {
  //       // 模拟异步操作
  //       await new Promise((resolve) => setTimeout(resolve, 1000))
  //       console.log('提交完成',e)
  //     },
  //   },
  //   {
  //     type: 'default',
  //     text: 'Default Button',
  //     loading: false,
  //     icon: 'UserOutlined',
  //     onClick: async () => {
  //       await new Promise((resolve) => setTimeout(resolve, 1000))
  //       console.log('Default Button')
  //     },
  //   },
  //   {
  //     type: 'dashed',
  //     text: 'Dashed Button',
  //     onClick: () => {
  //       console.log('Dashed Button')
  //     },
  //   },
  //   {
  //     type: 'text',
  //     text: 'Text Button',
  //     onClick: () => {
  //       console.log('Text Button')
  //     },
  //   },
  //   {
  //     type: 'link',
  //     text: 'Link Button',
  //     onClick: () => {
  //       console.log('Link Button')
  //     },
  //   },
  // ]

  return <div className='layout'>
    <div className='layout-header'>
        <ThemeSwitch defaultTheme='light'></ThemeSwitch>
    </div>
    <div>
      <Outlet />
    </div>
  </div>
}

