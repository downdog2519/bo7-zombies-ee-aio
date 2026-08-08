// ⭐ Pure module — exports only functions, runs nothing on import
export const Router = {
  go(path) {
    window.location.href = path;
  },

  back() {
    window.history.back();
  }
};