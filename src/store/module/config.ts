/*
 * @Author: 
 * @Date: 2025-02-19 11:17:20
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-19 15:09:54
 * @Description: 
 * @FilePath: \react-project\src\store\module\config.ts
 */
/*
 * @Author:
 * @Date: 2025-02-13 14:09:20
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-19 13:40:43
 * @Description:
 * @FilePath: \react-project\src\store\module\config.ts
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const configSlice = createSlice({
  name: 'config',
  initialState: {
    loading: false,
    themeType: 'light',
  },
  reducers: {
    configSetLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    configSetTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.themeType = action.payload
      document.documentElement.setAttribute('data-theme', action.payload)
    },
  },
})

export const { configSetLoading, configSetTheme } = configSlice.actions
export default configSlice.reducer
