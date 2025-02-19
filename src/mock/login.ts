/*
 * @Author: 
 * @Date: 2025-02-19 14:35:47
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-19 16:38:49
 * @Description: 
 * @FilePath: \react-project\src\mock\login.ts
 */
interface LoginResponse {
  code: number
  message: string
  data: {
    token: string
    userInfo: {
      username: string
      role: string
    }
  }
}
interface LoginParams {
  username: string
  password?: string
  remember?: string
}
export const login = (params: LoginParams) => {
  return new Promise<LoginResponse>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 10001,
        message: 'success',
        data: {
          token: '123456',
          userInfo: {
            username: params.username,
            role: params.username,
          },
        },
      })
    }, 1500)
  })
}
interface LogoutResponse {
  code: number
  message: string
}
export const logout = () => {
  return new Promise<LogoutResponse>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 10001,
        message: '退出登录成功!',
      })
    }, 1500)
  })
}
