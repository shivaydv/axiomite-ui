import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter,Poppins } from 'next/font/google';
import type { ReactNode } from 'react';

// const inter = Inter({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   variable: '--font-inter'
// });
const poppins = Poppins({
  subsets: ['latin']
  , weight: ['400', '500', '600', '700']
  , variable: '--font-poppins'
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider theme={{defaultTheme:"dark"}} >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
