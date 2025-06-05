"use client";

import { useRef } from "react";

export function useMatrixClient() {
  const clientRef = useRef<any>(null);

  async function initMatrixClient(homeserverUrl: string, accessToken: string, userId: string) {
    if (typeof window === "undefined") throw new Error("Matrix client can only be used on the client");
    const { createClient } = await import("matrix-js-sdk");
    clientRef.current = createClient({
      baseUrl: homeserverUrl,
      accessToken,
      userId,
    });
    return clientRef.current;
  }

  return { client: clientRef.current, initMatrixClient };
}
