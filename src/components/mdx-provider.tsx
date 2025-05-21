'use client';

import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { useMDXComponents } from './mdx-components';

interface MDXProviderWrapperProps {
  children: React.ReactNode;
}

export function MDXProviderWrapper({ children }: MDXProviderWrapperProps) {
  const components = useMDXComponents({});
  
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  );
}
