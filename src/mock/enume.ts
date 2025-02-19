/*
 * @Author: 
 * @Date: 2025-02-19 14:39:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-19 14:42:51
 * @Description: 
 * @FilePath: \react-project\src\mock\enume.ts
 */
let enume = {
  sex: [
    { label: '男', value: 1 },
    { label: '女', value: 2 },
  ],
  role: [
    { label: '管理员', value: 1 },
    { label: '用户', value: 2 },
  ],
  status: [
    { label: '启用', value: 1 },
    { label: '禁用', value: 2 },
  ],
  userType: [
    { label: '超级管理员', value: 1 },
    { label: '管理员', value: 2 },
    { label: '用户', value: 3 },
  ],
  userStatus: [
    { label: '正常', value: 1 },
    { label: '冻结', value: 2 },
  ],
  profession: [
    { label: '教师', value: 1 },
    { label: '学生', value: 2 },
  ],
  age: [
    { label: '18岁以下', value: 1 },
    { label: '18-25岁', value: 2 },
    { label: '26-35岁', value: 3 },
    { label: '36岁以上', value: 4 },
  ],
  address: [
    { label: '北京', value: 1 },
    { label: '上海', value: 2 },
    { label: '广州', value: 3 },
    { label: '深圳', value: 4 },
  ],
}

interface EnumeResponse {
  code: number
  message: string
  data: typeof enume
}

export const getEnume=()=>{
  return new Promise<EnumeResponse>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 10001,
        message: 'success',
        data: enume,
      })
    }, 1500)
  })
}



