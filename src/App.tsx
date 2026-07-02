import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/auth/AuthProvider'
import { router } from './routes/router'
import { PageLoader } from './components/common/PageLoader'

function App(): React.ReactElement {
  return (
    <AuthProvider>
      <Suspense fallback={<PageLoader />} >
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider >
  )
}

export default App
