"use client";

import Lightbox, { type SlideImage } from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

import { useIsMobile } from "@/hooks/use-mobile";

export type GalleryLightboxProps = {
  slides: SlideImage[];
  index: number;
  open: boolean;
  onClose: () => void;
};

export default function GalleryLightboxImpl({
  slides,
  index,
  open,
  onClose,
}: GalleryLightboxProps) {
  const isMobile = useIsMobile();

  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={slides}
      plugins={[Zoom, Counter, Fullscreen]}
      carousel={{ preload: 1, finite: false }}
      animation={{ fade: 300, swipe: 400, zoom: 350 }}
      controller={{ closeOnBackdropClick: true, closeOnPullDown: true }}
      zoom={{ maxZoomPixelRatio: 3, doubleTapDelay: 250, scrollToZoom: true }}
      counter={{
        container: {
          style: { top: "unset", bottom: 0, left: 0, fontSize: "0.8rem", opacity: 0.75 },
        },
      }}
      styles={{
        container: {
          backgroundColor: "rgba(8, 16, 34, 0.96)",
          backdropFilter: "blur(6px)",
        },
      }}
      render={isMobile ? { buttonPrev: () => null, buttonNext: () => null } : {}}
      labels={{
        Previous: "Previous photo",
        Next: "Next photo",
        Close: "Close photo viewer",
      }}
    />
  );
}
