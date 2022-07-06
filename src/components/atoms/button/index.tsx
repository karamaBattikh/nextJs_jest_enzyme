import React from 'react';

import styles from './button.module.scss';

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ disabled, label, onClick }: ButtonProps) => (
  <button className={styles.wrapper} onClick={onClick} disabled={disabled}>
    {label}
  </button>
);

export default Button;
