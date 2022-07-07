import React from 'react';

import styles from './button.module.scss';

export interface ButtonProps {
  children?: string;
  onClick?: () => void;
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, disabled, onClick }: ButtonProps) => (
  <button className={styles.wrapper} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

export default Button;
