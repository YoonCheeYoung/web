// app/layout.tsx
import { Providers } from "./login/providers";
import type {Metadata} from 'next'


export const metadata: Metadata = {
  title : 'AI Beta 서비스',
  description: 'AIBD에서 개발 중인 서비스 체험 ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}