'use client';

import { useEffect } from 'react';
import { createMatrixClient } from '@/lib/matrixClient';

export default function TestChat() {
  useEffect(() => {
    async function loginToMatrix() {
      const homeserverUrl = "http://localhost:8008";
      const response = await createMatrixClient(homeserverUrl, "", "").login("m.login.password", {
        user: "Rahul",
        password: "12345678",
      });

      console.log("✅ Logged in:", response);

      const client = createMatrixClient(
        homeserverUrl,
        response.access_token,
        response.user_id
      );
      // Device ID is set internally; no need to set it manually.
      console.log("✅ User ID:", client.getUserId());

      client.startClient(); // start syncing
    }

    loginToMatrix();
  }, []);

  return <div>Test Chat Page</div>;
}
