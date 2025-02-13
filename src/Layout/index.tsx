import './layout.scss';
import CommonButton from '../components/commonButton';
import { ButtonProps } from '../components/commonButton/interface';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setList } from '../store/module/list';
import { useEffect, useState } from 'react';
export default function Layout() {
  const dispatch = useDispatch();
  const list = useSelector((state: any) => state.list.list);

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

  const getList = () => {
    setTimeout(() => {
      dispatch(setList([{
        id: 1,
        name: '商品1',
        price: 100,
      }]));
    }, 2000)
  };

  useEffect(() => {
    getList();
  }, []);

  return <div className="layout">
    <CommonButton btnList={btnList} />
    <Button onClick={getList}>
      获取商品
    </Button>

    <div>
      {list.map((item: any) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  </div>
}

