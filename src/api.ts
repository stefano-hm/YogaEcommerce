const API_URL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_API_URL_PROD
    : import.meta.env.VITE_API_URL_LOCAL;

console.log("[api] API_URL resolved to:", API_URL);

export async function savePurchase(walletAddress: string, productId: string) {
  console.log("[api] savePurchase called", walletAddress, productId);

  try {
    const res = await fetch(`${API_URL}/purchases`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        walletAddress: walletAddress.toLowerCase(),
        productId,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Error savePurchase: ${res.status} ${text}`);
    }

    const data = await res.json();
    console.log("[api] savePurchase response:", data);
    return data;
  } catch (err) {
    console.error("[api] savePurchase failed:", err);
    throw err;
  }
}

export async function getPurchases(walletAddress: string): Promise<string[]> {
  const wallet = walletAddress.toLowerCase();
  console.log("[api] getPurchases called for", wallet);

  try {
    const res = await fetch(`${API_URL}/purchases/${wallet}`);

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Error getPurchases: ${res.status} ${text}`);
    }

    const data = await res.json();
    console.log("[api] getPurchases response JSON:", data);
    return data;
  } catch (err) {
    console.error("[api] getPurchases failed:", err);
    throw err;
  }
}
