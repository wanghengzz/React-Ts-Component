/*
 * @Author: 
 * @Date: 2025-02-13 11:12:07
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-19 16:45:10
 * @Description: 
 * @FilePath: \react-project\src\store\module\userInfo.ts
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserInfo {
  username?: string;
  role?: string;
}

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {} as UserInfo,
  reducers: {
    userInfoSet: (state, action: PayloadAction<UserInfo>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { userInfoSet } = userInfoSlice.actions
export default userInfoSlice.reducer
