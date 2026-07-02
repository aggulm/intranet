import { Navigate, Outlet } from 'react-router-dom'
import { PageLoader } from '../../components/common/PageLoader'
import { useAuth } from '../../hooks/useAuth'
import { ROUTES } from '../routePaths'

export function PublicRoute(): React.ReactElement {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <PageLoader />
  }

  if (isAuthenticated) {
    return <Navigate to={ROUTES.HOME} replace />
  }

  return <Outlet />
}
