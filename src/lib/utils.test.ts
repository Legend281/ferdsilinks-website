import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('cn (className utility)', () => {
  it('should merge class names', () => {
    const result = cn('text-red-500', 'text-blue-500');
    expect(result).toBe('text-blue-500');
  });

  it('should handle conditional classes', () => {
    const isActive = true;
    const result = cn('base-class', isActive && 'active-class');
    expect(result).toBe('base-class active-class');
  });

  it('should handle false values', () => {
    const isActive = false;
    const result = cn('base-class', isActive && 'active-class');
    expect(result).toBe('base-class');
  });

  it('should merge tailwind classes with conflicting properties', () => {
    const result = cn('px-2 py-2', 'px-4');
    expect(result).toBe('py-2 px-4');
  });

  it('should handle empty inputs', () => {
    const result = cn();
    expect(result).toBe('');
  });

  it('should handle undefined values', () => {
    const result = cn('class1', undefined, 'class2');
    expect(result).toBe('class1 class2');
  });

  it('should handle array inputs', () => {
    const result = cn(['class1', 'class2']);
    expect(result).toBe('class1 class2');
  });

  it('should handle object inputs', () => {
    const result = cn({ 'class1': true, 'class2': false });
    expect(result).toBe('class1');
  });
});
