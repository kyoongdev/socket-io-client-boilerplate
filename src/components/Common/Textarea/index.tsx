import React, { forwardRef } from 'react';

import cx from 'clsx';

import styles from './textarea.module.scss';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  textareaClassName?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(({ className, label, textareaClassName, ...props }, ref) => {
  return (
    <label className={cx(styles.wrapper, className)}>
      {label && <span>{label}</span>}
      <textarea className={textareaClassName} ref={ref} {...props} />
    </label>
  );
});

export default React.memo(Textarea);
