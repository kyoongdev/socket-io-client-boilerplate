import { atom } from 'recoil';

export const serverUrlState = atom<string>({
  default: '',
  key: '#serverUrl',
});

export const roomIdState = atom<string>({
  default: '',
  key: '#roomId',
});

export const tokenState = atom<string>({
  default: '',
  key: '#token',
});
