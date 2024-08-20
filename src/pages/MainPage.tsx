import BaseLayout from 'src/components/Layout/BaseLayout';
import styles from './mainPage.module.scss';
import Button from 'src/components/Common/Button';
import Input from 'src/components/Common/Input';
import { useRecoilState } from 'recoil';
import { serverUrlState } from 'src/store/chat';
import { useNavigate } from 'react-router-dom';

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [serverUrl, setServerUrl] = useRecoilState(serverUrlState);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setServerUrl(e.currentTarget.value);
  };

  return (
    <BaseLayout className={styles.wrapper}>
      <section className={styles.container}>
        <article className={styles.server}>
          <h2>Server URL</h2>
          <Input className={styles.input} value={serverUrl} onChange={onChange} />
        </article>
        <footer className={styles.footer}>
          <h2>Does Chat Room Exists?</h2>
          <div className={styles.buttons}>
            <Button size="sm" disabled={serverUrl.length === 0} onClick={() => navigate('/chat-room')}>
              Yes
            </Button>
            <Button size="sm" disabled={serverUrl.length === 0} onClick={() => navigate('/chat')}>
              No
            </Button>
          </div>
        </footer>
      </section>
    </BaseLayout>
  );
};

export default MainPage;
