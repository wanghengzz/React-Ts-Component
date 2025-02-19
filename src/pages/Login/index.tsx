/*
 * @Author:
 * @Date: 2025-02-19 09:59:05
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-19 17:24:56
 * @Description:
 * @FilePath: \react-project\src\pages\Login\index.tsx
 */
import React from 'react'
import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input, Space, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import './login.scss'
import { useConfig } from '../../hooks/config'
import * as api from '../../mock/login'
import * as enumeApi from '../../mock/enume'
import { setLocalStorage } from '../../utils/localStorage'
type FieldType = {
  username?: string
  password?: string
  remember?: string
}

const Login: React.FC = () => {
  const navigate = useNavigate()
  const { setLoading, setEnume, setUserInfo } = useConfig()

  const onFinish: FormProps<FieldType>['onFinish'] = async (
    values: FieldType
  ) => {
    console.log(values,'账号密码')
    
    try {
      setLoading(true)
      const res = await api.login({
        username: values.username!,
        password: values.password,
        remember: values.remember,
      })

      const enumeRes = await enumeApi.getEnume()
      setEnume(enumeRes.data||{})

      if (res.code === 10001) {
        message.success('登录成功!')
        setLocalStorage('token', res.data.token)
        setLocalStorage('userInfo', JSON.stringify(res.data.userInfo))  
        setUserInfo(res.data.userInfo)
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
      <div className="stars">
        {[...Array(50)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
      <Form
        name="login-form"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
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

        <Form.Item label={null} wrapperCol={{ span: 24, offset: 0 }}>
          <Space size="large" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
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
