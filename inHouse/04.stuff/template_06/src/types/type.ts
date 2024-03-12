export interface TokenObject {
  access_token: string;
  token_type: string;
  expires_in?: number;
}
export interface AccessTokenData extends TokenObject {
  scope?: string;
}