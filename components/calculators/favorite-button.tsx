"use client";

import { Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/use-favorites';
import { Button } from '@/components/ui/button';

export function FavoriteButton({ slug }: { slug: string }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(slug);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => toggleFavorite(slug)}
      aria-label={fav ? 'Remove from favorites' : 'Add to favorites'}
      className="shrink-0 hover:bg-primary/10"
    >
      <Heart
        className={`w-5 h-5 transition-all duration-200 ${
          fav ? 'fill-destructive text-destructive scale-110' : 'text-muted-foreground hover:text-destructive'
        }`}
      />
    </Button>
  );
}
