import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from "../hooks/useAuth"
import { ROUTES } from "../routes/routePaths"

const navLinkClass = ({ isActive }: { isActive: boolean }): string =>
  [
    'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-blue-600 text-white'
      : 'text-gray-700 hover:bg-gray-100',
  ].join(' ')

export function MainLayout(): React.ReactElement {
  const { user, logout } = useAuth()

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="flex w-64 flex-col border-r border-gray-200 bg-white">
        <div className="border-b border-gray-200 p-4">
          <h1 className="text-lg font-bold text-gray-900">ICTA Intranet</h1>
          {user && (
            <p className="mt-1 truncate text-sm text-gray-500">
              {user?.fullName ?? 'User'}
            </p>
          )}
        </div>

        <nav className="flex-1 space-y-1 p-4">
          <NavLink to={ROUTES.HOME} end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to={ROUTES.EMPLOYEES} className={navLinkClass}>
            Employees
          </NavLink>
          <NavLink to={ROUTES.NOTIFICATIONS} className={navLinkClass}>
            Notifications
          </NavLink>
        </nav>

        <div className="border-t border-gray-200 p-4">
          <button
            type="button"
            onClick={logout}
            className="w-full rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
          >
            Log Out
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  )
}