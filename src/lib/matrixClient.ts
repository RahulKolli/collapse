import { createClient } from "matrix-js-sdk";

export function createMatrixClient(homeserverUrl: string, accessToken: string, userId: string) {
  const client = createClient({
    baseUrl: homeserverUrl,
    accessToken: accessToken,
    userId: userId,
  });

  return client;
}