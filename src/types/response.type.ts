import type { User } from "./model";

export type Response = {
  success?: boolean;
  message?: string;
  status?: number;
  data?: any;
  [key: string]: unknown;
};

export type AuthResponse = Response & {
  data?: {
    token?: string;
    info?: User;
  };
};

export type UserResponse = Response & {
  data?: User;
};

export type UsersResponse = Response & {
  data?: User[];
};
