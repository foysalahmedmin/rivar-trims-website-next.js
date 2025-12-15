import type { User } from "./model";

export type UserState = {
  token?: string;
  info?: User;
  isAuthenticated?: boolean;
  [key: string]: unknown;
};
