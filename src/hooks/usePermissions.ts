import { useAuth } from "./useAuth";
import type { Permission, UserRole } from "../types/auth.types";

export function usePermissions() {
  const { user } = useAuth();

  const hasRole = (role: UserRole): boolean => {
    return user?.role === role;
  };

  const hasPermission = (permission: Permission): boolean => {
    return user?.permissions.includes(permission) ?? false;
  };

  return {
    role: user?.role,
    permissions: user?.permissions ?? [],
    hasRole,
    hasPermission,
    isAdmin: user?.role === "admin",
    isUser: user?.role === "user",
  };
}
