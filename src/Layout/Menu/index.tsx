import { useNavigate, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import router from '../../router/index'
import { HomeOutlined } from '@ant-design/icons'
const generateMenuItems = (routes: any[]): MenuProps['items'] => {
  return routes.map((route) => ({
    key: route.path,
    label: route.meta?.title,
    icon: route.meta?.icon || <HomeOutlined />,
    children: route.children ? generateMenuItems(route.children) : undefined,
  }))
}
export default function TopMenu() {
  const navigate = useNavigate()
  const location = useLocation()
  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }

  const routeItem = router.routes.find((route) => route.path === '/')

  const menuItems: MenuProps['items'] = routeItem?.children ? generateMenuItems(routeItem.children) : []

  return (
    <Menu
      mode="horizontal"
      style={{ width: '100%' }}
      items={menuItems}
      onClick={handleMenuClick}
      selectedKeys={[location.pathname]}
    />
  )
}
