/**
 * Resolve asset prefix for Electron (.../app/...) and GitHub Pages (.../bo7-zombies-ee-aio/...).
 */
(function () {
  const REPO = "bo7-zombies-ee-aio";

  function assetPrefix() {
    const raw = window.location.pathname.replace(/\\/g, "/");
    const dir = raw.endsWith("/")
      ? raw
      : raw.slice(0, raw.lastIndexOf("/") + 1);

    const markers = [`/${REPO}/`, "/app/"];
    for (const marker of markers) {
      const idx = dir.toLowerCase().lastIndexOf(marker.toLowerCase());
      if (idx >= 0) {
        const after = dir.slice(idx + marker.length);
        const depth = after.split("/").filter(Boolean).length;
        return depth ? "../".repeat(depth) : "./";
      }
    }

    // file:// fallback: count folders after the last "app" segment
    const parts = dir.split("/").filter(Boolean);
    const appIdx = parts.map((p) => p.toLowerCase()).lastIndexOf("app");
    if (appIdx >= 0) {
      const depth = parts.length - appIdx - 1;
      return depth > 0 ? "../".repeat(depth) : "./";
    }

    return "./";
  }

  window.CMZ_ASSET_PREFIX = assetPrefix();
})();

(async () => {
  const header = document.getElementById("header");
  if (!header) return;

  const prefix = window.CMZ_ASSET_PREFIX || "./";

  try {
    const res = await fetch(prefix + "components/header.html");
    header.innerHTML = await res.text();
  } catch (err) {
    console.error("Failed to load header", err);
    return;
  }

  const logo = header.querySelector("img[data-logo]");
  if (logo) {
    logo.src = prefix + "assets/images/logo/cmz-logo.webp";
  }

  try {
    const versionRes = await fetch(prefix + "version.json");
    const versionData = await versionRes.json();
    const versionEl = document.getElementById("app-version");
    if (versionEl) {
      versionEl.textContent = `Version ${versionData.version}`;
    }
  } catch (err) {
    console.warn("version.json missing", err);
  }
})();
