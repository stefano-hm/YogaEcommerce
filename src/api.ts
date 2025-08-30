const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export async function savePurchase(walletAddress: string, productId: string) {
  console.log("[api] savePurchase called", walletAddress, productId);

  const res = await fetch(`${API_URL}/purchases`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      walletAddress: walletAddress.toLowerCase(),
      productId,
    }),
  });

  const text = await res.text();
  console.log("[api] savePurchase response status:", res.status, "body:", text);

  if (!res.ok) throw new Error(`Error savePurchase: ${res.status} ${text}`);
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export async function getPurchases(walletAddress: string): Promise<string[]> {
  const wallet = walletAddress.toLowerCase();
  console.log("[api] getPurchases called for", wallet);

  const res = await fetch(`${API_URL}/purchases/${wallet}`);
  const text = await res.text();
  console.log("[api] getPurchases response status:", res.status, "body:", text);

  if (!res.ok) throw new Error(`Error getPurchases: ${res.status} ${text}`);
  try {
    return JSON.parse(text);
  } catch {
    throw new Error("Invalid JSON response from getPurchases");
  }
}
