"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Message {
  id: number;
  user: string;
  message: string;
  time: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, user: "Alice", message: "Hi there!", time: "10:00 AM" },
    { id: 2, user: "Bob", message: "Hello! How are you?", time: "10:01 AM" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const msg: Message = {
      id: messages.length + 1,
      user: "Me",
      message: newMessage,
      time: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, msg]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-screen max-w-xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Chat Room</h2>
      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        {messages.map((msg) => (
          <Card key={msg.id} className="p-3">
            <div className="text-sm text-gray-500">{msg.user} • {msg.time}</div>
            <div className="text-base">{msg.message}</div>
          </Card>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </div>
  );
}