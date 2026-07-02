import type { ReactNode } from 'react'
import { usePermissions } from '../hooks/usePermissions'
import type { Permission } from '../types/auth.types'

type CanProps = {
  permission: Permission
  children: ReactNode
}

export function Can({ permission, children }: CanProps) {
  const { hasPermission } = usePermissions()

  if (!hasPermission(permission)) {
    return null
  }

  return children
}