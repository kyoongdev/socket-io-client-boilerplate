import React, { useState } from 'react';
import styles from './chatPage.module.scss';
import { useRecoilValue } from 'recoil';
import { roomIdState } from 'src/store/chat';
import BaseLayout from 'src/components/Layout/BaseLayout';
import Input from 'src/components/Common/Input';
import Textarea from 'src/components/Common/Textarea';
import { ChatEventForm } from 'src/interface/chat.interface';

const ChatPage: React.FC = () => {
  const roomId = useRecoilValue(roomIdState);

  const [roomEvent, setRoomEvent] = useState<ChatEventForm>({
    eventName: '',
    json: '',
  });
  const [chatEvent, setChatEvent] = useState<ChatEventForm>({
    eventName: '',
    json: '',
  });

  const onChangeRoomEvent: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { name, value } = e.currentTarget;
    setRoomEvent((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeChatEvent: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { name, value } = e.currentTarget;
    setChatEvent((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <BaseLayout className={styles.wrapper}>
      <h1>Chatting</h1>
      <section className={styles.info}>
        <h2>Join Room</h2>
        <Input
          className={styles.eventName}
          name="eventName"
          label="Join Room Event Name"
          onChange={onChangeRoomEvent}
          value={roomEvent.eventName}
        />
        <Textarea
          className={styles.json}
          name="json"
          label="Join Room Form"
          onChange={onChangeRoomEvent}
          value={roomEvent.json}
        />
      </section>
      <section className={styles.info}>
        <h2>Chat</h2>
        <Input
          className={styles.eventName}
          name="eventName"
          label="Chat Emit Event Name"
          onChange={onChangeChatEvent}
          value={chatEvent.eventName}
        />
        <Textarea
          className={styles.json}
          name="json"
          label="Chat Form"
          onChange={onChangeChatEvent}
          value={chatEvent.json}
        />
      </section>
    </BaseLayout>
  );
};
export default ChatPage;
