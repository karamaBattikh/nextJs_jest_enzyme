import React from 'react';

import styles from './button.module.scss';

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }: ButtonProps) => (
  <button className={styles.wrapper} onClick={onClick}>
    {label}
  </button>
);

export default Button;
