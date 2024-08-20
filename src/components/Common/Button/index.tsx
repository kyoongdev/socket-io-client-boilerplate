import React, { type ComponentProps } from 'react';

import cx from 'clsx';

import styles from './button.module.scss';

type Size = 'lg' | 'mid' | 'sm';
type Color = 'primary';
interface Props extends ComponentProps<'button'> {
  /** 버튼의 사이즈 */
  size?: Size;
  /** 버튼의 색상 */
  color?: Color;
}

const Button: React.FC<Props> = ({
  size = 'lg',
  type = 'button',
  color = 'primary',
  className,
  children,
  ...props
}) => {
  return (
    <button type={type} className={cx(styles.wrapper, styles[size], styles[color], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
