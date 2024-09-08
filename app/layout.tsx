import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Analytics } from "@vercel/analytics/react"
import { PHProvider } from './providers'
import dynamic from 'next/dynamic'

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <PHProvider>
        <body className={`${inter.className} antialiased`}>{children}</body>
        <Analytics />
        <PostHogPageView /> 
      </PHProvider>
    </html>
  );
}
