import React from 'react';

import { HeroUIProvider } from '@heroui/system';
import { MDXProvider } from '@mdx-js/react';
import { HashRouter, useHref, useNavigate } from 'react-router-dom';

const HeroUIProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      {children}
    </HeroUIProvider>
  );
};

const Providers = ({ children }: { children: React.ReactNode }) => {
  const components = {};

  return (
    <HashRouter>
      <HeroUIProviderWrapper>
        <MDXProvider components={components}>{children}</MDXProvider>
      </HeroUIProviderWrapper>
    </HashRouter>
  );
};

export default Providers;
