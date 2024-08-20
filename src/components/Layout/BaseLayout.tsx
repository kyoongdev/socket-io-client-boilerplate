import React, { type ReactNode } from 'react';

import cx from 'clsx';

import BaseHeader, { Props as HeaderProps } from './BaseHeader';
import styles from './baseLayout.module.scss';

interface Props {
  className?: string;
  hasHeader?: boolean;
  customHeader?: ReactNode;
  headerProps?: HeaderProps;
  children: ReactNode;
  setHeightViewport?: boolean;
}

const BaseLayout: React.FC<Props> = ({
  children,
  className,
  hasHeader = true,
  customHeader,
  headerProps,
  setHeightViewport = false,
}) => {
  return (
    <>
      <section className={cx(styles.wrapper, className, { [styles.setHeightViewport]: setHeightViewport })}>
        {hasHeader && !customHeader && <BaseHeader {...headerProps} />}
        {customHeader}
        {children}
      </section>
    </>
  );
};

export default BaseLayout;
