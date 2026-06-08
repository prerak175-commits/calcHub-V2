"use client";

import { useState, useCallback, useEffect } from 'react';

const FAVORITES_KEY = 'calchub-favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) setFavorites(JSON.parse(stored));
    } catch {}
  }, []);

  const toggleFavorite = useCallback((slug: string) => {
    setFavorites((prev) => {
      const updated = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const isFavorite = useCallback(
    (slug: string) => favorites.includes(slug),
    [favorites]
  );

  return { favorites, toggleFavorite, isFavorite };
}
