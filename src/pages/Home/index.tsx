/*
 * @Author: 
 * @Date: 2025-02-13 15:45:48
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-17 10:53:14
 * @Description: 
 * @FilePath: \react-project\src\pages\Home\index.tsx
 */
import CommonButton from "../../components/commonButton";
import { ButtonProps } from "../../components/commonButton/interface";
const Home = () => {
  const btnList: ButtonProps[] = [
    {
      type: 'primary',
      text: 'Search',
      icon: 'SearchOutlined',
      loading: false,
      onClick: async (e) => {
        // 模拟异步操作
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log('提交完成',e)
      },
    },
    {
      type: 'default',
      text: 'Default Button',
      loading: false,
      icon: 'UserOutlined',
      onClick: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log('Default Button')
      },
    },
    {
      type: 'dashed',
      text: 'Dashed Button',
      onClick: () => {
        console.log('Dashed Button')
      },
    },
    {
      type: 'text',
      text: 'Text Button',
      onClick: () => {
        console.log('Text Button')
      },
    },
    {
      type: 'link',
      text: 'Link Button',
      onClick: () => {
        console.log('Link Button')
      },
    },
  ]
  return (
    <div>
      <CommonButton btnList={btnList} />
    </div>
  )
};

export default Home;
