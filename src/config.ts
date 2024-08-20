const PREFIX = 'REACT_APP_';

const getConfig = (name: string) => {
  const configName = `${PREFIX}${name}`;

  if (configName in process.env) {
    return process.env[configName];
  } else {
    throw Error('잘못된 CONFIG 입니다', { cause: `NOT FOUND ${name} CONFIG` });
  }
};

export default {
  ENV: getConfig('ENV'),
  PUBLIC_URL: getConfig('PUBLIC_URL'),
};
