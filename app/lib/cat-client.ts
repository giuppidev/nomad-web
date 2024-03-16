import { CatClient } from "ccat-api";

export const catClient = new CatClient({
  baseUrl: "localhost",
  timeout: 15000,
  ws: {
    path: "ws",
    retries: 3,
    delay: 3000,
    onFailed: () => {
      console.error("Failed to connect WebSocket after 3 retries.");
    },
  },
});
