import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom'
import { ROUTES } from '../routePaths'

export function RouteError() {
  const error = useRouteError()
  const navigate = useNavigate()

  const message = error instanceof Error ? error.message : "";

  const isChunkError =
    message.includes("Failed to fetch dynamically imported module") ||
    message.includes("Loading chunk") ||
    message.includes("ChunkLoadError");

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>

        <button onClick={() => navigate(ROUTES.HOME)}>
          Ana səhifəyə qayıt
        </button>
      </div>
    )
  }

  if (isChunkError) {
    return (
      <div>
        <h2>Səhifə yüklənmədi</h2>
        <p>
          Tətbiqin yeni versiyası yüklənmiş ola bilər. Zəhmət olmasa səhifəni
          yeniləyin.
        </p>

        <button onClick={() => window.location.reload()}>
          Yenidən yüklə
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Xəta baş verdi</h2>
      <p>Səhifə açılarkən gözlənilməz problem yarandı.</p>

      <button onClick={() => navigate(ROUTES.HOME)}>
        Ana səhifəyə qayıt
      </button>
    </div>
  );
}