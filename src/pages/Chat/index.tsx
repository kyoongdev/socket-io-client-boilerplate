import React from 'react';
import styles from './chatPage.module.scss';
import { useRecoilValue } from 'recoil';
import { roomIdState } from 'src/store/chat';
import BaseLayout from 'src/components/Layout/BaseLayout';

const ChatPage: React.FC = () => {
  const roomId = useRecoilValue(roomIdState);
  return (
    <BaseLayout className={styles.wrapper}>
      <h1>채팅</h1>
      <section></section>
    </BaseLayout>
  );
};
export default ChatPage;
