import { type ClassValue, clsx } from 'clsx';

/**
 * Utility function to merge class names conditionally
 * Combines clsx functionality for conditional classes
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}