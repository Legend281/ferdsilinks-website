interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div 
      className={`animate-pulse bg-surface-container-high rounded ${className}`}
    />
  );
}

export function HeroSkeleton() {
  return (
    <div className="min-h-[85vh] flex items-center bg-surface">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-3/4" />
            <Skeleton className="h-24 w-full" />
            <div className="flex gap-4 pt-4">
              <Skeleton className="h-14 w-40" />
              <Skeleton className="h-14 w-48" />
            </div>
          </div>
          <div className="hidden lg:block">
            <Skeleton className="h-[400px] w-full rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardGridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-surface-container-lowest p-10 rounded-xl space-y-4">
          <Skeleton className="h-16 w-16 rounded-lg" />
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-6 w-24" />
        </div>
      ))}
    </div>
  );
}

export function BlogCardSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="aspect-[16/10] w-full rounded-xl" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-4 w-20" />
        </div>
      ))}
    </div>
  );
}

export function CourseCardSkeleton({ count = 2 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden">
          <Skeleton className="w-full md:w-2/5 aspect-video md:aspect-square" />
          <div className="p-8 flex-1 space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <div className="flex gap-4">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-20" />
            </div>
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-12 w-full mt-4" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function SectionSkeleton() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <Skeleton className="h-6 w-32 mx-auto" />
          <Skeleton className="h-12 w-96 mx-auto" />
          <Skeleton className="h-6 w-[500px] mx-auto" />
        </div>
        <CardGridSkeleton count={4} />
      </div>
    </section>
  );
}

export function TestimonialSkeleton() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-6 w-3/4" />
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white p-8 rounded-xl space-y-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <Skeleton key={j} className="h-6 w-6 rounded" />
                  ))}
                </div>
                <Skeleton className="h-24 w-full" />
                <div className="flex items-center gap-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-32" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TeamGridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-surface-container-lowest rounded-xl p-6 space-y-4">
          <Skeleton className="aspect-[4/5] w-full rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ContactFormSkeleton() {
  return (
    <div className="bg-surface-container-lowest p-8 lg:p-12 rounded-xl space-y-6">
      <Skeleton className="h-10 w-48" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-12 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-32 w-full" />
      </div>
      <Skeleton className="h-14 w-48" />
    </div>
  );
}

export function ServiceDetailSkeleton() {
  return (
    <div className="space-y-16">
      <HeroSkeleton />
      <div className="max-w-7xl mx-auto px-6">
        <section className="py-32 space-y-8">
          <div className="space-y-4 text-center">
            <Skeleton className="h-8 w-64 mx-auto" />
            <Skeleton className="h-14 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-surface-container-low p-10 rounded-xl space-y-4">
                <Skeleton className="h-12 w-12" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-16 w-full" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export function PodcastHeroSkeleton() {
  return (
    <div className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-surface-container-high" />
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Skeleton className="h-10 w-40" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-3/4" />
            <Skeleton className="h-6 w-[500px]" />
            <div className="flex gap-4 pt-4">
              <Skeleton className="h-20 w-20 rounded-full" />
              <div className="space-y-2 pt-4">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-4 w-36" />
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <Skeleton className="h-14 w-44" />
              <Skeleton className="h-14 w-44" />
            </div>
          </div>
          <div className="hidden lg:block">
            <Skeleton className="aspect-square rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
