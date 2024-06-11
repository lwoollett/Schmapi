export default defineWebSocketHandler({
  // Default Nitro WebSocket Handler

  open(peer) {
    console.log("[ws] open", peer);
  },

  message(peer, message) {
    console.log("[ws] message", peer, message);
    peer.publish("chat", `[${peer}] $message`);
    peer.send(`[${peer}] $message`);
  },

  close(peer, event) {
    console.log("[ws] close", peer, event);
  },

  error(peer, error) {
    console.log("[ws] error", peer, error);
  },
});
