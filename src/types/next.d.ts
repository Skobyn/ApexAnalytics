import { ReadonlyURLSearchParams } from 'next/navigation';

// Define SearchParams type for better compatibility
export type SearchParams = { [key: string]: string | string[] | undefined };

// Define common page props for Next.js App Router
export interface PageProps<Params = {}, SearchParamsInput = {}> {
  params: Params;
  searchParams?: SearchParamsInput;
}

// Utility type for dynamic route parameters
export interface DynamicRouteParams {
  [key: string]: string;
}

// Define ReadonlySearchParams type if needed
export type ReadonlySearchParams = ReadonlyURLSearchParams; 