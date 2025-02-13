import { ButtonProps as AntButtonProps } from 'antd';
import { iconMap } from '../../Icon';

export interface ButtonProps extends Omit<AntButtonProps, 'type'> {
  type: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  text: string;
  icon?: keyof typeof iconMap;
}

export interface CommonButtonProps {
  btnList: ButtonProps[];
}
