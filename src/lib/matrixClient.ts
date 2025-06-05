// Remove all Matrix SDK logic from this file. Matrix is fully disabled for troubleshooting and fast reload.

export async function createMatrixClient(homeserverUrl: string, accessToken: string, userId: string) {
  if (typeof window === 'undefined') {
    throw new Error('createMatrixClient must only be called on the client side');
  }
  // Dynamically import matrix-js-sdk only on the client side
  const { createClient } = await import("matrix-js-sdk");
  const client = createClient({
    baseUrl: homeserverUrl,
    accessToken: accessToken,
    userId: userId,
  });
  return client;
}