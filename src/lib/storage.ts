const KEY = "favorites_v1";

export function getFavorites(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage?.getItem(KEY);
    return raw ? JSON.parse(raw) as number[] : [];
  } catch {
    return [];
  }
}

export function setFavorites(ids: number[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(ids));
}

export function toggleFavorite(id: number): number[] {
  const favs = getFavorites();
  const updated = favs.includes(id) ? favs.filter((f) => f !== id) : [...favs, id];
  setFavorites(updated);
  return updated;
}
