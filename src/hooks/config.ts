/*
 * @Author: 
 * @Date: 2025-02-19 13:46:19
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-19 16:43:20
 * @Description: 
 * @FilePath: \react-project\src\hooks\config.ts
 */
import { useDispatch } from 'react-redux'
import { configSetLoading, configSetTheme } from '../store/module/config'
import { enumeSet } from '../store/module/enume'
import { userInfoSet } from '../store/module/userInfo'

export const useConfig = () => {
  const dispatch = useDispatch()
  
  const setLoading = (loading: boolean) => {
    dispatch(configSetLoading(loading))
  }

  const setEnume = (enume: any) => {
    dispatch(enumeSet(enume))
  }

  const setTheme = (theme: 'light' | 'dark') => {
    dispatch(configSetTheme(theme))
  }

  const setUserInfo = (userInfo: any) => {
    dispatch(userInfoSet(userInfo))
  }

  return {
    setLoading,
    setEnume,
    setTheme,
    setUserInfo,
  }
}
