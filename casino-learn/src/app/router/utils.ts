export const ROUTS = {
  main: '/',
  auth: {
    login: 'auth/login',
    register: 'auth/register'
  },
  games: {
    roulette: 'games/roulette',
    slots: 'games/slots',
    hummers: 'games/hummer'
  }
};

export const generateURL = (url: string, params?: any) => {
  return url;
};
