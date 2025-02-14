/*
 * @Author: 
 * @Date: 2024-09-19 16:06:31
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-14 09:33:31
 * @Description: 
 * @FilePath: \react-project\src\App.tsx
 */
import { RouterProvider} from 'react-router-dom';
import router from './router/index.tsx';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
