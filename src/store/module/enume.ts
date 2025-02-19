/*
 * @Author: 
 * @Date: 2025-02-13 14:09:20
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-19 16:59:03
 * @Description: 
 * @FilePath: \react-project\src\store\module\enume.ts
 */
import { createSlice } from '@reduxjs/toolkit'
import { setLocalStorage } from '../../utils/localStorage'
const enumeSlice = createSlice({
  name: 'enume',
  initialState: {
    list: {},
  },
  reducers: {
    enumeSet: (state, action) => {
      state.list = action.payload
      setLocalStorage('enume', JSON.stringify(action.payload))
    },
  },
})


export const { enumeSet } = enumeSlice.actions
export default enumeSlice.reducer
