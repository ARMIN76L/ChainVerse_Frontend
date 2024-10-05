import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { ClientProvider } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body>
          <ClientProvider>{children}</ClientProvider>
        </body>
      </html>
    </>
  );
}
