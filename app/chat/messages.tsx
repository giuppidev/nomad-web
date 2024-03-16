"use client";

import { useState } from "react";
import { catClient } from "../lib/cat-client";

type CatMessage = {
  sender: "human" | "ai";
  content: "string";
};

export const Messages = () => {
  const [messages, setMessages] = useState<CatMessage[]>([]);
  const [tokens, setTokens] = useState<string>("");
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);

  catClient.onMessage(({ content, type }) => {
    switch (type) {
      case "chat_token":
        setTokens((prev) => prev + content);
        break;
      case "chat":
        setMessages((prev) => [
          ...prev,
          { content: content, sender: "ai" } as CatMessage,
        ]);
        setLoading(false);
        // setTokens([]);
        break;
      default:
        break;
    }
  });

  const sendMessage = () => {
    setLoading(true);
    catClient.send(newMessage);
    setMessages((prev) => [
      ...prev,
      { sender: "human", content: newMessage } as CatMessage,
    ]);
    setNewMessage("");
  };
  return (
    <div className="flex flex-col justify-between h-full w-full">
      <div className="flex flex-col gap-2">
        {messages.map((message) => (
          <div
            key={message.content}
            className={`${message.sender === "ai" ? "bg-red-200" : "bg-white"}`}
          >
            {message.content}
          </div>
        ))}
      </div>
      <div>{tokens}</div>
      <div className="grid grid-cols-[1fr_auto] gap-4">
        <input
          type="text"
          className="border border-gray-900"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="p-2 bg-blue-300 rounded-sm border border-gray-900 disabled:bg-blue-100"
          onClick={sendMessage}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};
