import { IconType } from "react-icons";

export interface TokenObject {
  access_token: string;
  token_type: string;
  expires_in?: number;
}

export interface AccessTokenData extends TokenObject {
  scope?: string;
}

export interface AuthorizationTokenData extends TokenObject {
  refresh_token: string;
  scope: string;
}

export interface RefreshTokenData extends TokenObject {
  scope: string;
}

export interface SidebarProps {
  children: React.ReactNode;
  spotifyAuthUrl?: string;
}

export interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}


