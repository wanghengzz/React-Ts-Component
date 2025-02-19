/*
 * @Author:
 * @Date: 2025-02-19 09:59:05
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-19 14:45:39
 * @Description:
 * @FilePath: \react-project\src\pages\Login\index.tsx
 */
import React from 'react'
import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import FullScreenLoading from '../../components/fullScreenLoading/index'
import './login.scss'
import { useConfig } from '../../hooks/config'
import * as api from '../../mock/login'
import * as enumeApi from '../../mock/enume'
type FieldType = {
  username?: string
  password?: string
  remember?: string
}

const Login: React.FC = () => {
  const navigate = useNavigate()
  const { setLoading, setEnume } = useConfig()

  const onFinish: FormProps<FieldType>['onFinish'] = async (
    values: FieldType
  ) => {
    console.log(values,'账号密码')
    
    try {
      setLoading(true)
      const res = await api.login()

      const enumeRes = await enumeApi.getEnume()
      setEnume(enumeRes.data||{})

      if (res.code === 10001) {
        localStorage.setItem('token', res.data.token)
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="login-container">
      <FullScreenLoading
        size="large"
        className="fullscreen-spin"
      ></FullScreenLoading>

      <Form
        name="login-form"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="账号"
          name="username"
          rules={[{ required: true, message: '请输入账号!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          label={null}
        >
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item label={null} wrapperCol={{ span: 24, offset: 12 }}>
          <Space size="large">
            <Button type="primary" htmlType="submit">
              登录
            </Button>

            <Button type="link" onClick={() => navigate('/register')}>
              注册
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
