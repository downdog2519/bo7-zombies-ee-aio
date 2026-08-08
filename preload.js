const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  // You can expose safe functions here later if needed
});