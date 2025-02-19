/*
 * @Author: 
 * @Date: 2025-02-13 17:30:08
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-19 16:58:04
 * @Description: 
 * @FilePath: \react-project\src\router\index.tsx
 */
/*
 * @Author:
 * @Date: 2025-02-13 15:49:17
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-17 14:18:49
 * @Description:
 * @FilePath: \react-project\src\router\index.tsx
 */
import React, { lazy, Suspense } from 'react'
import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout/index'
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { Navigate } from 'react-router-dom'
import { getLocalStorage } from '../utils/localStorage'
interface MetaConfig {
  title: string
  requiresAuth: boolean
  icon?: React.ReactNode
}

type CustomRoute = Omit<RouteObject, 'children' | 'index'> & {
  meta?: MetaConfig
  children?: CustomRoute[]
  index?: false
}

const Home = lazy(() => import('../pages/Home/index'))
const About = lazy(() => import('../pages/About/index'))
const Products = lazy(() => import('../pages/Products/index'))
const ProductDetail = lazy(() => import('../pages/ProductDetail/index'))
const NotFound = lazy(() => import('../pages/NotFound/index'))
const Login = lazy(() => import('../pages/Login/index'))
const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const token = getLocalStorage('token')
  if (!token) {
    return <Navigate to="/login" replace />
  }
  return <>{children}</>
}
const withAuth = (Component: React.LazyExoticComponent<any>) => {
  return (
    <Suspense fallback={<div className="loading-page">Loading...</div>}>
      <AuthGuard>
        <Component />
      </AuthGuard>
    </Suspense>
  )
}

const routes: CustomRoute[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: withAuth(Home),
        meta: {
          title: '首页',
          requiresAuth: false,
          icon: <HomeOutlined />,
        },
      },
      {
        path: '/about',
        element: withAuth(About),
        meta: {
          title: '关于',
          requiresAuth: false,
          icon: <InfoCircleOutlined />,
        },
      },
      {
        path: '/products',
        element: withAuth(Products),
        meta: {
          title: '产品列表',
          requiresAuth: true,
          icon: <InfoCircleOutlined />,
        },
        children: [
          {
            path: '/products/productDetail',
            element: withAuth(ProductDetail),
            meta: {
              title: '产品详情',
              requiresAuth: true,
            },
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: withAuth(NotFound),
    meta: {
      title: '404',
      requiresAuth: false,
    },
  },
  {
    path:'/login',
    element:<Login/>
  }
]

const router = createBrowserRouter(routes)
console.log(router)

export default router

