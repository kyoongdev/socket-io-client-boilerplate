import React from 'react';
import BaseLayout from 'src/components/Layout/BaseLayout';

import styles from './chatRoom.module.scss';
import Input from 'src/components/Common/Input';
import Button from 'src/components/Common/Button';
import { useRecoilState } from 'recoil';
import { roomIdState } from 'src/store/chat';
import { useNavigate } from 'react-router-dom';

const ChatRoomPage: React.FC = () => {
  const navigate = useNavigate();
  const [chatRoomId, setChatRoomId] = useRecoilState(roomIdState);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setChatRoomId(e.currentTarget.value);
  };

  return (
    <BaseLayout className={styles.wrapper}>
      <section className={styles.container}>
        <h2>채팅방 Id</h2>
        <Input className={styles.input} value={chatRoomId} onChange={onChange} />
        <Button size="sm" onClick={() => navigate('chat')}>
          채팅 시작
        </Button>
      </section>
    </BaseLayout>
  );
};
export default ChatRoomPage;
