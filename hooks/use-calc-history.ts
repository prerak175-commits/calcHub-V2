"use client";

import { useState, useCallback, useEffect } from 'react';

interface HistoryEntry {
  id: string;
  calculatorSlug: string;
  calculatorName: string;
  result: string;
  timestamp: number;
}

const HISTORY_KEY = 'calchub-history';
const MAX_HISTORY = 20;

export function useCalcHistory() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(HISTORY_KEY);
      if (stored) setHistory(JSON.parse(stored));
    } catch {}
  }, []);

  const addEntry = useCallback((entry: Omit<HistoryEntry, 'id' | 'timestamp'>) => {
    const newEntry: HistoryEntry = {
      ...entry,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      timestamp: Date.now(),
    };
    setHistory((prev) => {
      const updated = [newEntry, ...prev].slice(0, MAX_HISTORY);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    localStorage.removeItem(HISTORY_KEY);
  }, []);

  return { history, addEntry, clearHistory };
}
