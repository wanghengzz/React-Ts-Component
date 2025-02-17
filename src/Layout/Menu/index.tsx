import { useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import router from '../../router/index'

const generateMenuItems = (routes: any[]): MenuProps['items'] => {
  return routes.map((route) => ({
    key: route.path,
    label: route.meta?.title,
    children: route.children ? generateMenuItems(route.children) : undefined,
  }))
}
export default function TopMenu() {
  const navigate = useNavigate()
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
    />
  )
}
