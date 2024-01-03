export interface IResponseRegisterApi {
  access_token: string;
  email: string;
  refresh_token: string;
};

export interface IRequestRegisterApi {
  email: string;
  password: string;
  repeat_password: string;
}

export interface IRequestRefreshApi {
  body: {
    refresh_token: string;
  };
  access_token: string;
}