'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Görünüme yaklaşınca dinamik import + mount.
 * - Bundle code-split: section chunk ilk yükte gelmez, IO tetikleyince fetch.
 * - DOM render gating: mount edene kadar sadece placeholder div (height rezerve, layout shift yok).
 * - content-visibility: auto → tarayıcıya off-screen render skip izni.
 */
export default function LazySection({
  load,
  fallbackMinHeight = '80vh',
  rootMargin = '600px 0px',
}) {
  const ref = useRef(null);
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    if (Component) return undefined;
    const el = ref.current;
    if (!el) return undefined;

    // IO desteklemeyen ortam: hemen yükle (fallback).
    if (typeof IntersectionObserver === 'undefined') {
      load().then((mod) => setComponent(() => mod.default || mod));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          load().then((mod) => setComponent(() => mod.default || mod));
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [Component, load, rootMargin]);

  // Mount sonrası ScrollTrigger refresh — lazy section'lar kendi trigger'larını
  // kurarken document layout güncel olsun (yeni eklenen section'un height'ı dahil).
  useEffect(() => {
    if (!Component) return;
    let cancelled = false;
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      if (cancelled) return;
      requestAnimationFrame(() => ScrollTrigger.refresh());
    }).catch(() => {});
    return () => { cancelled = true; };
  }, [Component]);

  if (Component) return <Component />;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        minHeight: fallbackMinHeight,
        contentVisibility: 'auto',
        containIntrinsicSize: `1px ${fallbackMinHeight}`,
      }}
    />
  );
}
