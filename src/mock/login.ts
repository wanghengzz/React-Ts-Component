/*
 * @Author: 
 * @Date: 2025-02-19 14:35:47
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-19 14:36:36
 * @Description: 
 * @FilePath: \react-project\src\mock\login.ts
 */
interface LoginResponse {
  code: number
  message: string
  data: {
    token: string
  }
}
export const login = () => {
  return new Promise<LoginResponse>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 10001,
        message: 'success',
        data: {
          token: '123456',
        },
      })
    }, 1500)
  })
}
