/*
 * @Author: 
 * @Date: 2024-09-19 16:06:31
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-13 14:58:32
 * @Description: 
 * @FilePath: \react-project\src\main.tsx
 */
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './style/globle.scss'
import { Provider } from 'react-redux'
import store from './store'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
