import cx from 'clsx';
import React, { forwardRef, type ReactElement } from 'react';

import styles from './input.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputClassName?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, label, inputClassName, ...props }, ref): ReactElement => {
    return (
      <label className={cx(styles.wrapper, className)}>
        {label && <span>{label}</span>}
        <input className={cx(styles.input, inputClassName)} ref={ref} {...props} />
      </label>
    );
  },
);

export default React.memo(Input);
