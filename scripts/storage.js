/** localStorage wrapper — every read/write is guarded so a blocked store never breaks the page. */
export const Storage = {
  save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (_) {
      /* storage unavailable */
    }
  },

  load(key, fallback = null) {
    try {
      const raw = localStorage.getItem(key);
      if (raw == null) return fallback;
      return JSON.parse(raw);
    } catch (_) {
      return fallback;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (_) {
      /* ignore */
    }
  },

  keys() {
    try {
      return Object.keys(localStorage);
    } catch (_) {
      return [];
    }
  },
};
