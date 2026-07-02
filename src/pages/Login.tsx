import type { SyntheticEvent } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from "../hooks/useAuth"
import { useRedirectAfterAuth } from "../hooks/useRedirectAfterAuth"
import { ROUTES } from "../routes/routePaths"

export function Login(): React.ReactElement {
  const { login } = useAuth()
  const redirectAfterAuth = useRedirectAfterAuth()

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    login()
    redirectAfterAuth()
  }

  return (
    <div ></div>
  )
}
