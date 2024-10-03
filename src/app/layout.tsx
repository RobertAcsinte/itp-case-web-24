import type { Metadata } from "next";
import "./globals.scss";


export const metadata: Metadata = {
  title: {
    template: '%s | In The Pocket',
    default: 'In The Pocket',
  },
  description: 'This is a website for In The Pocket',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
