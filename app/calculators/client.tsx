"use client";

import { useState, useMemo } from 'react';
import { Search, Star } from 'lucide-react';
import { CalculatorCard } from '@/components/calculators/calculator-card';
import { CurrencySelector } from '@/components/layout/currency-selector';
import { calculators, categories } from '@/data/calculators';
import { Input } from '@/components/ui/input';
import { useSearchParams } from 'next/navigation';
import { useFavorites } from '@/hooks/use-favorites';
import {
  Landmark,
  TrendingUp,
  Briefcase,
  PlayCircle,
  Package,
} from 'lucide-react';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Landmark,
  TrendingUp,
  Briefcase,
  PlayCircle,
  Package,
};

export function CalculatorsClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [showFavorites, setShowFavorites] = useState(false);
  const { favorites, isFavorite } = useFavorites();

  const filtered = useMemo(() => {
    let list = calculators;
    if (showFavorites) {
      list = list.filter((c) => isFavorite(c.slug));
    }
    return list.filter((c) => {
      const matchesSearch =
        search === '' ||
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === 'all' || c.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory, showFavorites, isFavorite]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          All Calculators
        </h1>
        <p className="text-muted-foreground">
          Find the right calculator for your needs. Search or filter by category.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search calculators..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-10"
            aria-label="Search calculators"
          />
        </div>
        <CurrencySelector />
        <button
          onClick={() => setShowFavorites(!showFavorites)}
          className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg border transition-colors shrink-0 ${
            showFavorites
              ? 'bg-primary text-primary-foreground border-primary'
              : 'bg-card text-muted-foreground border-border hover:border-primary/30'
          }`}
          aria-label={showFavorites ? 'Show all calculators' : 'Show favorites only'}
        >
          <Star className={`w-4 h-4 ${showFavorites ? 'fill-current' : ''}`} />
          <span className="hidden sm:inline">Favorites</span>
          {favorites.length > 0 && (
            <span className="text-xs bg-primary-foreground/20 px-1.5 py-0.5 rounded-full">
              {favorites.length}
            </span>
          )}
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
            activeCategory === 'all'
              ? 'bg-primary text-primary-foreground border-primary'
              : 'bg-card text-muted-foreground border-border hover:border-primary/30'
          }`}
        >
          All
        </button>
        {categories.map((cat) => {
          const Icon = categoryIcons[cat.icon];
          return (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-3 py-1.5 text-sm rounded-lg border transition-colors flex items-center gap-1.5 ${
                activeCategory === cat.slug
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card text-muted-foreground border-border hover:border-primary/30'
              }`}
            >
              {Icon && <Icon className="w-3.5 h-3.5" />}
              {cat.name}
            </button>
          );
        })}
      </div>

      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((calc) => (
            <CalculatorCard key={calc.slug} calculator={calc} showCategory />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          {showFavorites && favorites.length === 0 ? (
            <>
              <Star className="w-10 h-10 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground mb-1">No favorites yet</p>
              <p className="text-xs text-muted-foreground mb-4">Click the heart icon on any calculator to save it here.</p>
              <button
                onClick={() => setShowFavorites(false)}
                className="text-sm text-primary hover:underline"
              >
                Browse all calculators
              </button>
            </>
          ) : (
            <>
              <p className="text-muted-foreground">No calculators found matching your search.</p>
              <button
                onClick={() => {
                  setSearch('');
                  setActiveCategory('all');
                }}
                className="text-sm text-primary hover:underline mt-2"
              >
                Clear filters
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
