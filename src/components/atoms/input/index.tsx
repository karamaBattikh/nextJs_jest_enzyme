import { FC, FormEvent, InputHTMLAttributes } from 'react';

import styles from './input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (str: FormEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string | number;
  placeholder?: string;
  type?: string;
}

const Input: FC<InputProps> = ({ name, onChange, placeholder = '', type, value }) => {
  return (
    <input
      type={type || 'text'}
      className={styles.wrapper}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
