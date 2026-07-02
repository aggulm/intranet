import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { ProtectedRoute } from './guards/ProtectedRoute'
import { PublicRoute } from './guards/PublicRoute'
import { RouteError } from './components/RouteError'
import { protectedRoutes, publicRoutes } from './routeConfig'
import { notFoundRoute } from './notFoundRoute'

export const router = createBrowserRouter([
  {
    errorElement: <RouteError />,
    children: [
      {
        element: <PublicRoute />,
        children: publicRoutes,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <MainLayout />,
            errorElement: <RouteError />,
            children: protectedRoutes,
          },
        ],
      },
      notFoundRoute,
    ],
  },
])