/*
 * @Author: 
 * @Date: 2025-02-13 09:45:57
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-14 15:46:41
 * @Description: 
 * @FilePath: \react-project\src\Layout\index.tsx
 */
// import { ButtonProps } from '../components/commonButton/interface';
import { Outlet } from 'react-router-dom';
import { Switch } from 'antd';
import { useState, useEffect } from 'react';
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

  const [theme, setTheme] = useState('dark');
  
  const changeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  // 组件加载时设置初始主题
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return <div className='layout'>
    <div className='layout-header'>
      <Switch 
        checkedChildren="亮" 
        unCheckedChildren="暗" 
        onChange={changeTheme} 
        defaultChecked={theme === 'light'} 
      />
    </div>
    <div>
      <Outlet />
    </div>
  </div>
}

