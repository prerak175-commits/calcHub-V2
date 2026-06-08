"use client";

import { useState } from 'react';
import { Copy, Share2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ShareCopyButtonsProps {
  results: { label: string; value: string }[];
  calculatorName: string;
}

export function ShareCopyButtons({ results, calculatorName }: ShareCopyButtonsProps) {
  const [copied, setCopied] = useState(false);

  const text = `${calculatorName} Results:\n${results.map((r) => `${r.label}: ${r.value}`).join('\n')}\n\nCalculated with CalcHub`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${calculatorName} - CalcHub`,
          text,
          url: window.location.href,
        });
      } catch {}
    } else {
      handleCopy();
    }
  };

  return (
    <div className="flex items-center gap-2 pt-2">
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopy}
        className="text-xs gap-1.5"
      >
        {copied ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
        {copied ? 'Copied!' : 'Copy Results'}
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={handleShare}
        className="text-xs gap-1.5"
      >
        <Share2 className="w-3.5 h-3.5" />
        Share
      </Button>
    </div>
  );
}
