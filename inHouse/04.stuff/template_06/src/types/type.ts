export interface TokenObject {
  access_token: string;
  token_type: string;
  expires_in: number;
}
export interface AccessTokenData extends TokenObject {}

export interface LoginAccessTokenData extends TokenObject {
  refresh_token: string;
  scope: string;
}

export interface RefreshAccessTokenData extends TokenObject {
  scope: string;
}
