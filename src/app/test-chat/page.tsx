'use client';

import { useMatrixClient } from '@/hooks/useMatrixClient';
import { useEffect } from 'react';

export default function TestChat() {
  const { client, initMatrixClient } = useMatrixClient();

  useEffect(() => {
    async function loginToMatrix() {
      try {
        const homeserverUrl = "http://localhost:8008";
        const matrixClient = await initMatrixClient(homeserverUrl, "", "");
        if (!matrixClient) {
          console.error("Matrix client not initialized");
          return;
        }
        const response = await matrixClient.login("m.login.password", {
          user: "Rahul",
          password: "12345678",
        });
        console.log("✅ Logged in:", response);
        await initMatrixClient(
          homeserverUrl,
          response.access_token,
          response.user_id
        );
        console.log("✅ User ID:", matrixClient.getUserId());
        matrixClient.startClient();
      } catch (err) {
        console.error("Matrix login error:", err);
      }
    }
    loginToMatrix();
  }, [initMatrixClient]);

  return <div>Check console for logs (and errors, if any)</div>;
}
