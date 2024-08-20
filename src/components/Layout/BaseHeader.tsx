import React from 'react';

import cx from 'clsx';

import styles from './baseHeader.module.scss';

export interface Props {
  isFixed?: boolean;
  className?: string;
  hasBorderBottom?: boolean;
}

const BaseHeader: React.FC<Props> = ({ className, isFixed, hasBorderBottom }) => {
  return (
    <header
      className={cx(styles.wrapper, className, {
        [styles.isFixed]: isFixed,
        [styles.hasBorderBottom]: hasBorderBottom,
      })}
    >
      <h1>Socket.io-Client Boilerplate</h1>
    </header>
  );
};

export default BaseHeader;
