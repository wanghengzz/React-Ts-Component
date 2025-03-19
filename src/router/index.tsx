/*
 * @Author: 
 * @Date: 2025-02-13 17:30:08
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-03-19 14:32:54
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
const AuthGuard = ({ children, meta }: { children: React.ReactNode; meta?: MetaConfig }) => {
  const token = getLocalStorage('token')
  const noToken = !token || Object.keys(token).length === 0
  
  if (meta?.requiresAuth && noToken) {
    return <Navigate to="/login" replace />
  }
  return <>{children}</>
}
const withAuth = (Component: React.LazyExoticComponent<any>, meta?: MetaConfig) => {
  return (
    <Suspense fallback={<div className="loading-page">Loading...</div>}>
      <AuthGuard meta={meta}>
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
        element: withAuth(Home, {
          title: '首页',
          requiresAuth: false,
          icon: <HomeOutlined />,
        }),
        meta: {
          title: '首页',
          requiresAuth: false,
          icon: <HomeOutlined />,
        },
      },
      {
        path: '/about',
        element: withAuth(About, {
          title: '关于',
          requiresAuth: false,
          icon: <InfoCircleOutlined />,
        }),
        meta: {
          title: '关于',
          requiresAuth: true,
          icon: <InfoCircleOutlined />,
        },
      },
      {
        path: '/products',
        element: withAuth(Products, {
          title: '产品列表',
          requiresAuth: true,
          icon: <InfoCircleOutlined />,
        }),
        meta: {
          title: '产品列表',
          requiresAuth: true,
          icon: <InfoCircleOutlined />,
        },
        children: [
          {
            path: '/products/productDetail',
            element: withAuth(ProductDetail, {
              title: '产品详情',
              requiresAuth: true,
            }),
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
    element: withAuth(NotFound, { title: '404', requiresAuth: false }),
    meta: {
      title: '404',
      requiresAuth: false,
    },
  },
  {
    path: '/login',
    element: <Login />,
  },
]

const router = createBrowserRouter(routes)
console.log(router)

export default router

