'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Blog page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-6 pt-24">
      <div className="max-w-lg text-center space-y-6">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
          <span className="material-symbols-outlined text-red-500 text-4xl">article</span>
        </div>
        <h1 className="font-headline text-3xl font-bold text-primary">
          Blog Error
        </h1>
        <p className="text-on-surface-variant">
          Unable to load blog content. Please try again.
          {error.digest && (
            <span className="block mt-2 text-sm text-outline">
              Error ID: {error.digest}
            </span>
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-4 bg-on-tertiary-container text-white rounded-lg font-bold hover:opacity-90 transition-all"
          >
            Try again
          </button>
          <Link
            href="/blog"
            className="px-8 py-4 border-2 border-outline-variant rounded-lg font-bold hover:bg-surface-container-high transition-all"
          >
            Back to blog
          </Link>
        </div>
      </div>
    </div>
  );
}
