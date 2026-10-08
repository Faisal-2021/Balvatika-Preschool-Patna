"use client";

import * as React from "react";

import type { GalleryLightboxProps } from "./GalleryLightboxImpl";

const Impl = React.lazy(() => import("./GalleryLightboxImpl"));

/**
 * Loads the photo viewer (and its CSS) only once a photo has been opened,
 * so the gallery grid itself stays light on first paint.
 */
export function GalleryLightbox(props: GalleryLightboxProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (props.open) setMounted(true);
  }, [props.open]);

  if (!mounted) return null;

  return (
    <React.Suspense fallback={null}>
      <Impl {...props} />
    </React.Suspense>
  );
}
