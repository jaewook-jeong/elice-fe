import { ReactNode } from 'react';

export type RenderFallbackParams = {
  error: unknown;
  reset?: (...args: unknown[]) => void;
};

export type ErrorBoundaryProps = {
  renderFallback?: (params: RenderFallbackParams) => ReactNode;
  reset?: (...args: unknown[]) => void;
  children: ReactNode;
};

export type ErrorBoundaryState = {
  hasError: boolean;
  error: unknown;
};
