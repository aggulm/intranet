import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/routePaths";

type AuthRedirectState = {
  from?: {
    pathname: string;
  };
};

export function useRedirectAfterAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  return () => {
    const state = location.state as AuthRedirectState | null;
    const destination = state?.from?.pathname ?? ROUTES.HOME;

    navigate(destination, { replace: true });
  };
}
