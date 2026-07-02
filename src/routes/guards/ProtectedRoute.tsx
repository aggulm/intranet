import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { PageLoader } from '../../components/common/PageLoader'
import { useAuth } from '../../hooks/useAuth'
import { ROUTES } from '../routePaths'

export function ProtectedRoute(): React.ReactElement {
  const { isAuthenticated, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return <PageLoader />
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to={ROUTES.LOGIN}
        state={{ from: location }}
        replace
      />
    )
  }

  return <Outlet />
}
