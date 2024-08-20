import { createBrowserRouter } from 'react-router-dom';
import ChatPage from 'src/pages/Chat';
import ChatRoomPage from 'src/pages/ChatRoom';

import MainPage from 'src/pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'chat-room',
        element: <ChatRoomPage />,
      },
      {
        path: 'chat',
        element: <ChatPage />,
      },
    ],
  },
]);

export default router;
