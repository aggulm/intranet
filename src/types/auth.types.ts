export type UserRole = "admin" | "user";

export type Permission =
  | "posts.view"
  | "posts.create"
  | "posts.edit"
  | "posts.delete"
  | "employees.view"
  | "notifications.view";

export type AuthUser = {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  permissions: Permission[];
};

export type AuthContextValue = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: AuthUser | null;
  login: (user?: AuthUser) => void;
  logout: () => void;
};
