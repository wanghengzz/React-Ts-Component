/*
 * @Author:
 * @Date: 2025-02-19 10:52:06
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-19 11:23:44
 * @Description:
 * @FilePath: \react-project\src\components\fullScreenLoading\index.tsx
 */
import React from 'react'
import { Spin } from 'antd'
import './index.scss'
import { useSelector } from 'react-redux'
interface FullScreenLoadingProps {
  tip?: string
  size?: 'small' | 'default' | 'large'
  className?: string,
  delay?: number,
  delayTime?: number,
  delayCallback?: () => void,
  delayEndCallback?: () => void,
}
const FullScreenLoading: React.FC<FullScreenLoadingProps> = ({
  size = 'large',
  className = 'fullscreen-spin',
}) => {
  const loading = useSelector((state: any) => state.config.loading)
  return loading ? (
    <Spin spinning={loading} size={size} className={className}></Spin>
  ) : null
}

export default FullScreenLoading
