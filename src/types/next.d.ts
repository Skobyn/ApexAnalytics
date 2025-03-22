import { ReadonlyURLSearchParams } from 'next/navigation';

/**
 * Define SearchParams type for better compatibility with Next.js
 */
export type SearchParams = { [key: string]: string | string[] | undefined };

/**
 * Common page props interface for Next.js App Router
 */
export interface PageProps<Params = unknown, SearchParamsInput = unknown> {
  params: Params;
  searchParams?: SearchParamsInput;
}

/**
 * Utility type for dynamic route parameters
 */
export interface DynamicRouteParams {
  [key: string]: string;
}

/**
 * ReadonlySearchParams for immutable search parameters
 */
export type ReadonlySearchParams = ReadonlyURLSearchParams; 