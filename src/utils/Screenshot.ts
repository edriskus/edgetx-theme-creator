import { RefObject, useCallback, useRef } from "react";
import html2canvas from "html2canvas";

async function captureScreenshot(screenshotRef: RefObject<HTMLDivElement>) {
  console.log(screenshotRef);

  if (screenshotRef.current != null) {
    const canvas = await html2canvas(screenshotRef.current, { scale: 1 });
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error("Canvas is empty");
          return;
        }
        saveAs(blob, "screenshot.png");
      },
      "image/png",
      1
    );
  }
}

export function useScreenshot() {
  const screenshotRef = useRef<HTMLDivElement>(null);
  const doScreenshot = useCallback(() => {
    captureScreenshot(screenshotRef);
  }, []);
  return {
    screenshotRef,
    doScreenshot,
  };
}
