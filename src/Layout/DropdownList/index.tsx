/*
 * @Author:
 * @Date: 2025-02-19 16:10:27
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-19 16:58:34
 * @Description:
 * @FilePath: \react-project\src\Layout\DropdownList\index.tsx
 */
import { Dropdown, MenuProps, Space,message } from 'antd'
import {
  LogoutOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useConfig } from '../../hooks/config'
import { logout } from '../../mock/login'
import { useNavigate } from 'react-router-dom'
import { removeLocalStorage } from '../../utils/localStorage'
const DropdownList: React.FC = () => {
   const { setLoading } = useConfig()
  const navigate = useNavigate()
  const items: MenuProps['items'] = [
    {
      label: '设置',
      key: 'setting',
      icon: <SettingOutlined />,
    },
    {
      label: '关于',
      key: 'about',
      icon: <InfoCircleOutlined />,
    },
    {
      label: '退出',
      key: 'logout',
      icon: <LogoutOutlined />,
      onClick: async () => {
        setLoading(true)
        try {
          const res = await logout()
          if (res.code === 10001) {
            message.success(res.message)
            removeLocalStorage('all')
            navigate('/login')
          }
        } catch (error) {
          message.error('退出登录失败!')
        } finally {
          setLoading(false)
        }
      },
    },
  ]

  return (
    <Dropdown
      menu={{ items }}
      trigger={['click']}
      autoAdjustOverflow
      arrow
    >
      <Space>
        <UserOutlined style={{ cursor: 'pointer' }} />
      </Space>
    </Dropdown>
  )
}

export default DropdownList
