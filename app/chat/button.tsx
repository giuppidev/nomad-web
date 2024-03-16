"use client";

import { catClient } from "../lib/cat-client";

export const SendButton = () => {
  return <button onClick={() => catClient.send("ciao")}>Send message</button>;
};
