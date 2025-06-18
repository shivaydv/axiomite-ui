import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { remarkTypeScriptToJavaScript } from 'fumadocs-docgen/remark-ts2js';
import { remarkInstall } from 'fumadocs-docgen';
import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';
import { z } from "zod";


// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema.extend({
      // Add custom frontmatter fields here
      
      new: z.boolean().default(false).optional(),
      pro: z.boolean().default(false).optional(),
    }),
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    // MDX options
    remarkPlugins: [remarkInstall,remarkTypeScriptToJavaScript],
    remarkCodeTabOptions: {
      parseMdx: true,
    },
    rehypeCodeOptions: {
      ...rehypeCodeDefaultOptions,
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        {
          name: '@shikijs/transformers:remove-notation-escape',
          code(hast) {
            function replace(node: any): void {
              if (node.type === 'text') {
                // Handle both escaped and unescaped versions
                node.value = node.value
                  .replace(/\\\[\\!code/g, '[!code')
                  .replace(/\[\\!code/g, '[!code');
              } else if ('children' in node) {
                for (const child of node.children) {
                  replace(child);
                }
              }
            }

            replace(hast);
            return hast;
          },
        },
      ],
      
    },
  },
});
