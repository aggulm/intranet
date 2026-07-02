import type { ComponentType } from "react";

export function lazyPage(
  importer: () => Promise<Record<string, ComponentType>>,
  exportName: string,
) {
  return () =>
    importer().then((module) => ({
      Component: module[exportName],
    }));
}
