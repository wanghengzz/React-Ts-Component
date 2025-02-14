/*
 * @Author: 
 * @Date: 2024-09-19 16:06:31
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-14 16:00:50
 * @Description: 
 * @FilePath: \react-project\src\main.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/style/globle.scss'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
