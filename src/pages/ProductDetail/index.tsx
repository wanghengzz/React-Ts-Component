/*
 * @Author: 
 * @Date: 2025-02-13 15:47:04
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-14 09:38:45
 * @Description: 
 * @FilePath: \react-project\src\pages\ProductDetail\index.tsx
 */
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();  // 获取 URL 中的 id 参数
  
  return <div>产品详情 - ID: {id}</div>;
}
