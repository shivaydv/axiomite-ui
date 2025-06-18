import type { MDXComponents } from 'mdx/types';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import * as FilesComponents from 'fumadocs-ui/components/files';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import * as icons from 'lucide-react';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { ComponentPreview } from './components/component-preview';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    ...(icons as unknown as MDXComponents),
    ...FilesComponents,
    ...TabsComponents,
    Accordions,
    Accordion,
    // Add any additional components or overrides here
    ComponentPreview
  };
}
