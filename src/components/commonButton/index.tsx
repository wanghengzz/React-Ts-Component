/*
 * @Author:
 * @Date: 2025-02-13 09:52:57
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-02-13 10:38:41
 * @Description:
 * @FilePath: \react-project\src\components\commonButton\index.tsx
 */
import React, { useState } from 'react'
import { Button, Flex } from 'antd'
import { CommonButtonProps } from './interface'
import { iconMap } from '../Icon'

const CommonButton: React.FC<CommonButtonProps> = ({ btnList }) => {
  const [loadingStates, setLoadingStates] = useState<{ [key: number]: boolean }>({});

  const handleClick = async (
    index: number,
     e:React.MouseEvent<HTMLElement>,
    onClick?: (e: React.MouseEvent<HTMLElement>) => void | Promise<void>,
  ) => {
    if (!onClick) return;
    try {
      setLoadingStates(prev => ({ ...prev, [index]: true }));
      await onClick(e)
    } finally {
      setLoadingStates(prev => ({ ...prev, [index]: false }));
    }
  };

  return (
    <Flex gap="small" wrap>
      {btnList.map((btn, index) => {
        const Icon = btn.icon && iconMap[btn.icon as keyof typeof iconMap];
        return (
          <Button
            key={index}
            type={btn.type}
            onClick={(e) => handleClick(index, e, btn.onClick)}
            disabled={btn.disabled}
            block={btn.block}
            icon={Icon && <Icon />}
            size={btn.size}
            loading={loadingStates[index] || btn.loading}
          >
            {btn.text}
          </Button>
        )
      })}
    </Flex>
  )
}

export default CommonButton
