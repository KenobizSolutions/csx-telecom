"use client";

/**
 * Wrapper lazy du SteeveWidget.
 *
 * Charge dynamiquement le widget vocal (et son SDK ElevenLabs ~150 KiB)
 * APRÈS que la page soit pleinement interactive (requestIdleCallback /
 * fallback setTimeout 2s). Cela évite de pénaliser le LCP, le TBT et
 * le score Lighthouse mobile.
 */

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SteeveWidget = dynamic(
  () => import("./SteeveWidget").then((m) => ({ default: m.SteeveWidget })),
  { ssr: false, loading: () => null }
);

type RequestIdleCallback = (
  cb: () => void,
  options?: { timeout?: number }
) => number;

export function SteeveWidgetLazy() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const ric = (window as unknown as { requestIdleCallback?: RequestIdleCallback })
      .requestIdleCallback;
    const cic = (window as unknown as { cancelIdleCallback?: (id: number) => void })
      .cancelIdleCallback;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let idleId: number | undefined;

    if (typeof ric === "function") {
      idleId = ric(() => setShouldLoad(true), { timeout: 3000 });
    } else {
      timeoutId = setTimeout(() => setShouldLoad(true), 2000);
    }

    return () => {
      if (idleId !== undefined && typeof cic === "function") cic(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  return shouldLoad ? <SteeveWidget /> : null;
}
