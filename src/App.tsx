/*
 * @Author:
 * @Date: 2024-09-19 16:06:31
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-19 17:09:35
 * @Description: /
 * @FilePath: \react-project\src\App.tsx
 */
import { createContext, useContext } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'
import { globalMethods } from './utils/commonFun.ts'
import FullScreenLoading from './components/fullScreenLoading/index.tsx'
const GlobalContext = createContext(globalMethods)
function App() {
  return (
    <div>
      <FullScreenLoading />
      <GlobalContext.Provider value={globalMethods}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  )
}

export default App

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
