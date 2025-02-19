/*
 * @Author: 
 * @Date: 2025-02-13 11:12:01
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-19 11:23:04
 * @Description: 
 * @FilePath: \react-project\src\store\index.ts
 */
import { configureStore } from '@reduxjs/toolkit'

// 自动导入所有模块
const modulesFiles = import.meta.glob('./module/*.ts', { eager: true })
const modules: Record<string, any> = {}

for (const path in modulesFiles) {
  const moduleName = path.replace(/(\.\/module\/|\.ts)/g, '')
  modules[moduleName] = (modulesFiles[path] as any).default
}

const store = configureStore({
  reducer: modules
})

export default store
